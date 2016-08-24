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

var names = new Names([])
names.items.push(new Name())
ko.applyBindings(names)
