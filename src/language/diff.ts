import { LanguagePattern } from "../types/types";

export const diff:LanguagePattern[] = [
    { regex: /"(?:[^"\\]|\\.)*"/g, className: 'string' },
    { regex: /'([^'\\]|\\.)'/g, className: 'char' },
    { regex: /\\\\.*$/gm, className: 'string' },
    { regex: /\/\/.*$/gm, className: 'comment' },
    { regex: /^\+.*$/gm, className: 'diff-add' },
    { regex: /^\-.*$/gm, className: 'diff-subtract' },
    { regex: /\b(const|try|var|return|if|else|while|for|switch|break|catch|continue|struct|enum|pub|use|extern|export|inline|noalias|align|defer|fn)\b/g, className: 'keyword' },
    { regex: /\b(true|false|null)\b/g, className: 'boolean' },
    { regex: /\b(?:u\d+|i\d+|f\d+|bool|void|noreturn|type|isize|usize|c_void|c_int|c_long|c_ulong|c_float|c_double)\b/g, className: 'type' },
    { regex: /\b\d+(\.\d+)?\b/g, className: 'number' },
    { regex: /\b(\w+)\s*(?=\()/g, className: 'function' },
    { regex: /@/g, className: 'function' },
    { regex: /[\{\}\[\]\(\)\,.|:]/g, className: 'operators' },
    { regex: /(?<!&\w{0,10});(?!\w*;)/g, className: 'operators' },
];