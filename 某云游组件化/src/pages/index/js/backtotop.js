!function () {
  var backToTop = document.getElementById('backtotop')
  var timer
  backToTop.onclick = function () {
    clearInterval(timer)
    timer = setInterval(function () {
      document.documentElement.scrollTop -= 200
      if (document.documentElement.scrollTop <= 0) {
        clearInterval(timer)
      }
    }, 20)
  }

  window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || window.scrollY

    // 页面没卷动，隐藏按钮
    if (scrollTop == 0) {
      backToTop.style.display = 'none'
    } else {
      backToTop.style.display = 'block'
    }
  }
}()