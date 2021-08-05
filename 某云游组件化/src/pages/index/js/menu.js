!function () {
  var bannerNavUl = document.getElementById('banner-nav-ul')
  var bannerLis = document.querySelectorAll('.banner-nav-ul li')
  var bannerNav = document.getElementById('banner-nav')
  var menus = document.querySelectorAll('.menus-box .menu')

  // 事件委托
  // onmouseover冒泡，onmouseenter不冒泡
  bannerNavUl.onmouseover = function (e) {
    if (e.target.tagName.toLowerCase() == 'li') {
      var t = e.target.getAttribute('data-t')
      var menu = document.querySelector('.menus-box .menu[data-t=' + t + ']')
      for (let i = 0; i < menus.length; i++) {
        menus[i].classList.remove('current')
        bannerLis[i].classList.remove('current')
      }
      e.target.classList.add('current')
      menu.classList.add('current')
    }
  }

  bannerNav.onmouseleave = function () {
    for (let i = 0; i < menus.length; i++) {
      menus[i].classList.remove('current')
      bannerLis[i].classList.remove('current')
    }
  }
}()