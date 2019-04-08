class Element {
  constructor(type, props, children) {
    this.type = type
    this.props = props
    this.children = children
  }
}

function createElement(type, props, children) {
  return new Element(...arguments)
}

function setAttr(node, key, val) {
  switch (key) {
    case 'value':
      if (['input', 'textarea'].includes(node.tagName.toLowerCase())) {
        node.vlaue = val
      } else {
        node.setAttribute(key, val)
      }
      break
    case 'style':
      node.style.cssText = val
      break
    default:
      node.setAttribute(key, val)
  }
}

function render(vnode) {
  const node = document.createElement(vnode.type)

  const { props, children } = vnode
  for (const key in props) {
    setAttr(node, key, props[key])
  }

  for (const child of children) {
    const el = child instanceof Element ? render(child) : document.createTextNode(child)
    node.appendChild(el)
  }
  return node
}

function renderDom(el, target) {
  target.appendChild(el)
}

export {
  Element,
  createElement,
  render,
  renderDom,
  setAttr
}
