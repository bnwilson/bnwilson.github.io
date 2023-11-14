import React from 'react';
import Image from '../../img/brad_professional.gif';

/**
 * 
 * @param {string} wrapperClassName css class of `<div>` wrapper; uses `React.Fragment` if ommitted
 * @param {string} imgClassName css class of `<img>` element
 * @returns 
 */
export function SelfPortrait (props={wrapperClassName:"",imgClassName:""}) {
    const {wrapperClassName, imgClassName} = props;
    return (
        wrapperClassName ?
            <div className={wrapperClassName} >
                <img src={Image} alt='Bradley' className={imgClassName} />
            </div> :
            <>
                <img src={Image} alt='Bradley' className={imgClassName} />
            </>

    )
}