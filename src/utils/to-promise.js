/*
 * @Author: your name
 * @Date: 2021-03-19 11:50:09
 * @LastEditTime: 2022-07-18 16:56:49
 * @LastEditors: zzx 452436275@qq.com
 * @Description: In User Settings Edit
 * @FilePath: /production_web/src/utils/to-promise.js
 */
function to(promise) {
  return promise
    .then((res) => {
      return { err: null, res: res }
    })
    .catch((err) => {
      return {
        err
      }
    })
}

export default to
