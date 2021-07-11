// 导航栏动画
let headerTop = document.querySelector('header')
window.onscroll = () => {
  if (window.scrollY > 0) {
    headerTop.classList.add('sticky')
  } else {
    headerTop.classList.remove('sticky')
  }

  // 高亮当前元素对应的导航栏标签
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

  let spanBar = document.querySelectorAll('.nav-wrap > ul > li > span')
  for (let i = 0; i < spanBar.length; i++) {
    spanBar[i].style.width = '0'
  }

  let li = a.parentNode
  let spanBarHighlight = li.querySelector('span')
  spanBarHighlight.style.width = '100%'
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
}, 1000)

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

    window.scrollTo(0, top + 110)
  }
}
