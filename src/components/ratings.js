import buttonstyle from '@/styles/Buttons.module.css'
import Image from 'next/image'



export default function RatingButton() {
    return (
        <>
            <button className={buttonstyle.ratingbutton}><Image src='/images/thumbsup.png' width={30} height={30} alt='Like Button' /></button>
            <br></br>
            <button className={buttonstyle.ratingbutton}><Image src='/images/thumbsdown.png' width={30} height={30} alt='Like Button' /></button>
        </>
    )
}