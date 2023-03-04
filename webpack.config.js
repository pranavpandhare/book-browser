module.exports = {
  devServer: {
    client: {
      webSocketURL: {
        hostname: ({}).HMR_HOST
          ? new URL(({}).HMR_HOST).hostname
          : "localhost",
        port: ({}).HMR_HOST ? 443 : 3000,
        protocol: "wss",
      },
    },
  },
};