var Name = function () {
  this.name = ''
}

var ExpandingList = function (items) {
  var self = this
  this.names = ko.observableArray(items)

  this.addEmptyField = function () {
    if (self.hasEmptyField()) {
      return
    }

    self.names.push(new Name())
  }

  this.hasEmptyField = function () {
    var names = this.names()

    for (var i = names.length - 1; i >= 0; i--) {
      var name = names[i]
      if (name.name === '') {
        return true
      }
    }

    return false
  }
}

var people = new ExpandingList([new Name()])
ko.applyBindings(people, document.querySelector('.people-inputs'))

var pizzas = new ExpandingList([new Name()])
ko.applyBindings(pizzas, document.querySelector('.pizza-inputs'))
