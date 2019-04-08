import { createElement, render, renderDom } from './element'

const virtualDom = createElement('ul', { class: 'list' }, [
  createElement('li', { class: 'item' }, ['马云']),
  createElement('li', { class: 'item' }, ['麻花藤']),
  createElement('li', { class: 'item' }, ['李彦宏'])
])
console.log(virtualDom)

const el = render(virtualDom)

renderDom(el, document.getElementById('app'))
