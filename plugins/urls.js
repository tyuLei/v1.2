// 是否为正式环境
// console.log(process.env, 'process.env.PORT');
// global.SERVIEC_URL_PATH = "https://factory.nebuladata.cn:30006/api";
// global.SERVIEC_URL_PATH = "https://factory.nebuladata.cn:30002/api"

if (process.env.NODE_ENV == 'production') {
  // global.SERVIEC_URL_PATH = "https://www.nebuladata.cn:30002/api"
  // global.SERVIEC_URL_PATH = "https://factory.nebuladata.cn:30002/api"
  // global.SERVIEC_URL_PATH = "https://factory.nebuladata.cn:30006/api";
  // global.SERVIEC_URL_PATH = `https://factory.nebuladata.cn:${process.env.PORT}/api`;
  global.SERVIEC_URL_PATH = `https://mgrtest.nebuladata.cn/api`;
} else {
  // global.SERVIEC_URL_PATH = "http://172.26.190.58:8082";
  global.SERVIEC_URL_PATH = "http://172.26.190.13:8089";
}
