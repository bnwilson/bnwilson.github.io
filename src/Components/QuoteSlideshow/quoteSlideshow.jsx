import React,{useState, useEffect, useRef} from "react";
import styles from "./quoteSlideshow.module.css"

const delay = 6500;

/** Auto-scrolling quote slideshow
 * 
 * @param {{quotes: {author:string, quote:string}[],delay:number}} props Array of quotes: 
 * _`{quote: string , author: string}`_
 *  - static data located in:  _`src/static/home-people-feedback.js`_
 *  - `delay` - ms value of auto-scroll delay (_default: `2500`_)
 */
export function QuoteSlideshow (props={quotes: [{author:"", quote:""}],customDelay: 2500}) {
    const {quotes,customDelay} = props
    const [currentSlide, setCurrentSlide] = useState(0)
    const timeoutRef = useRef(null)

    const resetTimeout = () => timeoutRef.current ? clearTimeout(timeoutRef.current) : null
    const nextSlide = () => setCurrentSlide(
        previousSlide => 
            previousSlide + 1 === quotes.length ? 0 : previousSlide + 1
    )
    const prevSlide = () => setCurrentSlide(
        previousSlide => 
            previousSlide - 1 >= 0 ? previousSlide - 1 : quotes.length
    )
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setCurrentSlide(prevSlide => {
                console.log(`currentSlide => ${prevSlide}`)
                return prevSlide + 1 === quotes.length ? 0 : prevSlide + 1
            })

        }, delay)
        return () => {
            resetTimeout();
        };
    })

    return (
    <>
        
        <div className={styles.slideshow_container}>
            {quotes && quotes.length && quotes.map((q, i) => (
                <div className={`${styles.quote_slide}${i===currentSlide ? ` ${styles.active}` : ''}`} key={i}>
                    <q className={styles.quote} >{q.quote}</q>
                    <p className={styles.author} >- {q.author}</p>
                </div>
            ))}
            <div className={styles.dot_container} >
                {quotes.map((_,indx) => 
                    <span 
                        className={`${styles.dot}${indx === currentSlide ? ' '+styles.active : ""}`} 
                        onClick={() => setCurrentSlide(indx)}
                        key={indx}
                    />
                )}
            </div>
            <button className={styles.prev} onClick={prevSlide}>&lt;</button>
            <button className={styles.next} onClick={nextSlide}>&gt;</button>
        </div>
    </>
    )
}