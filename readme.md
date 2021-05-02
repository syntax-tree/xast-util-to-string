# xast-util-to-string

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**xast**][xast] utility to get the plain text value of a [*node*][node].

This is like the DOMs `Node#textContent` getter but there are some deviations.
The resulting text is returned.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c):
Node 12+ is needed to use it and it must be `import`ed instead of `require`d.

[npm][]:

```sh
npm install xast-util-to-string
```

## Use

```js
import {x} from 'xastscript'
import {toString} from 'xast-util-to-string'

var tree = x(
  'ncx',
  {xmlns: 'http://www.daisy.org/z3986/2005/ncx/', version: '2005-1'},
  [
    x('head', [
      x('meta', {name: 'dtb:uid', content: 'urn:isbn:9781234567891'})
    ]),
    x('docTitle', [x('text', 'A Christmas Carol')]),
    x('docAuthor', [x('text', 'Charles Dickens')])
  ]
)

console.log(toString(tree))
```

Yields:

```txt
A Christmas CarolCharles Dickens
```

## API

This package exports the following identifiers: `toString`.
There is no default export.

### `toString(node)`

Utility to get the plain text value of a [*node*][node].
If the node has a `value` field ([*cdata*][cdata], [*comment*][comment],
[*doctype*][doctype], [*instruction*][instruction], or [*text*][text]), returns
it.
If the node has a `children` field ([*root*][root] or [*element*][element]),
recurses into it to concatenate all [*text*][text]s.

###### Returns

`string` — Serialized `node`.

## Security

`xast-util-to-string` does not change the syntax tree so there are no openings
for [cross-site scripting (XSS)][xss] attacks.

## Related

*   [`xast-util-to-xml`](https://github.com/syntax-tree/xast-util-to-xml)
    — serialize xast to XML
*   [`hast-util-to-string`](https://github.com/rehypejs/rehype-minify/tree/HEAD/packages/hast-util-to-string)
    — get the plain-text value (`textContent`)
*   [`hast-util-to-text`](https://github.com/syntax-tree/hast-util-to-text)
    — get the plain-text value (`innerText`)
*   [`hast-util-from-text`](https://github.com/syntax-tree/hast-util-from-text)
    — set the plain-text value (`innerText`)
*   [`hast-util-from-string`](https://github.com/rehypejs/rehype-minify/tree/HEAD/packages/hast-util-from-string)
    — set the plain-text value (`textContent`)

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/syntax-tree/xast-util-to-string/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/xast-util-to-string/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/xast-util-to-string.svg

[coverage]: https://codecov.io/github/syntax-tree/xast-util-to-string

[downloads-badge]: https://img.shields.io/npm/dm/xast-util-to-string.svg

[downloads]: https://www.npmjs.com/package/xast-util-to-string

[size-badge]: https://img.shields.io/bundlephobia/minzip/xast-util-to-string.svg

[size]: https://bundlephobia.com/result?p=xast-util-to-string

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/syntax-tree/unist/discussions

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/syntax-tree/.github/blob/HEAD/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/HEAD/support.md

[coc]: https://github.com/syntax-tree/.github/blob/HEAD/code-of-conduct.md

[xast]: https://github.com/syntax-tree/xast

[node]: https://github.com/syntax-tree/xast#nodes

[root]: https://github.com/syntax-tree/xast#root

[comment]: https://github.com/syntax-tree/xast#comment

[cdata]: https://github.com/syntax-tree/xast#cdata

[doctype]: https://github.com/syntax-tree/xast#doctype

[element]: https://github.com/syntax-tree/xast#element

[instruction]: https://github.com/syntax-tree/xast#instruction

[text]: https://github.com/syntax-tree/xast#text

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting
