import React from 'react';

const Cards = (props) => {
    const { header, content, footer, midItem } = props;
    return (
        <div className={midItem ? 'cardContainer midItem' : 'cardContainer'}>
            <div className={'cardHeader'}>
                <h2>{header}</h2>
            </div>
            <div className={'cardContent'}>
                <img src={content} alt={'img'} className={'cardImage'} />
            </div>
            <div className={'cardFooter'}>
                {footer}
            </div>
        </div>
    )
}

export default Cards;