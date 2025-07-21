export $(cat .env | grep -v '^#' | grep -v '^$' | xargs)

sudo apt install docker.io -y
sudo apt install docker-compose-v2 -y

sudo apt install caddy -y
sudo chown -R caddy:caddy "/var/lib/caddy"
sudo chmod -R 700 "/var/lib/caddy"

sudo tee "/etc/caddy/Caddyfile" << EOF
{
  email $EMAIL_USER
  acme_ca https://acme-v02.api.letsencrypt.org/directory
  renew_interval 24h
}
$DOMAIN {
    bing $HOST

    reverse_proxy 127.0.0.1:$FRONT

    @api path /api/*
    handle @api {
        reverse_proxy 127.0.0.1:$BACK
    } 

    encode gzip
    
    tls {
        protocols tls1.3
        ciphers TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
    }
}
EOF

sudo systemctl restart caddy
sudo systemctl restart docker
sudo systemctl restart docker-compose-v2

bash "cmd/compose.sh"