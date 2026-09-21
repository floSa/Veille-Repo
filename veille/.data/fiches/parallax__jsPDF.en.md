# parallax/jsPDF

> **A JavaScript library that writes PDF files from the browser or Node, with no rendering server.**

## The problem

Producing a PDF on the client side usually means going through a rendering service or a
server-side binary: you send data, wait for a file, and end up managing a queue and a bill.
When the artefact is an invoice, a ticket or a screen export, that infrastructure costs more
than the document does. The README does not state the problem itself; it introduces the
project in one line as "a library to generate PDFs in JavaScript".

## What it actually does

jsPDF builds the document through method calls on an object: `new jsPDF()` creates an A4
portrait page in millimetres, `doc.text("Hello world!", 10, 10)` places text at coordinates,
`doc.save("a4.pdf")` writes the file. The constructor accepts `orientation`, `unit` and
`format` (for example `[4, 2]` in inches) — this is a page and coordinate model, not a layout
engine.

The package ships several builds in `dist`: `jspdf.es.*.js` (ES2015 module),
`jspdf.node.*.js` (uses file operations instead of browser APIs), `jspdf.umd.*.js` (AMD or
script-tag loading) and `polyfills*.js` for older browsers such as Internet Explorer. The
README notes that importing `"jspdf"` is normally enough — build tools and Node pick the right
file.

Two structural points. Fonts: the 14 standard PDF fonts are limited to ASCII, so any UTF-8 text
requires embedding a `.ttf` — either through the bundled fontconverter at
`/fontconverter/fontconverter.html`, which emits a js file containing the font as a base64
string, or by loading the `.ttf` as a binary string and calling `doc.addFileToVFS`,
`doc.addFont` and `doc.setFont`. Two APIs: since the merge with the yWorks fork, a "compat"
mode (the default, MrRio's original API, compatible with plugins) coexists with an "advanced"
mode (patterns, FormObjects, transformation matrices); you switch with
`doc.advancedAPI(doc => {...})` or `doc.compatAPI(...)`, and jsPDF returns to the previous mode
automatically once the callback has run.

Some functions rely on optional dependencies loaded dynamically: the `html` method depends on
`html2canvas` and, when given an HTML string, `dompurify`; `canvg` is also listed.

## How it is wired

```mermaid
graph LR
  A[votre code<br/>import { jsPDF } from &quot;jspdf&quot;] --> B[new jsPDF<br/>orientation · unit · format]
  B --> C[appels de dessin<br/>doc.text · doc.html]
  B --> D[modes d'API<br/>doc.compatAPI · doc.advancedAPI]
  C --> E[polices embarquées<br/>addFileToVFS · addFont · setFont<br/>fontconverter/fontconverter.html]
  C --> F[dépendances optionnelles<br/>html2canvas · dompurify · canvg]
  B --> G[dist/<br/>jspdf.es · jspdf.node · jspdf.umd · polyfills]
  C --> H[doc.save&#40;&quot;a4.pdf&quot;&#41;<br/>navigateur ou système de fichiers Node]
```

No code-derived diagram exists for this repository: the chart above is reconstructed from the
README alone. The thing to read in it is that there is no service at the end of the chain — a
single object accumulates the calls and emits the file, and the `jspdf.node.*.js` variant swaps
browser APIs for file operations without changing the calling code.

## Try it

```sh
npm install jspdf --save
# or
yarn add jspdf
```

Or with no install at all, via a script tag:

```html
<script src="https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js"></script>
```

```javascript
import { jsPDF } from "jspdf";

// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF();

doc.text("Hello world!", 10, 10);
doc.save("a4.pdf");
```

In Node:

```javascript
const { jsPDF } = require("jspdf"); // will automatically load the node version

const doc = new jsPDF();
doc.text("Hello world!", 10, 10);
doc.save("a4.pdf"); // will save the file in the current working directory
```

The README also gives `meteor add jspdf:core` for Meteor, and
`import "jspdf/dist/polyfills.es.js";` for older browsers.

## Cost and traps

- **Free, MIT licensed**, no key and no account: the cost is not monetary.
- **Security, stated outright by the README**: "We strongly advise you to sanitize user input
  before passing it to jsPDF!". A document built from unsanitised input is a risk the caller
  takes on.
- **Local file reads under Node**: jsPDF restricts reading local files by default. The README
  recommends the runtime permission flags
  (`node --permission --allow-fs-read=... ./scripts/generate.js`, remembering to include every
  imported JavaScript file, dependencies included) and calls the alternative
  `doc.allowFsRead = ["./fonts/*", "./images/logo.png"]` a fallback that is not recommended.
- **UTF-8 means embedding a font**: beyond ASCII you must convert a `.ttf` and add it to the
  project. If the font lacks the glyphs you need (Chinese, for instance), the README warns that
  the text will come out garbled. That is extra bundle weight.
- **Optional dependencies and bundle size**: `html2canvas`, `dompurify` and `canvg` are loaded
  dynamically and Webpack turns them into separate chunks. To avoid that, the README shows how
  to declare them as `externals` — and insists you only declare the ones you are **not** using.
  The procedure differs per framework (Vue CLI via `configureWebpack`/`chainWebpack`, Angular
  via custom webpack builders, create-react-app via react-app-rewired or ejecting).
- **Two API modes**: the default "compat" mode does *not* have transformation matrices or
  patterns. A missing feature may simply be a mode you have not switched into.

## What it is not

- **Not a dependable HTML-to-PDF converter.** The `html` method exists but delegates to
  `html2canvas`: you go through a canvas rendering, with the optional dependencies that
  implies. It is not a layout engine that reflows text across pages on its own — you place
  elements at coordinates.
- **Not a PDF reader or editor**: jsPDF writes documents. Opening, displaying or extracting the
  contents of an existing PDF appears nowhere in the README.
- **Not Unicode by default**: without an embedded font you are limited to the ASCII range of
  the 14 standard fonts of the format.
- **Not a security boundary**: neither against unsanitised input nor against disk access — the
  README hands that responsibility back to Node's flags.

## Alternatives

| | When to prefer it |
|---|---|
| **yWorks/jsPDF** | The yWorks fork is named in the README; it has been merged and its API is now reachable through "advanced" mode. Worth looking at for history only — the functionality lives in the main repository. |
| **mozilla/pdf.js** | A catalogue neighbour, and a complement rather than a competitor: pdf.js *displays* PDFs in JavaScript where jsPDF *writes* them. Prefer it as soon as the need is to read or view. |

The other suggested neighbours (`avelino/awesome-go`, `emberjs/ember.js`,
`catdad/canvas-confetti`) are not comparable: a Go list, an application framework and a visual
effect, none of which produce a PDF document.

## For you

Little overlap with a data/ML pipeline as such, but this is the brick that cleanly answers
"export this dashboard as a PDF" on the client side, without adding a rendering service to the
infrastructure or sending the data through a third party — an argument that carries weight when
the figures on screen are sensitive. Adopt it when the document is simple and positioned (an
invoice, a ticket, the cover page of a report); skip it when the need is to lay out a long
document, where all the repagination work falls back on your own code.
