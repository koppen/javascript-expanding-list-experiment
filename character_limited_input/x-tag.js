xtag.register('x-character-count', {
  accessors: {
    for: {
      attribute: {},
      set: function (value) {
        var sourceInput = xtag.query(document.body, value)[0]
        xtag.addEvent(sourceInput, 'keyup', this.inputValueChanged.bind(this))
        this.xtag.sourceInput = sourceInput
        this.xtag.maxLength = sourceInput.getAttribute('maxlength')
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
    inputValueChanged: function () {
      this.render()
    },
    render: function () {
      var valueLength = this.sourceLength()
      var counter = null
      var maxLength = this.xtag.maxLength
      if (maxLength) {
        counter = maxLength - valueLength
      } else {
        counter = valueLength
      }
      var output = this.xtag.output
      output.innerHTML = counter;
    },
    sourceLength: function () {
      var sourceInput = this.xtag.sourceInput
      return sourceInput.value.length
    },
  }
})
