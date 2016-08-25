var ExpandingList = Vue.extend({
  data: function () { return { names: [''] } },
  methods: {
    addEmptyField: function () {
      if (this.hasEmptyField()) {
        return
      }

      this.names.push('')
    },

    hasEmptyField: function () {
      var names = this.names

      for (var i = names.length - 1; i >= 0; i--) {
        var name = names[i]
        if (name === '') {
          return true
        }
      }

      return false
    }
  }
})

var people = new ExpandingList()
people.$mount('.people-inputs')

var pizzas = new ExpandingList()
pizzas.$mount('.pizza-inputs')
