'use strict'

var test = require('tape')
var u = require('unist-builder')
var toString = require('.')

test('xast-util-to-string', function (t) {
  t.deepEqual(
    toString(u('cdata', '<greeting>Hello, world!</greeting>')),
    '<greeting>Hello, world!</greeting>',
    'should serialize cdata'
  )

  t.deepEqual(toString(u('comment', 'foo')), 'foo', 'should serialize comments')

  t.deepEqual(
    toString(u('instruction', {name: 'xml'}, 'version="1.0" encoding="UTF-8"')),
    'version="1.0" encoding="UTF-8"',
    'should serialize instructions'
  )

  t.deepEqual(toString(u('text', 'foo')), 'foo', 'should serialize texts')

  t.deepEqual(
    toString(u('doctype', {name: 'html'})),
    '',
    'should return empty for doctypes'
  )

  t.deepEqual(
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

  t.deepEqual(
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

  t.end()
})
