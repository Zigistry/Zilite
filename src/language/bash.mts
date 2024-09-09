import { LanguagePattern } from "../types/types.mjs";

export const bash:LanguagePattern[] = [
    { regex: /"(?:[^"\\]|\\.)*"/g, className: 'string' },
    { regex: /'([^'\\]|\\.)'/g, className: 'char' },
    { regex: /\\\\.*$/gm, className: 'string' },
    { regex: /\-\-(\w+)/gm, className: 'comment' },
    { regex: /#.*$/gm, className: 'comment' },
    { regex: /\-\w+/g, className: 'types' },
    { regex: /\b(zig|bash|sh|curl|wget|cd|rm|mkdir|git)\b/g, className: 'keyword' },
    { regex: /\b(true|false|null)\b/g, className: 'boolean' },
    { regex: /\b\d+(\.\d+)?\b/g, className: 'number' },
    { regex: /\b(\w+)\s*(?=\()/g, className: 'function' },
    { regex: /\$/g, className: 'operators' },
    { regex: /(?<!&\w{0,10});(?!\w*;)/g, className: 'operators' },
];
