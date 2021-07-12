// 单个元素
window.jQuery1 = function (nodeOrSelector) {
  let node
  if (typeof nodeOrSelector === 'string') {
    node = document.querySelector(nodeOrSelector)
  } else {
    node = nodeOrSelector
  }
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

var node2 = jQuery1('#item2')
console.log(node2.getSiblings())
node2.addClass({ red: true, b: false, c: true })

var node3 = jQuery1(item4)
node3.addClass({ red: true })

// 控制多个元素
window.jQuery = function (nodeOrSelector) {
  let nodes = {}
  if (typeof nodeOrSelector === 'string') {
    let temp = document.querySelectorAll(nodeOrSelector) // 伪数组
    for (let i = 0; i < temp.length; i++) {
      nodes[i] = temp[i]
    }
    nodes.length = temp.length
  } else if (nodeOrSelector instanceof Node) {
    nodes = {
      0: nodeOrSelector,
      length: 1,
    }
  }

  nodes.addClass = function (classes) {
    classes.forEach((value) => {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].classList.add(value)
      }
    })
  }

  nodes.text = function (text) {
    if (text === undefined) {
      let texts = []
      for (let i = 0; i < nodes.length; i++) {
        texts.push(nodes[i].textContent)
      }
      console.log(texts);
    } else {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].textContent = text
      }
    }
  }
  return nodes
}

var node4 = jQuery('ul > li')
node4.addClass(['blue'])
var text = node4.text()
node4.text('hi')
