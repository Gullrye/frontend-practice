
let header = document.querySelector('.header-inner')

// 导航栏动画
window.onscroll = () => {
  if (window.scrollY > 0) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }
}

// 作品部分filter栏切换

let btns = document.querySelectorAll('.btn-group button')
let filterBarSpan = document.querySelector('.filter-bar span')

for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = () => {
    filterBarSpan.className = `state${i+1}`
  }
}

// 加载动画
let startPage = document.querySelector('.start-page')
setTimeout(function(){
  startPage.classList.remove('active')
}, 3000)
