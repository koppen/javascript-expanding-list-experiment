var ExpandingList = function (listNode) {
  this.addEmptyField = function () {
    // Don't add a field if an empty field exists
    if (this.hasEmptyField()) {
      return
    }

    var template = this.listNode.querySelector('[data-template]')
    var newGroup = this.cloneGroup(template)
    var parent = template.parentNode
    parent.appendChild(newGroup)
  }

  this.bindEvents = function (node) {
    var self = this
    node.onkeyup = function () { self.addEmptyField() }
  }

  this.bindEventsToInputFields = function () {
    var inputFields = this.inputFields()
    for (var i = inputFields.length - 1; i >= 0; i--) {
      var field = inputFields[0]
      this.bindEvents(field)
    }
  }

  this.clearInputValues = function (node) {
    var inputs = this.inputFields(node)
    for (var i = inputs.length - 1; i >= 0; i--) {
      var input = inputs[i]
      input.value = ''
    }
  }

  this.cloneGroup = function (template) {
    var newGroup = template.cloneNode(template)
    this.bindEvents(newGroup)
    this.clearInputValues(newGroup)
    return newGroup
  }

  this.hasEmptyField = function () {
    var inputFields = this.inputFields()
    for (var i = inputFields.length - 1; i >= 0; i--) {
      var inputField = inputFields[i]
      if (inputField.value === '') {
        return true
      }
    }

    return false
  }

  this.inputFields = function (node) {
    if (!node) {
      node = this.listNode
    }
    return node.querySelectorAll('input[data-addempty]')
  }

  this.listNode = listNode
  this.bindEventsToInputFields()
}

document.addEventListener('DOMContentLoaded', function () {
  new ExpandingList(document.querySelector('.people-inputs'))
  new ExpandingList(document.querySelector('.pizza-inputs'))
})
