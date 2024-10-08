<center>

![](https://raw.githubusercontent.com/Zigistry/Zilite/main/assets/logo.png)

</center>

## Yet another code highlighter.

- Uses no dependencies.
- You can contribute more programming languages.
- Is extremely small size.

## How to use?
Just see the following example:

### For basic HTML:

```html
<!DOCTYPE html>

<html>

<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zilite@0.0.25/src/styles/darkMode.css" />
</head>

<body>
    <div class="language-zig nice-code-block">
        const zilite:[]const u8 = "Syntax Highlighter";
    </div>
    <script type="module">
        import { highlightElements } from "https://cdn.jsdelivr.net/npm/zilite@0.0.25";
        import { zig } from "https://cdn.jsdelivr.net/npm/zilite@0.0.25/src/language/zig.js";
        highlightElements(zig, "language-zig");
    </script>
</body>

</html>
```

### For use as a node module:

```bash
npm i zilite
```

```js
import * as hl from "higherlight";
import { zig } from "higherlight/src/language/zig";

const highlightedCode = hl.highlight(zig, "const x = 'asdf';");
console.log(highlightedCode);
```

Understood? or Still confused? Create a new issue and clear your doubts.

## Contributing:

Please ⭐️ this repo, create pull requests, issues, etc.
