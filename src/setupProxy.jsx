import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/coupang', {
      target: 'https://www.coupang.com', // 실제 Coupang 웹사이트 주소
      changeOrigin: true,
      pathRewrite: {
        '^/coupang': 'np/categories/306749?channel=plp_C2',
      },
    })
  );
};