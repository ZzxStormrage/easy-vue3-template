/*
 * @Date: 2023-07-13 17:20:28
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-07-13 17:35:31
 * @FilePath: /pc-img-editor/src/utils/img.JS
 */
export function imgSrcToFile(imgSrc) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'Anonymous'
    img.src = imgSrc

    img.onload = function () {
      const canvas = document.createElement('CANVAS')
      const ctx = canvas.getContext('2d')
      let dataURL
      canvas.height = img.height
      canvas.width = img.width
      ctx.drawImage(this, 0, 0)
      dataURL = canvas.toDataURL('image/jpeg')
      let file = dataURLtoFile(dataURL)
      resolve({
        file: file,
        width: img.width,
        height: img.height
      })
    }

    img.onerror = function (e) {
      reject(e)
    }
  })
}

function dataURLtoFile(dataurl, filename) {
  let arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, { type: mime })
}
