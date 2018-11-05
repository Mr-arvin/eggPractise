//拿到 egg 对象后 再拿到 Controller 基类
const Controller = require('egg').Controller;

//基于 Controller 基类写一个自己的 Controller 类，继承Controller的方法属性
class NewsController extends Controller {
    //在自己 Controller 类中写一个控制器函数
    async list() {
        const dataList = {
          list: [
            { id: 1, title: 'this is news 1', url: '/news/1' },
            { id: 2, title: 'this is news 2', url: '/news/2' }
          ]
        };
        await this.ctx.render('news/list.tpl', dataList);
      }
}

module.exports = NewsController;

