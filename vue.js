var ExpandingList = Vue.extend({
  data: function () { return { names: [''] } },
  methods: {
    addBlankName: function () {
      if (this.hasBlankName()) {
        return
      }
      this.names.push('')
    },

    hasBlankName: function () {
      for (var i = this.names.length - 1; i >= 0; i--) {
        var name = this.names[i]
        if (name === '') {
          return true
        }
      }
      return false
    }
  }
})

var list = new ExpandingList()
list.$mount('#expandingList')
