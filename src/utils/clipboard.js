
// Permission only valid on Chromium
const isClipboardReadAccess = async () => {
    try {
        const queryResult = await navigator.permissions.query({name: "read-on-clipboard"})
        return !!(queryResult.state === "granted")
    } catch (err) {
        return false
    }
}

// Permission only valid on Chromium
const isClipboardWriteAccess = async () => {
    try {
        const queryResult = await navigator.permissions.query({name: "write-on-clipboard"})
        return !!(queryResult.state === "granted")
    } catch (err) {
        return false
    }
}

/** ***`async`***`copyToClipboard` verifies access and attempts to copy given `contentText` to Clipboard
 * 
 * @param {string} contentText text to copy to clipboard
 * @param {boolean} logErrorMsg `true | false` - execute a `console.error(...)` following any issue(s)
 * @returns {Promise<"success" | "fail">} `"success" | "fail"` - _result_
 */
const copyContentToClipboard = async (contentText="", logErrorMsg=false) => {
    const isClipboardAccess = await isClipboardWriteAccess()
    if (!contentText || typeof contentText !== "string") {
        logErrorMsg && console.error(JSON.stringify(new Error("No text given in arg"), null, 2 ))
    }
    else if (isClipboardAccess && contentText) {
        try {
            await navigator.clipboard.writeText(contentText)
            return "success"
        } catch (clipboardErr) {
            logErrorMsg && console.error(JSON.stringify(clipboardErr, null, 2 ))
            return "fail"
        }
    } else {
        return "fail"
    }
}

const copyTextContentsToClipboard = async (contentText="", logErrorMsg=false) => {
    console.log(contentText)
    if (!contentText || typeof contentText !== "string") {
        logErrorMsg && console.error(JSON.stringify(new Error("No text given in arg"), null, 2 ))
        return "fail"
    } 
    else {
        try {
            // const type = "text/plain"
            // const blob = new Blob([contentText], {type})
            // const data = new ClipboardItem({[type]: blob})
            // await navigator.clipboard.write([data])
            await navigator.clipboard.writeText(contentText)
            return "success"
            
        } catch (clipWriteErr) {
            logErrorMsg && console.log("Error:  ", JSON.stringify(clipWriteErr, null, 2 ))
            return "fail"
        }
    }
}

export {
    isClipboardReadAccess,
    isClipboardWriteAccess,
    copyContentToClipboard,
    copyTextContentsToClipboard
}