// webpack - 절대 경로 설정
const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@layout": path.resolve(__dirname, "src/layout/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@store": path.resolve(__dirname, "src/store/"),
      "@style": path.resolve(__dirname, "src/style/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
    },
  },
};
