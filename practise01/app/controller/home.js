//拿到 egg 对象后 再拿到 Controller 基类
const Controller = require('egg').Controller;

//基于 Controller 基类写一个自己的 Controller 类，继承Controller的方法属性
class HomeController extends Controller {
    //在自己 Controller 类中写一个控制器函数
    async index() {
        this.ctx.body = 'Hello world, Hello egg!';
    }
}

module.exports = HomeController;

/**
 类似于：
const egg = require("egg");
const Controller = egg.Controller;
class HomeController extends Controller {}
module.exports = HomeController;
class HomeController extends Controller {
    async index() {
        this.ctx.body = "Hello world";
    }
}
 */