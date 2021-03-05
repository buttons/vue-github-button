import { defineComponent, h } from 'vue'
import { hasOwn, hyphenate } from '@vue/shared'

export default defineComponent({
  name: 'github-button',
  props: {
    href: String,
    ariaLabel: String,
    title: String,
    dataIcon: String,
    dataColorScheme: String,
    dataSize: String,
    dataShowCount: String,
    dataText: String
  },
  render: function () {
    const props = { ref: '_' }
    for (const key in this.$props) {
      props[hyphenate(key)] = this.$props[key]
    }
    return h('span', [
      hasOwn(this.$slots, 'default')
        ? h('a', props, this.$slots.default())
        : h('a', props)
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
  beforeUnmount: function () {
    this.reset()
  },
  methods: {
    paint: function () {
      const _ = this.$el.appendChild(document.createElement('span'))
      const _this = this
      import(/* webpackMode: "eager" */ 'github-buttons').then(function (module) {
        module.render(_.appendChild(_this.$refs._), function (el) {
          try {
            _.parentNode.replaceChild(el, _)
          } catch (_) {}
        })
      })
    },
    reset: function () {
      this.$el.replaceChild(this.$refs._, this.$el.lastChild)
    }
  }
})
