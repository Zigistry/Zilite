import * as hl from "higherlight";
import { zig } from "higherlight/src/language/zig";

const highlightedCode = hl.highlight(zig, "const x = 'asdf';");
console.log(highlightedCode);


