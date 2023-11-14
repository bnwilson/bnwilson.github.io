import React from "react"

/** 
 * `formatBodyText` - wrote with `WecomeBanner` component in mind.  
 * - Replaces _escaped_ newline chars with `<br/>` tag.  
 * - Replaces `{{codeContent}}` tag with joined `codeContent` data
 * @param {string} bodyText string
 * @param {string[]} codeContent array-of-strings
 * @returns {string[]} `bodyTextParsedFinal` 
 */
export function formatBodyText (bodyText="", codeContent=[]) {
    const bodyTextParsedFinal = []
    /* Reg Exp patterns -- newlines, codeContent */
    const newlinesRegExp = /\\n/gi
    const codeTextRegExp = /\{{2}codeContent\}{2}/i

    /* Newlines - replaced '\n' chars with <br> tag */
    const bodyTextSplit = bodyText.split(newlinesRegExp)
    console.log(`bodyTextSplit.length ==>  ${bodyTextSplit.length}`)
    const bodyTextParsed = interleave(bodyTextSplit, <br />)

    /* Concat 'codeContent' array-of-string and nest in <code> tag */
    const codeContentParsed = codeContent.join(" \u{000B7} ")
    // const codeContentParsed = codeContent.join(" \u{0D66} ")
    const codeContentWrapped = <code>{codeContentParsed}</code> 
    bodyTextParsed.forEach(bodyTextItem => {
        // console.log(`value:  ${bodyTextItem}`, typeof bodyTextItem, )

        if (typeof bodyTextItem === 'string' && bodyTextItem.match(codeTextRegExp)) {
            const bodySegmentSplit = bodyTextItem.split(codeTextRegExp)
            bodyTextParsedFinal.push(
                bodySegmentSplit[0],
                codeContentWrapped,
                bodySegmentSplit[1]
            )
        } else {
            bodyTextParsedFinal.push(bodyTextItem)
        }
    })
    // bodyTextParsed = bodyTextParsed.replace(codeTextRegExp, codeContentParsed)
 
    return bodyTextParsedFinal
}

/**
 * `interLeave` - insert _'middle'_ `newItem` between existing elements
 *  - _does not modify original array_
 * 
 * @param {Array} arr Array to be modified
 * @param {any} newItem Value of `any` type to be inserted between existing elements
 * @returns {Array} New, modified `arr` Array
 */
export const interleave = (arr, newItem) => [].concat(...arr.map(n=> [n, newItem])).slice(0, -1)