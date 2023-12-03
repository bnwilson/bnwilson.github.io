import React from 'react';
import {ReactComponent as ExternalIcon} from '../../img/external-link-symbol.svg';
import ExternalLinkStyles from './externalLink.module.css';

export function ExternalLink ({urlHref="", urlText=""}) {

    return (
        <a 
            rel="noopener noreferrer"
            dataicon="external" 
            target="_blank"
            href={urlHref}
        >
            {urlText}
            <ExternalIcon fill="rgba(23, 56, 66, 0.739)" className={ExternalLinkStyles["project-table__row-link_icon"]} />
        </a>)
}