import { render } from 'github-buttons'

export default {
  name: 'github-button',
  props: ['href', 'ariaLabel', 'title', 'dataIcon', 'dataSize', 'dataShowCount', 'dataText'],
  render: function (h) {
    return h('span', [
      h('a', {
        attrs: {
          'href': this.href,
          'aria-label': this.ariaLabel,
          'title': this.title,
          'data-icon': this.dataIcon,
          'data-size': this.dataSize,
          'data-show-count': this.dataShowCount,
          'data-text': this.dataText
        },
        ref: '_'
      }, this.$slots.default)
    ])
  },
  mounted: function () {
    this.paint()
  },
  beforeUpdate: function () {
    this.reset()
  },
  updated: function () {
    this.paint()
  },
  beforeDestroy: function () {
    this.reset()
  },
  methods: {
    paint: function () {
      var _ = this.$el.appendChild(document.createElement('span'))
      render(_.appendChild(this.$refs._), function (el) {
        try {
          _.parentNode.replaceChild(el, _)
        } catch (_) {}
      })
    },
    reset: function () {
      this.$el.replaceChild(this.$refs._, this.$el.lastChild)
    }
  }
}
