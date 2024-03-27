// import React from 'react'

// const VedioCart = ({info}) => {
//     console.log(info);
//     const {snippet, statistics} = info;
//     const {channelTitle,title,thumbnails} = snippet;
//   return (
//     <div>
//         <img src={thumbnails.high.url} alt='video-pic' />
//         <ul>
//             <li>{title}</li>
//             <li>{channelTitle}</li>
//             <li>{statistics.viewCount} views</li>
//         </ul>
//         vediosssss
//     </div>
//   )
// }

// export default VedioCart



import React from 'react';

const VedioCart = ({ info }) => {
    // Check if 'info' is defined
    console.log(info);
    if (!info) {
        return <div>No video information available</div>;
    }

    // Destructure 'snippet' and 'statistics' properties from 'info'
    const { snippet, statistics } = info;

    // Check if 'snippet' is defined
    if (!snippet) {
        return <div>No video snippet available</div>;
    }

    // Destructure 'channelTitle', 'title', and 'thumbnails' properties from 'snippet'
    const { channelTitle, title, thumbnails } = snippet;

    // Check if 'thumbnails' is defined
    if (!thumbnails) {
        return <div>No video thumbnails available</div>;
    }

    // Render the component with the extracted data
    return (
        <div className='m-4 p-2 w-72 bg-white rounded shadow-md'>
            <img className='rounded-lg' src={thumbnails.medium.url} alt='video-pic' />
            <ul>
                <li>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics ? statistics.viewCount + ' views' : 'Views not available'}</li>
            </ul>
            
        </div>
    );
}

export default VedioCart;
