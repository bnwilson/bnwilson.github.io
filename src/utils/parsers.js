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
    /* Reg Exp patterns -- newlines, codeContent */
    const newlinesRegExp = /\\n/gi
    const codeTextRegExp = /\{{2}codeContent\}{2}/i
    const boldTextSelect = /\*{2}.+?\*{2}/g 
    
    /* Newlines - replaced '\n' chars with <br> tag */
    const bodyTextSplit = bodyText.split(newlinesRegExp)
    const bodyTextParsed = interleave(bodyTextSplit, "br")
    
    /* Concat 'codeContent' array-of-string and nest in <code> tag */
    const codeContentParsed = codeContent.join(" \u{000B7} ")
    const codeContentWrapped = <code key={bodyTextParsed.length}>{codeContentParsed}</code> 
    
    let bodyTextParsedFinal

    /* insert {{codeContent}} items */
    bodyTextParsedFinal = bodyTextParsed.map(bodyTextItem => {
        // console.log(`value:  ${bodyTextItem}`, typeof bodyTextItem, )
        const bodyTextItemSegments = []
        
        if (typeof bodyTextItem === 'string' && bodyTextItem.match(codeTextRegExp)) {
            const bodySegmentSplit = bodyTextItem.split(codeTextRegExp)
            bodyTextItemSegments.push(
                bodySegmentSplit[0],
                codeContentWrapped,
                bodySegmentSplit[1]
            )
        }

        return bodyTextItemSegments.length ? bodyTextItemSegments : bodyTextItem
    }).flat()

    /* bold text wrapped in double "*"'s */
    bodyTextParsedFinal = bodyTextParsedFinal.map(bodyTextItem => {
        const bodyTextItemSegments = []
        if (typeof bodyTextItem === 'string' &&  boldTextSelect.test(bodyTextItem)) {
            const bodyTextItemSplit =  []
            let boldedText = bodyTextItem.match(boldTextSelect)
            
            if (boldedText instanceof Array) {
                boldedText = boldedText.map(t => t.replace(/\*{2}/g,""))
                bodyTextItem.split(boldTextSelect).forEach((bodyTextSegment,i) => {
                    if (i === 0) {
                        bodyTextItemSegments.push(bodyTextSegment)
                    } else {
                        bodyTextItemSegments.push(boldText( boldedText[i-1] ))
                        bodyTextItemSegments.push(bodyTextSegment)
                    }
                })
            } 
        }
        return bodyTextItemSegments.length ? bodyTextItemSegments : bodyTextItem
    }).flat()
    
    return bodyTextParsedFinal
}



// const splitCodeTextCallback = (textSegment,index) => {

    
//     if (textSegment.match(codeTextRegExp)) {
//         const bodySegmentSplit = textSegment.split(codeTextRegExp)
//         bodyTextItemSegments.push(
//             bodySegmentSplit[0],
//             codeContentWrapped,
//             bodySegmentSplit[1]
//         )
//     } 
// }

/**
 * `interLeave` - insert _'middle'_ `newItem` between existing elements
 *  - _does not modify original array_
 * 
 * @param {Array} arr Array to be modified
 * @param {any} newItem Value of `any` type to be inserted between existing elements
 * @returns {Array} New, modified `arr` Array
 */
export const interleave = (arr, newItem='br') => {
    return [].concat(...arr.map((n, i) => [n, newItem === 'br' ? <br key={i}/> : newItem])).slice(0, -1);
}

const boldText = (text="") => {
    const boldStyle = {fontWeight: "bold"}

    return <label style={boldStyle} >{text}</label>
}