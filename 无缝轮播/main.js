$('.img-wrap img:nth-child(1)').addClass('current')
$('.img-wrap img:nth-child(2)').addClass('enter')
$('.img-wrap img:nth-child(3)').addClass('enter')
let n = 1
let timer = setInterval(() => {
  $(`.img-wrap img:nth-child(${x(n)})`)
    .removeClass('current')
    .addClass('leave')
    .one('transitionend', (e) => {
      $(e.currentTarget).removeClass('leave').addClass('enter')
    })
  $(`.img-wrap img:nth-child(${x(n + 1)})`)
    .removeClass('enter')
    .addClass('current')
  n += 1
}, 3000)

// 无以下visibilitychange相关的代码会有bug，即好几次的轮播切换会在你浏览其他网页回来后一次性播放
// 离开当前页面时，保持当前图片不变。
document.addEventListener('visibilitychange', function(e) {
  if(document.hidden) {
    clearInterval(timer)
  } else {
    timer = setInterval(() => {
      $(`.img-wrap img:nth-child(${x(n)})`)
        .removeClass('current')
        .addClass('leave')
        .one('transitionend', (e) => {
          $(e.currentTarget).removeClass('leave').addClass('enter')
        })
      $(`.img-wrap img:nth-child(${x(n + 1)})`)
        .removeClass('enter')
        .addClass('current')
      n += 1
    }, 3000)
  }
})

function x(n) {
  if (n > 3) {
    n = n % 3
    if (n === 0) {
      n = 3
    }
  }
  return n
}
