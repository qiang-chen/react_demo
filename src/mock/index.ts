/**
 * @description 
 * @author cq
 * @Date 2020-05-27 18:06:41
 * @LastEditTime 2020-05-28 11:22:24
 * @LastEditors cq
 */
import Mock from "mockjs"

console.log(22222)
Mock.mock("/home/list", {
  //属性list的值是一个数组，中含有1-5个元素
  'list|1-5': [{
    //属性sid是一个自增数组，起始值为1，每次增加1
    'sid|+1': 1,
    //属性userId是一个5位的随机码
    'userId|5': '',
    'city': '@county(true)',//随机城市名字
  }]
  //"string|1-10": "★" mock
})

// export default data