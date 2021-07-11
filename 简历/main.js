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
// 下拉菜单
let Tags = document.querySelectorAll('.nav-wrap > ul > li > a')
let Li = document.querySelectorAll('.nav-wrap > ul > li')

for (let i = 0; i < Li.length; i++) {
  let subMenu = Li[i].querySelector('.submenu')

  if (subMenu) {
    Li[i].onmouseenter = () => {
      subMenu.classList.add('active')
    }
    Li[i].onmouseleave = () => {
      subMenu.classList.remove('active')
    }
  }
}

// 切换条
for (let i = 0; i < Li.length; i++) {
  let spanBar = document.querySelectorAll('.nav-wrap > ul > li > span')
  let index = i

  // js控制width后，动画才有恢复过程，使用css animation时鼠标移开后切换条会直接消失，而不是从右往左变短至0
  Tags[i].onmouseenter = () => {
    spanBar[index].style.width = '100%'
  }

  Tags[i].onmouseleave = () => {
    spanBar[index].style.width = '0'
  }
}
