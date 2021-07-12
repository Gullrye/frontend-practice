Node.prototype.getSiblings = function () {
  let allChildren = this.parentNode.children
  let array = {
    length: 0,
  }

  for (let i = 0; i < allChildren.length; i++) {
    if (allChildren[i] !== this) {
      array[array.length] = allChildren[i]
      array.length += 1
    }
  }
  return array
}

Node.prototype.addClass = function (classes) {
  for (let key in classes) {
    let value = classes[key]
    let methodName = value ? 'add' : 'remove'

    this.classList[methodName](key)
  }
}

// console.log(item2.getSiblings())
// console.log(item2.addClass({ a: true, b: false, c: true }))

console.log(item2.getSiblings.call(item2))
console.log(item2.addClass.call(item2, { a: true, b: false, c: true }))