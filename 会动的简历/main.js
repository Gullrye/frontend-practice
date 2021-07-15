!function(){
  
  let result = `/*
  * 你好，
  * 我好，
  * 大家好。
  */
 
 * {
   transition: all 1s;
  }
  body {
    background: skyblue;
  }
  #code {
    border: 1px dashed #666;
    padding: 16px;
  }
  `
  let n = 0
  let id = setInterval(() => {
    n += 1
    code.innerHTML = result.substring(0, n)
    code.innerHTML = Prism.highlight(code.innerHTML,Prism.languages.css)
    styleTag.innerHTML = result.substring(0, n)
    if (n > result.length) {
      clearInterval(id)
    }
  }, 10)

}()