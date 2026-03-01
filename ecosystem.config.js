module.exports = {
  apps: [
    {
      name: "Clemaster",
      script: "npm",
      args: "start",
      cwd: `${process.env.HOME}/clemaster`,
      env: {
        NODE_ENV: "production",
        PORT: 3500,
      },
      watch: false,
      autorestart: true,
      max_memory_restart: "500M",
    },
  ],
};
