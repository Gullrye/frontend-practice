// 命名空间
window.gullDom = {}
gullDom.getSiblings = function (node) {
  let allChildren = node.parentNode.children
  let array = {
    length: 0,
  }

  for (let i = 0; i < allChildren.length; i++) {
    if (allChildren[i] !== node) {
      array[array.length] = allChildren[i]
      array.length += 1
    }
  }
  console.log(array)
}

gullDom.addClass = function (node, classes) {
  for (let key in classes) {
    let value = classes[key]

    // if (value) {
    //   node.classList.add(key)
    // } else {
    //   node.classList.remove(key)
    // }

    let methodName = value ? 'add' : 'remove'
    node.classList[methodName](key)
  }
}

gullDom.getSiblings(item2)
gullDom.addClass(item2, { a: true, b: false, c: true })
