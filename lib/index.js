/**
 * @typedef {import('xast').Nodes} Nodes
 * @typedef {import('xast').Parents} Parents
 */

// This lets VS Code show references to the above types.
''

/**
 * Get the plain-text value of a node.
 *
 * @param {Nodes} node
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
 * @param {Nodes} node
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
 * @param {Parents} node
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
