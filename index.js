module.exports = toString

function toString(node) {
  // A root or an element
  if ('children' in node) {
    return all(node)
  }

  return 'value' in node ? node.value : ''
}

function one(node) {
  if (node.type === 'text') {
    return node.value
  }

  // Ignore things like comments, instruction, cdata.
  return node.children ? all(node) : ''
}

function all(node) {
  var children = node.children
  var index = -1
  var result = []

  while (++index < children.length) {
    result[index] = one(children[index])
  }

  return result.join('')
}
