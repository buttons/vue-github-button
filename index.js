import { render } from 'github-buttons'

export default {
  name: 'github-button',
  props: ['href', 'title', 'ariaLabel', 'dataIcon', 'dataSize', 'dataText', 'dataShowCount'],
  render: function (h) {
    return h('a', { attrs: {
      href: this.href,
      title: this.title,
      'aria-label': this.ariaLabel,
      'data-icon': this.dataIcon,
      'data-size': this.dataSize,
      'data-text': this.dataText,
      'data-show-count': this.dataShowCount
    } }, this.$slots.default)
  },
  mounted: function () {
    render(this.$el.parentNode.insertBefore(this._ = document.createElement('span'), this.$el).appendChild(this.$el))
  },
  beforeUpdate: function () {
    this._.parentNode.replaceChild(this.$el, this._)
  },
  updated: function () {
    render(this.$el.parentNode.insertBefore(this._ = document.createElement('span'), this.$el).appendChild(this.$el))
  }
}
