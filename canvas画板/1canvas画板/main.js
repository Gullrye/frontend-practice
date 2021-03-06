const canvas = document.getElementById('canvas')
setCanvasSize()
window.onresize = () => {
  setCanvasSize()
}

const ctx = canvas.getContext('2d')
listenToUser(canvas)

let eraserEnable = false

let acitons = document.getElementsByClassName('actions')[0]

// icon图标点击
let penIco = document.getElementsByClassName('icon')[0]
let eraserIco = document.getElementsByClassName('icon')[1]
let clearIco = document.getElementsByClassName('icon')[2]
let saveIco = document.getElementsByClassName('icon')[3]

penIco.onclick = () => {
  eraserEnable = false
  penIco.classList.add('active')
  eraserIco.classList.remove('active')
  acitons.className = 'actions'
}
eraserIco.onclick = () => {
  eraserEnable = true
  eraserIco.classList.add('active')
  penIco.classList.remove('active')
  acitons.className = 'actions x'
}
clearIco.onclick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}
saveIco.onclick = () => {
  let url = canvas.toDataURL('image/png')
  let a = document.createElement('a')
  document.body.appendChild(a)
  a.href = url
  a.download = 'my_img'
  a.target = '_blank'
  a.click()
}

// 取色器点击
let colors = document.getElementsByClassName('color')
ctx.strokeStyle = '#000'
ctx.fillStyle = '#000'

for (let i = 0; i < colors.length; i++) {
  let index = i
  colors[i].onclick = (e) => {
    for (let j = 0; j < colors.length; j++) {
      colors[j].classList.remove('active')
    }
    // e.target.classList.add('active')
    colors[index].classList.add('active')
    ctx.fillStyle = colors[index].id
    ctx.strokeStyle = colors[index].id
  }
}

// 线粗细点击
let lineWidth = 5
thin.onclick = () => {
  lineWidth = 5
  thin.classList.add('active')
  thick.classList.remove('active')
}
thick.onclick = () => {
  lineWidth = 10
  thick.classList.add('active')
  thin.classList.remove('active')
}

// 下边为函数
function listenToUser(canvas) {
  let using = false // 鼠标是否 mousedown
  let lastPoint = { x: undefined, y: undefined }

  // 特性检测，手机上document.body.ontouchstart为null
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
  ctx.arc(x, y, radius, 0, Math.PI * 2)
  ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.lineWidth = lineWidth
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.stroke()
  ctx.closePath()
}
