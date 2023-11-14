import marqueeStyles from './marquee.module.css';

/**
 * @name Marquee
 * @description Simple digital-style marquee, 
 *     * `marqueeText` accepts standalone or array of strings
 *     * `marqueeType` currently only accepts a value of `"default"`
 * @param {{marqueeText: string | string[], marqueeType: "default" }} marqueeProps 
 */
export function Marquee ({marqueeText="", marqueeType="default"}) {
    const scrollingText = (Array.isArray(marqueeText)) ?
        marqueeText :
        marqueeText.split(/\s+/);

    return (
        <div className={marqueeStyles.marquee} >
            <section>
                <ul className={marqueeStyles.marquee_content} >
                    {scrollingText.map((text, i) => <li key={i}>{text}</li>)}
                </ul>
                <ul className={marqueeStyles.marquee_content} >
                    {scrollingText.map((text, i) => <li aria-hidden="true" key={i}>{text}</li>)}
                </ul>
            </section>
        </div>
    )
}