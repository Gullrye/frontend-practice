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
let hashInLocalStorage = getFromLocalStorage('zzz')
if (hashInLocalStorage) {
  hash = hashInLocalStorage
}

// 2. 生成键盘
let keyBox = document.getElementsByClassName('key-box')[0]
let i = 0

for (let i = 0; i < keyRows.length; i++) {
  let ul = tag('ul')
  keyBox.appendChild(ul)

  for (let j = 0; j < keyRows[i].length; j++) {
    let li = tag('li', { className: 'key' })
    let span = tag('span', { textContent: keyRows[i][j] })
    li.appendChild(span)
    ul.appendChild(li)
    let editBtn = tag('button', { textContent: 'E', id: keyRows[i][j] })
    let img = tag('img')

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
      let img2 = e['target'].nextSibling // 下一个兄弟元素
      let editWebsite = prompt('输入一个网址：')

      hash[e['target']['id']] = editWebsite
      img2.src = 'http://' + editWebsite + '/favicon.ico'
      img2.onerror = (e) => {
        e.target.src = 'images/default_ico32.png'
      }
      localStorage.setItem('zzz', JSON.stringify(hash))
    }
  }
}

// 3. 监听键盘
// 按键后在新窗口打开相应网站
document.onkeydown = (e) => {
  console.log(e)
  let website = hash[e.key]

  window.open('https://' + website)
}

function getFromLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name) || 'null')
}

function tag(tagName, attributes) {
  let element = document.createElement(tagName)
  for (let key in attributes) {
    // key 为 className, id, textContent
    element[key] = attributes[key]
  }
  return element
}
