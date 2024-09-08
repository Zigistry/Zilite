/**
 * 
 * @param {{regex: RegExp;className: string;}[]} language is the pattern input
 * @param {string} content is the code that needs to be highlighted input
 * @returns {string} is the output code.
 */
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

/**
 * 
 * @param {{regex: RegExp;className: string;}[]} language is the pattern input
 * @param {string} content is the code that needs to be highlighted input
 * @param {string} className is the black inside which the code is present.
 * @returns {void}
 */
export function highlightElements(language, className) {
    const codeContainers = document.getElementsByClassName(className);
    for (let pre of codeContainers) {
        const codeContent = pre.innerHTML;
        const highlightedContent = highlight(language, codeContent);
        pre.innerHTML = highlightedContent;
    }
}

/**
 * 
 * @param {{regex: RegExp;className: string;}[]} language 
 * @param {string} id 
 */
export function highlightElements(language, id) {
    const codeContainer = document.getElementById(id);
    const codeContent = codeContainer.innerHTML;
    const highlightedContent = highlight(language, codeContent);
    codeContainer.innerHTML = highlightedContent;
}
