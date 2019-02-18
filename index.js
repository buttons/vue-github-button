import { render } from 'github-buttons'

export default {
  name: 'github-button',
  props: ['href', 'ariaLabel', 'title', 'dataIcon', 'dataSize', 'dataShowCount', 'dataText'],
  render: function (h) {
    return h('a', { attrs: {
      'href': this.href,
      'aria-label': this.ariaLabel,
      'title': this.title,
      'data-icon': this.dataIcon,
      'data-size': this.dataSize,
      'data-show-count': this.dataShowCount,
      'data-text': this.dataText
    } }, this.$slots.default)
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
      render(this.$el.parentNode.insertBefore(this._ = document.createElement('span'), this.$el).appendChild(this.$el), (function(_this) {
        return function (el) {
          _this.$el.parentNode.replaceChild(el, _this.$el)
        }
      })(this))
    },
    reset: function () {
      this._.parentNode.replaceChild(this.$el, this._)
    }
  }
}
