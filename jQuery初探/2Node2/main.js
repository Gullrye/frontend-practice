window.jQuery = function (node) {
  return {
    getSiblings: function () {
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
      return array
    },
    addClass: function (classes) {
      for (let key in classes) {
        let value = classes[key]
        let methodName = value ? 'add' : 'remove'

        node.classList[methodName](key)
      }
    },
  }
}

var node2 = jQuery(item2)
console.log(node2.getSiblings())
node2.addClass({ a: true, b: false, c: true })
