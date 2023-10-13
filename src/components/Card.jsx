import Image from 'next/image';
import React from 'react';


// /TODO - add href prop
export const Card = ({imgUrl, titleText, subtitleText = ''}) =>{
    return (
        <>
            <div
            // href={linkTo}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
            >
                <Image src={imgUrl} alt='characterImg'/>
                <h2>{titleText}</h2>
            </div>
        </>
    )
}

