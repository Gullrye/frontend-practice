const canvas = document.getElementById('canvas')
setCanvasSize()
window.onresize = () => {
  setCanvasSize()
}

const ctx = canvas.getContext('2d')
listenToUser(canvas)

let eraserEnable = false
let eraser = document.getElementById('eraser')
let brush = document.getElementById('brush')
let acitons = document.getElementsByClassName('actions')[0]
eraser.onclick = (e) => {
  eraserEnable = true
  acitons.className = 'actions x'
}
brush.onclick = (e) => {
  eraserEnable = false
  acitons.className = 'actions'
}

function listenToUser(canvas) {
  let using = false // 鼠标是否 mousedown
  let lastPoint = { x: undefined, y: undefined }

  // 特性检测
  if (document.body.ontouchstart !== undefined) {
    // 触屏设备
    canvas.ontouchstart = (e) => {
      // console.log(e)
      let x = e.touches[0].clientX
      let y = e.touches[0].clientY
      using = true
      if (eraserEnable) {
        ctx.clearRect(x - 10, y - 10, 20, 20)
      } else {
        drawCircle(x, y, 2.5)
        lastPoint = { x: x, y: y }
      }

    }

    canvas.ontouchmove = (e) => {
      let x = e.touches[0].clientX
      let y = e.touches[0].clientY
      if (!using) {
        return
      }
      if (eraserEnable) {
        ctx.clearRect(x - 10, y - 10, 20, 20)
      } else {
        let newPoint = { x: x, y: y }
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
        lastPoint = newPoint
      }
    }

    canvas.ontouchend = () => {
      using = false
    }
  } else {
    // 非触屏设备
    canvas.onmousedown = (e) => {
      let x = e.clientX
      let y = e.clientY
      using = true
      if (eraserEnable) {
        ctx.clearRect(x - 10, y - 10, 20, 20)
      } else {
        drawCircle(x, y, 2.5)
        lastPoint = { x: x, y: y }
      }
    }

    canvas.onmousemove = (e) => {
      let x = e.clientX
      let y = e.clientY
      if (!using) {
        return
      }
      if (eraserEnable) {
        ctx.clearRect(x - 10, y - 10, 20, 20)
      } else {
        let newPoint = { x: x, y: y }
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
        lastPoint = newPoint
      }
    }

    canvas.onmouseup = () => {
      using = false
    }
  }
}

function setCanvasSize() {
  let pageWidth = document.documentElement.clientWidth
  let pageHeight = document.documentElement.clientHeight
  canvas.width = pageWidth
  canvas.height = pageHeight
}

function drawCircle(x, y, radius) {
  ctx.beginPath()
  ctx.fillStyle = '#fff'
  ctx.arc(x, y, radius, 0, Math.PI * 2)
  ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.strokeStyle = '#fff'
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.stroke()
  ctx.closePath()
}
