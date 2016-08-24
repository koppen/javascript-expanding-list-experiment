var Name = function () {
  this.name = ''
}

var Names = function (items) {
  var self = this
  this.items = ko.observableArray(items)

  this.addField = function () {
    if (self.hasEmptyField()) {
      return
    }

    self.items.push(new Name())
  }

  this.hasEmptyField = function () {
    var items = this.items()
    for (var i = items.length - 1; i >= 0; i--) {
      var item = items[i]
      if (item.name === '') {
        return true
      }
    }

    return false
  }
}

var peopleNames = new Names([new Name()])
ko.applyBindings(peopleNames, document.querySelector('.people-inputs'))

var pizzaNames = new Names([new Name()])
ko.applyBindings(pizzaNames, document.querySelector('.pizza-inputs'))
