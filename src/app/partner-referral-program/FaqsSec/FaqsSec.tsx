"use client";
import React, { useState } from 'react';
import styles from "./FaqsSec.module.scss";
import accordionData from './accordionData.js';
import DownCaretSVG from '@/components/svgs/DownCaretSVG';
import { nunito } from '@/styles/fonts';
import Accordian from '@/components/Accordian/Accordian';

const FaqsSec = () => {
    const [expanded, setExpanded] = useState<number | null>(0);
    const [showMore, setShowMore] = useState(false);

    return (
        <>
            <section className={`${styles.faqsSec}`}>
                <div className={`${styles.maContainer}`}>
                    <h2 className={`${styles.secTitle} ${nunito.className}`}>Refer and Earn - Frequently Asked Questions</h2>
                    <Accordian items={accordionData.slice(0, showMore ? accordionData.length : 6)} active={expanded} setActive={setExpanded} />
                    {/* <div className={`${styles.viewAllBtnWrap}`}>
                        <button className={`${styles.viewAllBtn}`} onClick={() => {
                            setShowMore(!showMore)
                        }} >View {showMore ? "Less" : "All"} <div style={{
                            display: 'inline-block',
                            ...(showMore && { transform: 'rotate(180deg)' })
                        }}><DownCaretSVG /></div> </button>
                    </div> */}
                    <div className={`${styles.tcFaqendLine}`}>
                        <sup>*</sup>&nbsp;Click here to view detailed <a href="/referral-terms-and-conditions#partnerReferralTC">Terms and Conditions</a>
                    </div>

                </div>
            </section>
        </>
    )
}

export default FaqsSec;