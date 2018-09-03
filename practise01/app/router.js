//配置路由映射 写要导出路由模块
module.exports = app => {
    const { router, controller } = app;
    router.get('/',controller.home.index);
}