// z2j.d.ts

/**
 * Represents a language pattern with a regex and a corresponding CSS class name.
 */
interface LanguagePattern {
    regex: RegExp;
    className: string;
  }
  
  /**
   * Removes comments from the input string.
   * @param input - The input string possibly containing comments.
   * @returns The input string with comments removed.
   */
  declare function removeComments(input: string): string;
  
  /**
   * Converts a string in zon format to a JSON-compatible format.
   * @param input - The input string in zon format.
   * @returns A JSON-formatted string.
   */
  export declare function zon2json(input: string): string;
  
  /**
   * Highlights code content based on language patterns.
   * @param language - Array of language patterns with regex and className.
   * @param content - The code that needs to be highlighted.
   * @returns The highlighted code as a string.
   */
  export declare function highlight(language: LanguagePattern[], content: string): string;
  
  /**
   * Highlights all elements with the specified class name based on language patterns.
   * @param language - Array of language patterns with regex and className.
   * @param className - The class name of elements containing code to highlight.
   * @returns void.
   */
  export declare function highlightElements(language: LanguagePattern[], className: string): void;
  
  /**
   * Highlights a single element with the specified ID based on language patterns.
   * @param language - Array of language patterns with regex and className.
   * @param id - The ID of the element containing code to highlight.
   * @returns void.
   */
  export declare function highlightElement(language: LanguagePattern[], id: string): void;
  
/**
 * Bash language syntax highlighting patterns.
 */
export declare const bash: LanguagePattern[];

/**
 * Zig language syntax highlighting patterns.
 */
export declare const zig: LanguagePattern[];

/**
 * Diff language syntax highlighting patterns.
 */
export declare const diff: LanguagePattern[];