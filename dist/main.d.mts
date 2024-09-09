import { LanguagePattern } from "./types/types.mjs";
export declare function highlight(language: LanguagePattern[], content: string): string;
export declare function highlightElements(language: LanguagePattern[], className: string): void;
export declare function highlightElement(language: LanguagePattern[], id: string): void;
