// 导航栏动画
let headerTop = document.querySelector('header')
window.onscroll = () => {
  if (window.scrollY > 0) {
    headerTop.classList.add('sticky')
  } else {
    headerTop.classList.remove('sticky')
  }
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
let Tages = document.querySelectorAll('.nav-wrap > ul > li')

Tages.forEach(function (i) {
  let subMenu = i.querySelector('.submenu')

  if (subMenu) {
    i.onmouseenter = () => {
      subMenu.classList.add('active')
    }
    i.onmouseleave = () => {
      subMenu.classList.remove('active')
    }
  }
})
