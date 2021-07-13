let allButtons = $('.btn-group > span')  // 伪数组

for (let i = 0; i< allButtons.length; i++) {
  // console.log(allButtons[i]); // 不是jQuery对象，而是所获取的标签
  // console.log($(allButtons[i]));  // 通过$将标签转化为了jQuery对象

  let index = i
  $(allButtons[i]).on('click', function(x) {
    let distance = index * (-300)
    $('.img-wrap').css('transform', `translateX(${distance}px)`)
    $(x.currentTarget).addClass('active').siblings().removeClass('active')
  })
}