"use client"
import React from 'react'
import styles from './index.module.scss';
import StarSVG from '@/components/svgs/StarSVG';
import RightArrowSVG from '@/components/svgs/RightArrowSVG';
import FeeSVG from '@/components/svgs/FeeSVG';
import UserSVG from '@/components/svgs/UserSVG';
import PledgeSVG from '@/components/svgs/PledgeSVG'; import RetainQueryLink from '@/components/RetainQueryLink/RetainQueryLink';
;

function PartnerProgram({dictionary}: any) {
    const handleKnowMore = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement;
        const el = document.querySelector(`[data-section-table=${target.getAttribute("data-section-action")}]`) as HTMLDivElement;

        el.style.height = el.style.height === '0px' ? "337px" : '0px'
    }

    return (
        <section className={styles["dreamWithMaSec"]}>
            <div className={styles["maContainer"]}>
                <h2 className={styles["secTitle"]}>आपके बड़े सपनों को उड़ान दें,<span>Mirae Asset के साथ</span></h2>
                <p className={styles["captionTxt"]}> {dictionary["captionTxt"]} <span className={styles["orangeTxt"]}> {dictionary["captionTxt1"]}
                </span> {dictionary["captionTxt2"]} <span className={styles["orangeTxt"]}> {dictionary["captionTxt3"]}</span> {dictionary["captionTxt4"]} 
                <span className={styles["orangeTxt"]}> {dictionary["captionTxt5"]}</span> {dictionary["captionTxt6"]} 
                <a aria-label="Income Sharing for Authorised Partners" className={styles["orangeTxt"]} href="asset/pdf/income-sharing-for-authorised-partners.pdf" 
                target="_blank"> {dictionary["captionTxt7"]}</a>
                </p>
                <div className={`${styles["midheading-pl"]} `}>{dictionary["midheading-pl"]}</div>
                <div className={styles["opptUlist"]}>
                    <div className={styles["opptBox"]}>
                        <div className={styles["x-amount-block"]}>
                            <div className={`${styles["x-amount-left"]} `}>
                            {dictionary["x-amount-left"]}
                            </div>
                            <div className={`${styles["x-amount-right"]} ${styles["margiright75"]}`}>
                            {dictionary["margiright75"]} <b>{dictionary["margiright75_1"]}</b> {dictionary["margiright75_2"]}{dictionary["margiright75_3"]}
                            </div>
                        </div>
                        <div className={styles["x-amount-txt-containt"]}>
                            <div className={styles["x-amount-txt-ul"]}>
                                <ul>
                                    <li>
                                    {dictionary["x-amount-txt-ul"]} <br />
                                        <b>300</b>
                                    </li>
                                    <li>
                                    {dictionary["x-amount-txt-ul_1"]} <br />
                                        <b>₹12,000</b>
                                    </li>
                                    <li>
                                    {dictionary["x-amount-txt-ul_2"]}  <br />
                                        <b>₹36 lakh</b>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles["x-amount-industry-block"]}>
                                <div className={styles["x-amount-industry-block-1"]}>
                                {dictionary["x-amount-industry-block-1"]}
                                </div>
                                <div className={styles["x-amount-industry-block-2"]}>
                                    <span>{dictionary["x-amount-industry-block-2"]}</span> <br />
                                    <b>₹25.20 lakh <small>(70%)</small></b>
                                </div>
                                <div className={styles["x-amount-industry-block-vs"]}>
                                    <b>1.5X</b>
                                </div>
                                <div className={styles["x-amount-industry-block-3"]}>
                                    <span>Mirae Asset</span> <br />
                                    <b>₹36 lakh <small>(100%)</small></b>
                                </div>
                            </div >
                            <div className={styles["x-amount-unnique-benefit-block"]}>
                                <StarSVG />

                                <b className={styles["light-blue"]}>{dictionary["Unique_Benefit"]}</b> {dictionary["Unique_Benefit_1"]}
                            </div>
                        </div>
                    </div>
                    <div className={styles["opptBox"]}>
                        <div className={styles["x-amount-block"]}>
                            <div className={`${styles["x-amount-left"]} `}>
                                MTF {dictionary["MTF-amount-TITLE"]}
                            </div>
                            <div className={styles["knowmore-ribar"]} data-section-action="mtf" onClick={e => handleKnowMore(e)}>Know How ?</div>
                            <div className={styles["x-amount-right"]}>
                            {dictionary["x-amount-right"]} <b>{dictionary["x-amount-right_1"]}</b> {dictionary["x-amount-right_2"]}{dictionary["x-amount-right_3"]}
                            </div >
                        </div >
                        <div className={styles["x-amount-txt-containt"]}>
                            <div className={styles["x-amount-txt-ul"]}>
                                <ul>
                                    <li>
                                    {dictionary["MTF_active_clients"]} <br />
                                        <b>100</b>
                                    </li>
                                    <li>
                                    {dictionary["MTF_active_book"]} <br />
                                        <b>₹3 crore</b> <br />
                                        <small> {dictionary["MTF_active_book_line"]}</small>
                                    </li>
                                    <li>
                                    {dictionary["MTF_active_interest"]} <br />
                                        <b>18% p.a.</b>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles["tablebar-planB"]} data-section-table="mtf" style={{ height: '0px' }}>
                                <table cellPadding="0" cellSpacing="0" border={0} width="100%">
                                    <tbody><tr>
                                        <th >{dictionary["MTF_eMargin_details"]}</th>
                                        <th><span>{dictionary["MTF_eMargin_industry"]}</span></th>
                                        <th><span className={styles["orngText"]}>Mirae Asset Partners</span></th>
                                    </tr>
                                        <tr>
                                            <td >{dictionary["MTF_eMargin_industry_clients"]}</td>
                                            <td>100</td>
                                            <td>100</td>
                                        </tr>
                                        <tr>
                                            <td dangerouslySetInnerHTML={
                                       { __html: dictionary["MTF_eMargin_MTF_Book"]}
                                    }></td>
                                            <td>₹3 crore</td>
                                            <td>₹3 crore</td>
                                        </tr>
                                        <tr>
                                            <td >{dictionary["MTF_eMargin_avg_intrest_rate"]}</td>
                                            <td>18%</td>
                                            <td>18%</td>
                                        </tr>
                                        <tr>
                                            <td dangerouslySetInnerHTML={
                                       { __html: dictionary["MTF_eMargin_retain_broker"]}
                                    }></td>
                                            <td>12%</td>
                                            <td>9.99%</td>
                                        </tr>
                                        <tr>
                                            <td >{dictionary["MTF_eMargin_intrest_baserate"]}</td>
                                            <td>50%</td>
                                            <td>80%</td>
                                        </tr>
                                        <tr>
                                            <td >{dictionary["MTF_eMargin_intrest_payout"]}</td>
                                            <td>₹9 lakh (50%)</td>
                                            <td>₹19.22 lakh (80%)</td>
                                        </tr>
                                    </tbody></table>
                            </div>
                            <div className={styles["x-amount-industry-block"]}>
                                <div className={styles["x-amount-industry-block-1"]}>
                                {dictionary["MTF_eMargin_ann_intrest_payout"]}
                                </div>
                                <div className={styles["x-amount-industry-block-2"]}>
                                    <span> {dictionary["MTF_eMargin_industry"]}</span> <br />
                                    <b>₹9 lakh <small>(50%)</small></b>
                                </div>
                                <div className={styles["x-amount-industry-block-vs"]}>
                                    <b>2X</b>
                                </div>
                                <div className={styles["x-amount-industry-block-3"]}>
                                    <span>Mirae Asset</span> <br />
                                    <b>₹19.22 lakh <small>(80%)</small></b>
                                </div>
                            </div>
                            <div className={styles["x-amount-unnique-benefit-block"]} >
                                <StarSVG />
                                <span dangerouslySetInnerHTML={
                                       { __html: dictionary["MTF_eMargin_unique_benefit"]}
                                    }/>
                                
                            </div>
                        </div >
                    </div>
                    <div className={styles["opptBox"]}>
                        <div className={styles["x-amount-block"]}>
                            <div className={`${styles["x-amount-left"]} `}>
                                Margin Pledge Interest
                            </div>
                            <div className={styles["knowmore-ribar"]} data-section-action="margin-pledge-intrest" onClick={e => handleKnowMore(e)}>Know How ?</div>
                            <div className={styles["x-amount-right"]}>
                                Earn <b>1.5X</b> or more
                            </div >
                        </div >
                        <div className={styles["x-amount-txt-containt"]}>
                            <div className={styles["x-amount-txt-ul"]}>
                                <ul>
                                    <li>
                                        Margin Pledge active clients <br />
                                        <b>100</b>
                                    </li>
                                    <li>
                                        Margin Pledge book <br />
                                        <b>₹2 crore</b> <br />
                                        <small>(assuming ₹2 lakh per client)</small>
                                    </li>
                                    <li>
                                        Average interest rate <br />
                                        <b>18% p.a.</b>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles["tablebar-planB"]} data-section-table="margin-pledge-intrest" style={{ height: '0px' }}>
                                <table cellPadding="0" cellSpacing="0" border={0} width="100%">
                                    <tbody><tr>
                                        <th >Assumptions</th>
                                        <th><span>Industry</span></th>
                                        <th><span className={styles["orngText"]}>Mirae Asset Partners</span></th>
                                    </tr>
                                        <tr>
                                            <td >Margin Pledge active clients</td>
                                            <td>100</td>
                                            <td>100</td>
                                        </tr>
                                        <tr>
                                            <td >Total Margin Pledge Book <small>(assuming ₹2 lakh per client)</small></td>
                                            <td>₹2 crore</td>
                                            <td><b>₹2 crore</b></td>
                                        </tr>
                                        <tr>
                                            <td >Average interest rate</td>
                                            <td>18%</td>
                                            <td>18%</td>
                                        </tr>
                                        <tr>
                                            <td >Base rate <small>(retained by the broker)</small></td>
                                            <td>12%</td>
                                            <td>11.99%</td>
                                        </tr>
                                        <tr>
                                            <td >Interest sharing above base rate</td>
                                            <td>50%</td>
                                            <td>80%</td>
                                        </tr>
                                        <tr>
                                            <td ><b>Annual Margin Pledge interest payout</b></td>
                                            <td>₹6 lakh (50%)</td>
                                            <td>₹9.61 lakh (80%)</td>
                                        </tr>
                                    </tbody></table>
                            </div>
                            <div className={styles["x-amount-industry-block"]}>
                                <div className={styles["x-amount-industry-block-1"]}>
                                    Annual Interest Payout
                                </div>
                                <div className={styles["x-amount-industry-block-2"]}>
                                    <span>Industry</span> <br />
                                    <b>₹6 lakh <small>(50%)</small></b>
                                </div>
                                <div className={styles["x-amount-industry-block-vs"]}>
                                    <b>1.5X</b>
                                </div>
                                <div className={styles["x-amount-industry-block-3"]}>
                                    <span>Mirae Asset</span> <br />
                                    <b>₹9.61 lakh <small>(80%)</small></b>
                                </div>
                                <div className={styles["x-amount-unnique-benefit-block"]}>
                                    <StarSVG />

                                    <b className={styles["light-blue"]}>Unique Benefit:</b> Customise the Margin Pledge interest rate from < b className={styles["orangeTxt"]}> 11.99 %</b> to < b className={styles["orangeTxt"]}> 24 %.</b>
                                </div >
                            </div >
                        </div >
                    </div>
                    <div className={styles["opptBox"]}>
                        <div className={styles["x-amount-block"]}>
                            <div className={`${styles["x-amount-left"]} `}>
                                DP Sell Transaction Charges
                            </div>
                            <div className={styles["knowmore-ribar"]} data-section-action="dp-sell" onClick={e => handleKnowMore(e)}>Know How ?</div>
                            <div className={styles["x-amount-right"]}>
                                Earn <b>22X</b> or more
                            </div >
                        </div>
                        <div className={styles["x-amount-txt-containt"]}>
                            <div className={styles["x-amount-txt-ul"]}>
                                <ul>
                                    <li>
                                        No of scrips sold per day <br />
                                        <b>25</b>
                                    </li>
                                    <li>
                                        Charges <br />
                                        <b>₹12 - ₹25</b>
                                    </li>
                                    <li>
                                        Annual Charges <br />
                                        <b>₹72,000 - ₹1,50,000</b>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles["tablebar-planB"]} data-section-table="dp-sell" style={{ height: '0px' }}>
                                <table cellPadding="0" cellSpacing="0" border={0} width="100%">
                                    <tbody><tr>
                                        <th >&nbsp;</th>
                                        <th><span>Industry</span></th>
                                        <th><span className={styles["orngText"]}>Mirae Asset Partners</span></th>
                                    </tr>
                                        <tr>
                                            <td >No of scrips sold per day</td>
                                            <td>25</td>
                                            <td>25</td>
                                        </tr>
                                        <tr>
                                            <td >Average DP transaction charges</td>
                                            <td>₹12</td>
                                            <td>₹12</td>
                                        </tr>
                                        <tr>
                                            <td >Customised DP transaction charges</td>
                                            <td><b>NA</b></td>
                                            <td><b>₹25</b></td>
                                        </tr>
                                        <tr>
                                            <td >Annual DP transaction charges</td>
                                            <td>₹72,000</td>
                                            <td>₹1,50,000</td>
                                        </tr>
                                        <tr>
                                            <td >Payout rate</td>
                                            <td>5% (On Base)</td>
                                            <td>100% (Above Base)</td>
                                        </tr>
                                        <tr>
                                            <td >Annual Payout above base rate</td>
                                            <td>₹3,600</td>
                                            <td>₹78,000</td>
                                        </tr>
                                    </tbody></table>
                            </div>
                            <div className={styles["x-amount-industry-block"]}>
                                <div className={styles["x-amount-industry-block-1"]}>
                                    Annual Payout
                                </div>
                                <div className={styles["x-amount-industry-block-2"]}>
                                    <span>Industry</span> <br />
                                    <b>₹3,600 <small>(5%)</small></b>
                                </div>
                                <div className={styles["x-amount-industry-block-vs"]}>
                                    <b>22X</b>
                                </div>
                                <div className={styles["x-amount-industry-block-3"]}>
                                    <span>Mirae Asset</span> <br />
                                    <b>₹78,000 <small>(100%)</small></b>
                                </div>
                                <div className={styles["x-amount-unnique-benefit-block"]}>
                                    <StarSVG />

                                    <b className={styles["light-blue"]}>Unique Benefit:</b> Customise the DP sell transactions from < b className={styles["orangeTxt"]}>₹12</b> to < b className={styles["orangeTxt"]}>₹25.</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles["partner-offer-ac-block"]}>
                    <h3 className={`${styles["title"]} `}>That&apos;s not all, you can benefit from various other charges too</h3>
                    <div className={styles["partner-ul-block"]}>
                        <ul>
                            <li>
                                <span>
                                    <FeeSVG />
                                </span>
                                <p>
                                    <b>Account Opening Fee</b>
                                    Opportunity to charge up to ₹9,999<br /> Anything above ₹500 is <u className={styles["orangeTxt"]}>100% yours!</u>
                                </p>
                            </li>
                            <li>
                                <span>
                                    <UserSVG />
                                </span>
                                <p>
                                    <b>Account Maintenance Charges <i>(DP AMC)</i></b>
                                    Charge up to ₹4,999 - <u className={styles["orangeTxt"]}>Earn 100% </u>
                                </p>
                            </li>
                            <li>
                                <span>
                                    <PledgeSVG />
                                </span>
                                <p>
                                    <b>Pledge, unpledge charges <i>(MTF, Margin Pledge)</i></b>
                                    Choose from our standard plans – Earn 20% <br />Or customise and <u className={styles["orangeTxt"]}>Earn 100%</u>
                                </p>
                            </ li>
                        </ul>
                        <div className={styles["all-this-can-block"]}> <b>All this can<br /> become yours.</b><br /> <RetainQueryLink href="/pricing">See detailed revenue sharing plans <RightArrowSVG /> </RetainQueryLink>
                        </div>
                    </div >
                </div>


            </div >
        </section >
    )
}

export default PartnerProgram
