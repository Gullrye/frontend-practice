// 1. 初始化数据
let keyRows = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
]
// Crtl + F 使用 正则 ([a-z])   ->   '$1',
// 来添加keys中字母的引号和字母后的逗号

let hash = {
  q: 'qq.com',
  w: 'weibo.com',
  e: 'ele.me',
  r: 'renren.com',
  t: '.com',
  y: '.com',
  u: 'ubuntu.com',
  i: '.com',
  o: 'opera.com',
  p: '.com',
  a: '.com',
  s: '.com',
  d: '.com',
  f: '.com',
  g: '.com',
  h: '.com',
  j: '.com',
  k: '.com',
  l: '.com',
  z: 'zhihu.com',
  x: 'xiecheng.com',
  c: '.com',
  v: '.com',
  b: 'bilibili.com',
  n: '.com',
  m: 'meituan.com',
  length: 26,
}

// 取出localStorage 中的 z 对应的 hash
let hashInLocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null')
if (hashInLocalStorage) {
  hsah = hashInLocalStorage
  console.log(hash)
}

// 2. 生成键盘
let keyBox = document.getElementsByClassName('key-box')[0]
let i = 0

while (i < keyRows.length) {
  let ul = document.createElement('ul')
  keyBox.appendChild(ul)

  for (let j = 0; j < keyRows[i].length; j++) {
    let li = document.createElement('li')
    let span = document.createElement('span')
    li.appendChild(span)
    span.textContent = keyRows[i][j]
    li.className = 'key'
    ul.appendChild(li)
    let editBtn = document.createElement('button')
    editBtn.textContent = 'E'
    editBtn.id = keyRows[i][j]
    let img = document.createElement('img')

    if (hash[keyRows[i][j]]) {
      img.src = 'http://' + hash[keyRows[i][j]] + '/favicon.ico'
    } else {
      img.src = 'images/default_ico32.png'
    }
    img.onerror = (e) => {
      e.target.src = 'images/default_ico32.png'
    }

    li.appendChild(editBtn)
    li.appendChild(img)
    editBtn.onclick = (e) => {
      let img2 = e['target'].nextSibling       // 下一个兄弟元素
      let editWebsite = prompt('输入一个网址：')

      hash[e['target']['id']] = editWebsite
      img2.src = 'http://' + editWebsite + '/favicon.ico'
      img2.onerror = (e) => {
        e.target.src = 'images/default_ico32.png'
      }
      localStorage.setItem('zzz', JSON.stringify(hash))

    }
  }
  i += 1
}

// 3. 监听键盘
// 按键后在新窗口打开相应网站
document.onkeydown = (e) => {
  console.log(e)
  let website = hash[e.key]

  window.open('https://' + website)
}
