module.exports = {
  apps: [
    {
      name: "Clemaster",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3500",
      cwd: `${process.env.HOME}/clemaster`,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};