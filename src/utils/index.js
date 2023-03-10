/*
 * @Date: 2023-03-09 17:47:44
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-09 17:47:52
 * @FilePath: /easy-vue3-template/src/utils/index.js
 */
/** 将全局 CSS 变量导入 JS 中使用 */
export const getCssVariableValue = (cssVariableName) => {
  let cssVariableValue = ''
  try {
    // 没有拿到值时，会返回空串
    cssVariableValue = getComputedStyle(document.documentElement).getPropertyValue(cssVariableName)
  } catch (error) {
    console.error(error)
  }
  return cssVariableValue
}
