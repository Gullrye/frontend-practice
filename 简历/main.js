// 导航栏动画
let headerTop = document.querySelector('header')
window.onscroll = () => {
  if (window.scrollY > 0) {
    headerTop.classList.add('sticky')
  } else {
    headerTop.classList.remove('sticky')
  }

  // 高亮当前元素对应的导航栏
  highLight()
}

// 作品部分filter栏切换

let btns = document.querySelectorAll('.btn-group button')
let filterBarSpan = document.querySelector('.filter-bar span')

for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = () => {
    filterBarSpan.className = `state${i + 1}`
  }
}

// 加载动画
let startPage = document.querySelector('.start-page')
setTimeout(function () {
  startPage.classList.remove('active')
}, 3000)

// 鼠标进入导航栏
// 下拉菜单
let aTags = document.querySelectorAll('.nav-wrap > ul > li > a')
let LiTags = document.querySelectorAll('.nav-wrap > ul > li')

for (let i = 0; i < LiTags.length; i++) {
  let subMenu = LiTags[i].querySelector('.submenu')

  if (subMenu) {
    LiTags[i].onmouseenter = () => {
      subMenu.classList.add('active')
    }
    LiTags[i].onmouseleave = () => {
      subMenu.classList.remove('active')
    }
  }
}

// 切换条
for (let i = 0; i < LiTags.length; i++) {
  let spanBar = document.querySelectorAll('.nav-wrap > ul > li > span')
  let index = i

  // js控制width后，动画才有恢复过程，使用css animation时鼠标移开后切换条会直接消失，而不是从右往左变短至0
  aTags[i].onmouseenter = () => {
    spanBar[index].style.width = '100%'
  }

  aTags[i].onmouseleave = () => {
    spanBar[index].style.width = '0'
  }

  // 滚动至指定元素
  aTags[i].onclick = (x) => {
    x.preventDefault()
    let href = x.currentTarget.getAttribute('href') // '#about' ...
    let element = document.querySelector(href)
    let top = element.offsetTop

    let n = 20
    let t = 500 / n
    let currentTop = window.scrollY
    let targetTop = top + 110
    let distance = (targetTop - currentTop) / n
    let i = 0
    let timer = setInterval(() => {
      if (i == n) {
        clearInterval(timer)
        return
      }
      i += 1
      window.scrollTo(0, currentTop + distance * i)
    }, t)
  }
}

// 函数
function highLight() {
  let specialTags = document.querySelectorAll('[data-x]')
  let minIndex = 0

  for (let i = 1; i < specialTags.length; i++) {
    if (
      Math.abs(specialTags[i].offsetTop - window.scrollY) <
      Math.abs(specialTags[minIndex].offsetTop - window.scrollY)
    ) {
      minIndex = i
    }
  }
  for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.remove('active')
  }
  specialTags[minIndex].classList.add('active')
  let id = specialTags[minIndex].id
  let a = document.querySelector(`a[href="#${id}"]`)

  let aGroup = document.querySelectorAll('.nav-wrap > ul > li > a')
  for (let i = 0; i < aGroup.length; i++) {
    aGroup[i].classList.remove('active')
  }

  a.classList.add('active')
}
