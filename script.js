function newElement() {
  // this code doesn't work, but it gives you an idea
  const li = document.createElement("li")
  const newEntry = document.getElementById("inp").value
  const u = document.createTextNode(newEntry)
  li.appendChild(u)
  document.getElementById("myUL").appendChild(li)
  document.getElementById("inp").value = "Nothing"
  // something like this
  let todos = []
  
  function newTodo() {
    let inpvalue = document.getElementById('inp').value
    todos.push(inpvalue)
    // trigger draw event
    let li = document.createElement('li')
    let newlist = li.appendChild(document.createTextNode(todos))
    inpvalue.appendChild(newlist)
  }


  function drawtodo() {
    var item = document.createElement("li")
    var node = createTextNode(inpvalue)
  }

  document.onload = function() {
    // this will excute when the document loads
  }
}

