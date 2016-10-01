xtag.register('x-character-count', {
  accessors: {
    for: {
      attribute: {},
      set: function (value) {
        var sourceInput = xtag.query(document.body, value)[0]
        xtag.addEvent(sourceInput, 'keyup', this.inputValueChanged.bind(this))
        this.xtag.sourceInput = sourceInput
        this.xtag.maxLength = sourceInput.getAttribute('maxlength')
        sourceInput.removeAttribute('maxlength')
      }
    }
  },

  content: function () { /*
    <span></span>
  */ },

  lifecycle: {
    created: function () {
      if (!this.xtag.output) {
        this.xtag.output = this.querySelector('span')
      }
    }
  },

  methods: {
    applyClasses: function (element) {
      if (this.charactersLeft() < 0) {
        element.className = 'is-over-limit'
      } else {
        element.className = ''
      }
    },
    charactersLeft: function () {
      var valueLength = this.sourceLength()
      var counter = null
      var maxLength = this.xtag.maxLength
      if (maxLength) {
        return counter = maxLength - valueLength
      } else {
        return counter = valueLength
      }
    },
    inputValueChanged: function () {
      this.render()
    },
    render: function () {
      var output = this.xtag.output
      output.innerHTML = this.charactersLeft();
      this.applyClasses(output)
    },
    sourceLength: function () {
      var sourceInput = this.xtag.sourceInput
      return sourceInput.value.length
    },
  }
})
