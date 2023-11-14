// import notepadStyles from './notepad.module.css'
import './notepad.css';
import React,{ useEffect } from 'react';

function toggleHiddenList(elementSelector="#notepad_list_item") {
    const elementRevealClass = "reveal_list_item"
    const listItems = document.querySelectorAll(elementSelector);
    console.log(listItems.length)
    console.log(elementSelector,elementRevealClass)
    
    let i = 0;
    let interval = setInterval(() => {
        let item = listItems[i];
        listItems[i].classList.toggle(elementRevealClass,true);
        // console.log(`listItems[${i}].classList.toggle("${elementRevealClass}")`)
        i === listItems.length - 1 ? clearInterval(interval) : i++;
        
    }, 1400)
    
}

function handleTypewriterReveal(elementClass="",lineText=[]) {
    let indx = 0;
    const speed = 50;
    const items = document.querySelectorAll(elementClass);
    setInterval(() => {
        const item = items[indx];
        const text = lineText[indx];
        indx++;
        for (let x of text) {
            setTimeout(() => item.innerHTML += x, speed)
        }
    }, 400);
}

/**
 * @name Notepad
 * @description Technically a "legal pad", this styled component accepts 2 props:  `notepadTitle` and `notepadList`
 *   * Has a red-fonted, cursive title 
 *   * Utilizes a simple 'fade-in' effect for the list item(s)
 * @param {{notepadTitle: string, notepadList: string[]}} notepadProps 
 */
export function Notepad (props={notepadTitle:"", notepadList:[""]}) {
    const {notepadTitle, notepadList} = props
    useEffect(() => {
        toggleHiddenList('#notepad_list_item');
    })
    
    return (
        <>
            <span className={'notepad_box'}>
                <div className={'notepad_binding'} />
                <div className={'notepad_list_wrapper'} >
                    <h1 className={'notepad_list_title'} >{notepadTitle}</h1>
                    <ul className={'notepad_list_items'} >
                        {notepadList.map((litem, i) => <li id={'notepad_list_item'}  key={i}>{litem}</li>)}
                    </ul>
                </div>
            </span>
        </>
    )
}