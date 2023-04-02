import styles from '@/styles/Home.module.css'
import buttonstyle from '@/styles/Buttons.module.css'
import Image from 'next/image';
import { useState } from 'react';

// TODO Create function that fetches image links from database and returns them as an array

const imageLinks = [
    "https://i.imgur.com/QkNdCUa.gif",
    "https://i.imgur.com/R5acL8Q.gif",
    "https://i.imgur.com/fHrxjfx.gif",
    "https://i.imgur.com/U5ZCauZ.gif", // Placeholder image links for testing
    "https://i.imgur.com/P7G7PKw.gif", // TODO: Replace with array of links from database
    "https://i.imgur.com/CMETerj.gif",
    "https://i.imgur.com/tlLtGUv.gif",
    "https://i.imgur.com/FOiqiqf.gif",
    "https://i.imgur.com/mEfNWAn.gif",
    "https://i.imgur.com/kE7G9d3.gif",
    "https://i.imgur.com/BbdmNFg.gif",
    "https://i.imgur.com/gQT0XCW.gif",
    "https://i.imgur.com/uuv5m1w.gif",
    "https://i.imgur.com/000pNsF.gif",
    "https://i.imgur.com/c6gydJm.gif",
    "https://i.imgur.com/wEy11SR.gif",
]



export default function Gallery() {
    function ImageHolder() {
        return (
            <>
                <p className={styles.imagebox}>
                    <Image src={currentImage} alt="Placeholder" width={200} height={200} />
                </p>

            </>
        )
    };

    function MoreButton({ onClick }) {
        return <button className={buttonstyle.morebutton} onClick={onClick}>More Images</button>
    }
    const [currentImage, setCurrentImage] = useState(imageLinks[Math.floor(Math.random() * imageLinks.length)])
    function getNewImages() {
        let NewImages = imageLinks[Math.floor(Math.random() * imageLinks.length)]
        setCurrentImage(NewImages);
    }
    return (
        <>
            <div className={styles.gallerycontainer}>
                <ImageHolder />
                <ImageHolder />
                <ImageHolder />
                <ImageHolder />
                <ImageHolder />
                <ImageHolder />
                <ImageHolder />
                <ImageHolder />
                <ImageHolder />
                <ImageHolder />
                <ImageHolder />
                <ImageHolder />
                <ImageHolder />
                <ImageHolder />
                <ImageHolder />

            </div >
            <div className={buttonstyle.morebuttoncontainer}>
                <MoreButton onClick={getNewImages} />
            </div>


        </>
    )
}

//! This is the old code that I'm keeping for reference


// function ImageHolder() {
//     const [currentImage, setCurrentImage] = useState(imageLinks[Math.floor(Math.random() * imageLinks.length)])
//     // let getRandomImage = imageLinks[Math.floor(Math.random() * imageLinks.length)]
//     // let currentImage = getRandomImage
//     function getNewImages() {
//         let NewImages = imageLinks[Math.floor(Math.random() * imageLinks.length)]
//         setCurrentImage(NewImages);
//     }
//     return (
//         <>
//             <p className={styles.imagebox}>
//                 <Image src={currentImage} alt="Placeholder" width={200} height={200} />
//             </p>
//             <MoreButton onClick={getNewImages} />
//         </>
//     )
// };

// function MoreButton({ onClick }) {
//     return <button className={buttonstyle.morebutton} onClick={onClick}>More Images</button>
// }


