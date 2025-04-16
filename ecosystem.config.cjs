module.exports = {
  apps: [
    {
      name: "back",
      script: "bash",
      args: "cmd/backend.sh",
      watch: false,
      autorestart: true,
      restart_delay: 5000,
    },
    {
      name: "front",
      script: "bash",
      args: "cmd/frontend.sh",
      watch: false,
      autorestart: true,
      restart_delay: 5000,
    },
  ],
};
