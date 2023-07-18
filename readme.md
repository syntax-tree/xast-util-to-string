# xast-util-to-string

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[xast][] utility to get the plain-text value of a node.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`toString(node)`](#tostringnode)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package is a utility that takes a [xast][] node and gets its plain-text
value.
This is like the DOMs `Node#textContent` getter but there are some small
deviations.

## When should I use this?

This is a small utility that is useful when you want a plain-text version of a
node when working with xast (XML).

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install xast-util-to-string
```

In Deno with [`esm.sh`][esmsh]:

```js
import {toString} from 'https://esm.sh/xast-util-to-string@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {toString} from 'https://esm.sh/xast-util-to-string@2?bundle'
</script>
```

## Use

```js
import {x} from 'xastscript'
import {toString} from 'xast-util-to-string'

const tree = x(
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

This package exports the identifier [`toString`][api-to-string].
There is no default export.

### `toString(node)`

Get the plain text value of a node.

If the node has a `value` field (*[cdata][]*, *[comment][]*, *[doctype][]*,
*[instruction][]*, or *[text][]*), returns it.
If the node has a `children` field (*[root][]* or *[element][]*), recurses into
it to concatenate all texts.

###### Returns

Serialized `node` (`string`).

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line, `xast-util-to-string@^3`,
compatible with Node.js 16.

## Security

`xast-util-to-string` does not change the syntax tree so there are no openings
for [cross-site scripting (XSS)][xss] attacks.

## Related

*   [`xast-util-to-xml`](https://github.com/syntax-tree/xast-util-to-xml)
    — serialize xast to XML
*   [`hast-util-to-string`](https://github.com/rehypejs/rehype-minify/tree/main/packages/hast-util-to-string)
    — get the plain-text value (`textContent`)
*   [`hast-util-to-text`](https://github.com/syntax-tree/hast-util-to-text)
    — get the plain-text value (`innerText`)
*   [`hast-util-from-text`](https://github.com/syntax-tree/hast-util-from-text)
    — set the plain-text value (`innerText`)
*   [`hast-util-from-string`](https://github.com/rehypejs/rehype-minify/tree/main/packages/hast-util-from-string)
    — set the plain-text value (`textContent`)

## Contribute

See [`contributing.md`][contributing] in [`syntax-tree/.github`][health] for
ways to get started.
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

[size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=xast-util-to-string

[size]: https://bundlejs.com/?q=xast-util-to-string

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/syntax-tree/unist/discussions

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[license]: license

[author]: https://wooorm.com

[health]: https://github.com/syntax-tree/.github

[contributing]: https://github.com/syntax-tree/.github/blob/main/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/main/support.md

[coc]: https://github.com/syntax-tree/.github/blob/main/code-of-conduct.md

[xast]: https://github.com/syntax-tree/xast

[root]: https://github.com/syntax-tree/xast#root

[comment]: https://github.com/syntax-tree/xast#comment

[cdata]: https://github.com/syntax-tree/xast#cdata

[doctype]: https://github.com/syntax-tree/xast#doctype

[element]: https://github.com/syntax-tree/xast#element

[instruction]: https://github.com/syntax-tree/xast#instruction

[text]: https://github.com/syntax-tree/xast#text

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[api-to-string]: #tostringnode
