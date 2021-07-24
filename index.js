/**
 * @typedef {import('xast').Root} Root
 * @typedef {import('xast').Element} Element
 * @typedef {import('xast').RootChildMap} RootChildMap
 * @typedef {RootChildMap[keyof RootChildMap]} Child
 * @typedef {Root|Child} Node
 * @typedef {Root|Element} Parent
 */

/**
 * @param {Node} node
 * @returns {string}
 */
export function toString(node) {
  // A root or an element
  // @ts-ignore Looks like a parent.
  if ('children' in node) return all(node)
  // @ts-ignore Looks like a literal.
  return 'value' in node ? node.value : ''
}

/**
 * @param {Node} node
 * @returns {string}
 */
function one(node) {
  if (node.type === 'text') return node.value
  // Ignore things like comments, instruction, cdata.
  // @ts-ignore Looks like a parent.
  return node.children ? all(node) : ''
}

/**
 * @param {Parent} node
 * @returns {string}
 */
function all(node) {
  const children = node.children
  let index = -1
  /** @type {Array.<string>} */
  const result = []

  while (++index < children.length) {
    result[index] = one(children[index])
  }

  return result.join('')
}
