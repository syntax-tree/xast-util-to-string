import assert from 'node:assert/strict'
import test from 'node:test'
import {u} from 'unist-builder'
import {toString} from './index.js'
import * as mod from './index.js'

test('toString', () => {
  assert.deepEqual(
    Object.keys(mod).sort(),
    ['toString'],
    'should expose the public api'
  )

  assert.deepEqual(
    toString(u('cdata', '<greeting>Hello, world!</greeting>')),
    '<greeting>Hello, world!</greeting>',
    'should serialize cdata'
  )

  assert.deepEqual(
    toString(u('comment', 'foo')),
    'foo',
    'should serialize comments'
  )

  assert.deepEqual(
    toString(u('instruction', {name: 'xml'}, 'version="1.0" encoding="UTF-8"')),
    'version="1.0" encoding="UTF-8"',
    'should serialize instructions'
  )

  assert.deepEqual(toString(u('text', 'foo')), 'foo', 'should serialize texts')

  assert.deepEqual(
    toString(u('doctype', {name: 'html'})),
    '',
    'should return empty for doctypes'
  )

  assert.deepEqual(
    toString(
      u('element', {name: 'package'}, [
        u('text', 'foo '),
        u('comment', 'bar'),
        u('element', {name: 'thing'}, [u('text', ' baz')])
      ])
    ),
    'foo  baz',
    'should serialize elements (excluding non-parent and non-text descendants)'
  )

  assert.deepEqual(
    toString(
      u('root', [
        u('doctype', {name: 'html'}),
        u('text', 'foo '),
        u('comment', 'bar'),
        u('element', {name: 'thing'}, [u('text', ' baz')])
      ])
    ),
    'foo  baz',
    'should serialize roots (excluding non-parent and non-text descendants)'
  )
})
