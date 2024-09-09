export function highlight(language, content) {
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
export function highlightElements(language, className) {
    const codeContainers = document.getElementsByClassName(className);
    for (let pre of codeContainers) {
        const codeContent = pre.innerHTML;
        const highlightedContent = highlight(language, codeContent);
        pre.innerHTML = highlightedContent;
    }
}
export function highlightElement(language, id) {
    const codeContainer = document.getElementById(id);
    const codeContent = codeContainer.innerHTML;
    const highlightedContent = highlight(language, codeContent);
    codeContainer.innerHTML = highlightedContent;
}
