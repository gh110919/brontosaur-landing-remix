module.exports = {
  apps: [
    {
      name: "serve",
      script: "bun",
      args: "run serve",
      watch: false,
      autorestart: true,
      restart_delay: 5000,
    },
    {
      name: "start",
      script: "bun",
      args: "run prod",
      watch: false,
      autorestart: true,
      restart_delay: 5000,
    },
  ],
};
