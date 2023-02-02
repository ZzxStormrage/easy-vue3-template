/*
 * @Date: 2023-02-02 11:21:53
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-02-02 11:21:57
 * @FilePath: /easy-vue3-template/src/utils/deepCopy.js
 */
//深拷贝数据
export default function deepCopy(data) {
  //string,number,bool,null,undefined,symbol
  //object,array,date
  if (data && typeof data === 'object') {
    //针对函数的拷贝
    if (typeof data === 'function') {
      let tempFunc = data.bind(null)
      tempFunc.prototype = deepCopy(data.prototype)
      return tempFunc
    }

    switch (Object.prototype.toString.call(data)) {
      case '[object String]':
        return data.toString()
      case '[object Number]':
        return Number(data.toString())
      case '[object Boolean]':
        return new Boolean(data.toString())
      case '[object Date]':
        return new Date(data.getTime())
      case '[object Array]':
        var arr = []
        for (let i = 0; i < data.length; i++) {
          arr[i] = deepCopy(data[i])
        }
        return arr

      //js自带对象或用户自定义类实例
      case '[object Object]':
        var obj = {}
        for (let key in data) {
          //会遍历原型链上的属性方法，可以用hasOwnProperty来控制 （obj.hasOwnProperty(prop)
          obj[key] = deepCopy(data[key])
        }
        return obj
    }
  } else {
    //string,number,bool,null,undefined,symbol
    return data
  }
}
