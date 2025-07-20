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

sudo apt-get -o Dpkg::Options::="--force-confnew" full-upgrade -y

sudo apt-get update && sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https

# Удаляем неработающий репозиторий Caddy (если был добавлен ранее)
sudo rm -f /etc/apt/sources.list.d/caddy-stable.list

# Создаём папку для Caddyfile, если не существует
sudo mkdir -p /etc/caddy

# Устанавливаем Caddy через официальный скрипт
curl -1sLf 'https://caddyserver.com/api/download?os=linux&arch=amd64' | sudo tar xz -C /usr/local/bin caddy
sudo setcap 'cap_net_bind_service=+ep' /usr/local/bin/caddy
sudo useradd --system --group --home /var/lib/caddy --shell /usr/sbin/nologin caddy || true
sudo mkdir -p /var/lib/caddy /var/log/caddy
sudo chown -R caddy:caddy /etc/caddy /var/lib/caddy /var/log/caddy

# Проверяем, что Caddy установлен
caddy version

# Проверяем и запускаем Docker
sudo systemctl start docker || true
sudo systemctl enable docker || true

sudo pkill -9 caddy || true
sudo fuser -k 80/tcp || true
sudo fuser -k 443/tcp || true

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

bash "cmd/compose.sh"