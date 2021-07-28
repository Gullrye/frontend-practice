// 轮播图特效
!function () {
  var carouselList = document.getElementById('carousel-list')
  var leftBtn = document.getElementById('leftbtn')
  var rightBtn = document.getElementById('rightbtn')
  var banner = document.getElementById('banner')
  var circleOl = document.getElementById('circle-ol')
  var circleLis = circleOl.getElementsByTagName('li')

  // 克隆第一张li
  var cloneLi = carouselList.firstElementChild.cloneNode(true)
  carouselList.appendChild(cloneLi)

  // 当前显示图片序号，0开始
  var index = 0

  var lock = true

  rightBtn.onclick = rightBtnHandler

  function rightBtnHandler() {
    if (!lock) return
    lock = false

    // 点击一轮后再次点击仍有动画
    carouselList.style.transition = 'transform .5s ease 0s'
    index++
    carouselList.style.transform = 'translateX(' + -16.66 * index + '%)'
    if (index > 4) {
      setTimeout(function () {
        // 清除过渡
        carouselList.style.transition = 'none'
        // 删除transform属性
        carouselList.style.transform = 'none'
        index = 0
      }, 500)
    }
    setCircles()

    setTimeout(function () {
      lock = true
    }, 500)
  }
  leftBtn.onclick = function () {
    if (!lock) return
    lock = false

    if (index == 0) {
      // 取消动画瞬间拉到最后(克隆的图)
      carouselList.style.transition = 'none'
      carouselList.style.transform = 'translateX(' + -16.66 * 5 + '%)'
      index = 4
      // 延时0ms，让刚才的瞬移发生之后，再把过渡加上
      setTimeout(function () {
        carouselList.style.transition = 'transform .5s ease 0s'
        carouselList.style.transform = 'translateX(' + -16.66 * 4 + '%)'
      }, 0)
    } else {
      index--
      carouselList.style.transform = 'translateX(' + -16.66 * index + '%)'
    }
    setCircles()

    setTimeout(function () {
      lock = true
    }, 500)
  }

  // 设置小圆点的current
  function setCircles() {
    for (let i = 0; i < circleLis.length; i++) {
      // 图片0开始，第5张图片时第一个点添加current
      if (i == index % 5) {
        circleLis[i].className = 'current'
      } else {
        circleLis[i].className = ''
      }
    }
  }
  // 事件委托
  circleOl.onclick = function (e) {
    if (e.target.tagName.toLowerCase() == 'li') {
      var n = Number(e.target.getAttribute('data-n'))
      index = n
      carouselList.style.transform = 'translateX(' + -16.66 * index + '%)'
      setCircles()
    }
  }

  var timer = setInterval(rightBtnHandler, 5000)

  banner.onmouseenter = function () {
    clearInterval(timer)
  }
  banner.onmouseleave = function () {
    // 设表先关
    clearInterval(timer)
    timer = setInterval(rightBtnHandler, 5000)
  }

}()