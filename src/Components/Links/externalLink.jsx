import React from 'react';
import {ReactComponent as ExternalIcon} from '../../img/external-link-symbol.svg';
import ExternalLinkStyles from './externalLink.module.css';

export function ExternalLink ({urlHref="", urlText="", isButton=false}) {
    const linkCssClassName = ExternalLinkStyles.link__external_icon;
    const anchorClassName = isButton ? ExternalLinkStyles.button : '';
    return (
        <a 
            rel="noopener noreferrer"
            dataicon="external" 
            target="_blank"
            href={urlHref}
            className={anchorClassName}

        >
            {urlText}
            <ExternalIcon fill="rgba(23, 56, 66, 0.739)" className={linkCssClassName} />
        </a>)
}