import assert from 'node:assert/strict'
import test from 'node:test'
import {u} from 'unist-builder'
import {toString} from 'xast-util-to-string'

test('toString', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(Object.keys(await import('xast-util-to-string')).sort(), [
      'toString'
    ])
  })

  await t.test('should serialize cdata', async function () {
    assert.deepEqual(
      toString(u('cdata', '<greeting>Hello, world!</greeting>')),
      '<greeting>Hello, world!</greeting>'
    )
  })

  await t.test('should serialize comments', async function () {
    assert.deepEqual(toString(u('comment', 'foo')), 'foo')
  })

  await t.test('should serialize instructions', async function () {
    assert.deepEqual(
      toString(
        u('instruction', {name: 'xml'}, 'version="1.0" encoding="UTF-8"')
      ),
      'version="1.0" encoding="UTF-8"'
    )
  })

  await t.test('should serialize texts', async function () {
    assert.deepEqual(toString(u('text', 'foo')), 'foo')
  })

  await t.test('should return empty for doctypes', async function () {
    assert.deepEqual(toString(u('doctype', {name: 'html'})), '')
  })

  await t.test(
    'should serialize elements (excluding non-parent and non-text descendants)',
    async function () {
      assert.deepEqual(
        toString(
          u('element', {name: 'package', attributes: {}}, [
            u('text', 'foo '),
            u('comment', 'bar'),
            u('element', {name: 'thing', attributes: {}}, [u('text', ' baz')])
          ])
        ),
        'foo  baz'
      )
    }
  )

  await t.test(
    'should serialize roots (excluding non-parent and non-text descendants)',
    async function () {
      assert.deepEqual(
        toString(
          u('root', [
            u('doctype', {name: 'html'}),
            u('text', 'foo '),
            u('comment', 'bar'),
            u('element', {name: 'thing', attributes: {}}, [u('text', ' baz')])
          ])
        ),
        'foo  baz'
      )
    }
  )
})
