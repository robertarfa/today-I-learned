let globalItens = ['Batata', 'Cenoura', 'Beterraba']
let inputItens = null
let itemList = null
let isEditing = false
let currentIndex = null

window.addEventListener('load', () => {
  inputItens = document.querySelector('#inputItem')

  preventDefault()
  activateInput()
  render()
})

function preventDefault() {
  function handleFormSubmit(e) {
    e.preventDefault()
  }

  var form = document.querySelector('form')
  form.addEventListener('submit', handleFormSubmit)
}

function activateInput() {
  function insertItem(newItem) {
    //globalItens.push(newItem)
    globalItens = [...globalItens, newItem]
  }

  function updateItem(editItem) {
    globalItens[currentIndex] = editItem
  }

  function handleEnterKey(e) {
    var hasText = !!e.target.value && e.target.value.trim() !== ''

    if (!hasText) {
      clearInput()
      return
    }

    if (e.key === 'Enter') {
      if (isEditing) {
        updateItem(e.target.value)
      } else {
        insertItem(e.target.value)
      }
      render()
      isEditing = false
      clearInput()
    }
  }
  inputItens.focus()
  inputItens.addEventListener('keyup', handleEnterKey)
}

function render() {
  function createDeleteButton(index) {
    function deleteItem() {
      globalItens = globalItens.filter((_, i) => i !== index)

      render()
    }
    var button = document.createElement('button')
    button.classList.add('deleteButton')
    button.textContent = 'X'
    button.addEventListener('click', deleteItem)
    return button
  }

  function createSpan(name, index) {
    function editItem() {
      inputItens.value = name
      inputItens.focus()
      isEditing = true
      currentIndex = index
    }

    var span = document.createElement('span')
    span.classList.add('clickable')
    span.textContent = name
    span.addEventListener('click', editItem)

    return span
  }

  itemList = document.querySelector('#itemList')
  itemList.innerHTML = ''

  var ul = document.createElement('ul')
  itemList.appendChild(ul)

  for (var i = 0; i < globalItens.length; i++) {
    var currentName = globalItens[i]

    var li = document.createElement('li')
    ul.appendChild(li)

    var button = createDeleteButton(i)
    li.appendChild(button)

    var span = createSpan(currentName, i)
    li.appendChild(span)
  }
  clearInput()
}

const clearInput = () => {
  inputItens.value = ''
  inputItens.focus()
}
