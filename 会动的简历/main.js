!(function () {
  let result = `/*
  * 你好，
  * 我好，
  * 大家好。
  */
 
  * {
   transition: all 1s;
  }
  body {
    background: white;
  }
  #code {
    border: 1px dashed #666;
    padding: 16px;
  }

  /* 我需要一点代码高亮 */
  .token.selector {
    color: #690;
  }
  .token.property {
    color: #905;
  }
  .token.punctuation {
    color: #999;
  }

  /* 加点 3D 效果 */
#code {
  transform: rotate(360deg);
}

  `
function writeCode(result, fn) {
  
}
  let n = 0
  let id = setInterval(() => {
    n += 1
    code.innerHTML = result.substring(0, n)
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css)
    styleTag.innerHTML = result.substring(0, n)
    if (n > result.length) {
      clearInterval(id)
      fn2()
      fn3(result)
    }
  }, 10)
})()

function fn2() {
  let paper = document.createElement('div')
  paper.id = 'paper'
  document.body.appendChild(paper)
}

function fn3(preResult) {
  let result = `
  #paper {
    width: 100px;
    height: 100px;
    background: red;
  }
  `
  
  let n = 0
  let id = setInterval(() => {
    n += 1
    code.innerHTML = preResult + result.substring(0, n)
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css)
    styleTag.innerHTML = preResult + result.substring(0, n)
    if (n >= result.length) {
      window.clearInterval(id)
    }
  }, 10)
}
