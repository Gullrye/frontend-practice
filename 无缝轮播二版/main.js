let $buttons = $('#buttonWrapper > button')
let $slides = $('#slides')
let $images = $slides.children('img')
let $firstCopy = $images.eq(0).clone(true)
let $lastCopy = $images.eq($images.length - 1).clone(true)
// console.log($firstCopy[0].outerHTML)
// console.log($lastCopy[0].outerHTML)
$slides.append($firstCopy)
$slides.prepend($lastCopy)

$slides.css({transform: 'translateX(-400px)'})

let current = 0

$buttons.eq(0).on('click', function () {
  if (current == 2) {
    console.log('end to start')
    $slides.css({transform: 'translateX(-1600px)'}).one('transitionend', function () {
      // 隐藏后再show，浏览器会直接将hide和show合并。调用offset()能打断浏览器的过程
      $slides.hide().offset()
      $slides.css({transform: 'translateX(-400px)'}).show()
    })
  } else {
    $slides.css({transform: 'translateX(-400px)'})
  }
  current = 0
})
$buttons.eq(1).on('click', function () {
  $slides.css({transform: 'translateX(-800px)'})
  current = 1
})
$buttons.eq(2).on('click', function () {
  if (current == 0) {
    console.log('start to end')
    $slides.css({transform: 'translateX(0px)'}).one('transitionend', function () {
      $slides.hide().offset()
      $slides.css({transform: 'translateX(-1200px)'}).show()
    })
  } else {
    $slides.css({transform: 'translateX(-1200px)'})
  }
  current = 2
})