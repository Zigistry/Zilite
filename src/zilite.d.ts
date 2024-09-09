// z2j.d.ts

/**
 * Represents a language pattern with a regex and a corresponding CSS class name.
 */
interface LanguagePattern {
    regex: RegExp;
    className: string;
}

/**
 * Other function declarations for highlight, highlightElements, highlightElement, etc.
 */
export declare function highlight(language: LanguagePattern[], content: string): string;
export declare function highlightElements(language: LanguagePattern[], className: string): void;
export declare function highlightElement(language: LanguagePattern[], id: string): void;
export declare function zon2json(input: string): string;
