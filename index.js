/**
 * @typedef {import('xast').Root} Root
 * @typedef {import('xast').Element} Element
 * @typedef {import('xast').RootChildMap} RootChildMap
 */

/**
 * @typedef {RootChildMap[keyof RootChildMap]} Child
 * @typedef {Root | Child} Node
 * @typedef {Root | Element} Parent
 */

/**
 * Get the plain-text value of a node.
 *
 * @param {Node} node
 *   Node to serialize.
 * @returns {string}
 *   Serialized node.
 */
export function toString(node) {
  // A root or an element
  if ('children' in node) return all(node)
  return 'value' in node ? node.value : ''
}

/**
 * Serialize a child.
 *
 * @param {Node} node
 *   Child to serialize.
 * @returns {string}
 *   Serialized node.
 */
function one(node) {
  if (node.type === 'text') return node.value
  // Ignore things like comments, instruction, cdata.
  return 'children' in node ? all(node) : ''
}

/**
 * Serialize a parent.
 *
 * @param {Parent} node
 *   Parent to serialize.
 * @returns {string}
 *   Serialized node.
 */
function all(node) {
  const children = node.children
  let index = -1
  /** @type {Array<string>} */
  const result = []

  while (++index < children.length) {
    result[index] = one(children[index])
  }

  return result.join('')
}
