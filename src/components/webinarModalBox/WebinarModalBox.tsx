"use client";
import React from 'react'
import WebinarRegFormModal from '../webinarRegFormModal/WebinarRegFormModal';
/* import ThankYouWebinarRegModal from '../thankYouWebinarRegModal/ThankYouWebinarRegModal'; */

const WebinarModalBox = () => {
    //const [index, setIndex] = useState(1);
    return (
        <>
            {/* {index === 0 && (
                <WebinarRegFormModal />
            )} */}
            {/* {index === 0 && (
                <ThankYouWebinarRegModal onClose={onClose} />
            )} */}
            <WebinarRegFormModal />
            {/* <ThankYouWebinarRegModal /> */}
        </>
    )
}

export default WebinarModalBox;

