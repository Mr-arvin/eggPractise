//配置路由映射 写要导出路由模块
module.exports = app => {
    const { router, controller } = app;
    router.get("/",controller.home.index);
    router.get("/about", controller.home.about);
    router.get("/get", controller.home.get);
    router.get("/getid/:id", controller.home.getId);
}