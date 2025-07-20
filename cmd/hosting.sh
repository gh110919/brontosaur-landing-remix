export $(grep -v "^#" ".env" | xargs)
export GPG_TTY=$(tty)

sudo apt-get update && sudo apt-get install \
  -y ca-certificates curl gnupg lsb-release

sudo mkdir \
  -p "/etc/apt/keyrings"

# Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg \
  --batch --yes --dearmor \
  -o /etc/apt/keyrings/docker.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update && sudo apt-get install \
  -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

sudo pkill -9 caddy || true
sudo fuser -k 80/tcp || true
sudo fuser -k 443/tcp || true

sudo apt-get -o Dpkg::Options::="--force-confnew" full-upgrade -y

sudo apt-get update && sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https

# Caddy
sudo mkdir -p /etc/apt/keyrings

curl -1sLf "https://dl.cloudsmith.io/public/caddy/stable/gpg.key" | sudo gpg \
  --batch --yes --dearmor \
  -o /etc/apt/keyrings/caddy-stable-archive-keyring.gpg

echo "deb [signed-by=/etc/apt/keyrings/caddy-stable-archive-keyring.gpg] \
https://dl.cloudsmith.io/public/caddy/stable/deb/debian all main" | sudo tee /etc/apt/sources.list.d/caddy-stable.list > /dev/null

sudo apt-get update && sudo apt-get install -y caddy

sudo apt autoremove -y

sudo tee /etc/caddy/Caddyfile << EOF
{
  email $EMAIL_USER
  acme_ca https://acme-v02.api.letsencrypt.org/directory
  renew_interval 24h
}
$DOMAIN {
    bind $HOST

    reverse_proxy 127.0.0.1:$PORT

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

sudo caddy fmt --overwrite "/etc/caddy/Caddyfile"
sudo caddy validate --config "/etc/caddy/Caddyfile"
sudo chown -R caddy:caddy "/etc/caddy"

sudo systemctl daemon-reload
sudo systemctl restart caddy || (journalctl -u caddy --no-pager && exit 1)

bash "cmd/compose.sh"