import { LanguagePattern } from "./types/types.mjs";

export function highlight(language: LanguagePattern[], content: string) {
    content = content.replace(/ /g, "±±§§±±§§")
        .replace(/=/g, "±§±§±§±§");
    language.forEach(({ regex, className }) => {
        content = content.replace(regex, (match) => `<span class="${className}">${match}</span>`);
    });
    content = content.replace(/±±§§±±§§/g, "&nbsp;")
        .replace(/±§±§±§±§/g, "=")
        .replace(/\n/g, "<br/>");
    return content;
}

export function highlightElements(language: LanguagePattern[], className: string) {
    const codeContainers = document.getElementsByClassName(className);
    for (let pre of codeContainers) {
        const codeContent = pre.innerHTML;
        const highlightedContent = highlight(language, codeContent);
        pre.innerHTML = highlightedContent;
    }
}

export function highlightElement(language: LanguagePattern[], id: string) {
    const codeContainer = document.getElementById(id) as HTMLElement;
    const codeContent = codeContainer.innerHTML;
    const highlightedContent = highlight(language, codeContent);
    codeContainer.innerHTML = highlightedContent;
}
