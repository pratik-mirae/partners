import React from 'react'
import styles from './t2.module.scss'
export default function T2Month() {
    return (
        <>
        
        <section className={styles["in22MonthsSec"]}>
                <div className={styles["maContainer"]}>
            <h2 className={styles["secTitle"]}><span>In 22</span>months...</h2>


            <div className={styles["midHoriDivider"]}>
                <span className={styles["dot1"]}></span> 
                    <span className={styles["dot2"]}></span> 
                    
                </div>
                
            <ul className={styles["in-16-month-ul-block"]}>
                <li>
                    <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M52.5549 2.72849C51.9334 2.11038 51.1093 1.77043 50.2329 1.77043C50.2286 1.77043 50.2242 1.77043 50.2199 1.77043C49.3404 1.77378 48.5154 2.11948 47.8972 2.74393C47.8837 2.75753 47.8707 2.77159 47.858 2.786L44.3294 6.82484C43.3597 5.82945 42.0321 5.21525 40.5961 5.13539L37.0522 4.93823C36.2602 4.89409 35.6239 4.66247 34.9891 4.18725L32.1474 2.06025C30.1264 0.547568 27.4108 0.547683 25.3898 2.06025L22.5481 4.18725C21.9133 4.66247 21.277 4.89409 20.485 4.93823L16.9411 5.13539C14.4204 5.27563 12.3401 7.0212 11.7644 9.47915L10.9549 12.935C10.7739 13.7071 10.4354 14.2935 9.85714 14.8364L7.26898 17.2654C5.42834 18.993 4.9568 21.6675 6.09554 23.9204L7.69684 27.088C8.05464 27.796 8.17218 28.4629 8.07815 29.2504L7.65686 32.7748C7.35725 35.2814 8.71505 37.6332 11.0356 38.627L13.7046 39.77L8.24743 51.4914C8.03575 51.9461 8.09382 52.476 8.39885 52.8741C8.7041 53.2724 9.20088 53.4657 9.69489 53.3796L15.4277 52.378L18.3516 57.4099C18.5933 57.8256 19.0334 58.0775 19.5116 58.0775C19.532 58.0775 19.5524 58.0771 19.5729 58.076C20.0741 58.0532 20.5168 57.7566 20.7282 57.302L25.8823 46.2313L27.6709 45.6908C28.4299 45.4611 29.1072 45.4613 29.8664 45.6908L31.655 46.2313L36.809 57.3017C37.0205 57.7565 37.4633 58.0531 37.9651 58.0761C37.9855 58.0771 38.0059 58.0775 38.0263 58.0775C38.504 58.0775 38.9441 57.8256 39.1858 57.4099L42.1098 52.378L47.8422 53.3795C48.3368 53.4665 48.8333 53.2725 49.1386 52.8741C49.4437 52.476 49.5017 51.9461 49.29 51.4914L43.8328 39.77L46.5018 38.627C48.8224 37.6332 50.1802 35.2814 49.8806 32.7748L49.4593 29.2504C49.3653 28.4629 49.4828 27.796 49.8406 27.0881L51.4419 23.9204C52.5808 21.6674 52.1092 18.993 50.2685 17.2654L47.6803 14.8364C47.3278 14.5054 47.0649 14.1554 46.8719 13.7597C49.4208 10.8285 51.5865 8.37429 52.57 7.38166C53.8465 6.09334 53.8397 4.00587 52.5549 2.72849ZM19.4626 55.652L16.6991 50.8961C16.5051 50.5624 16.1242 50.3849 15.7433 50.4512L10.3248 51.398L15.3222 40.664C15.5665 40.8813 15.7831 41.1339 15.9805 41.4358L17.9232 44.4065C19.1664 46.307 21.3566 47.249 23.5434 46.887L19.4626 55.652ZM41.7942 50.4511C41.4135 50.3853 41.0325 50.5623 40.8385 50.896L38.0748 55.6518L33.994 46.8865C34.3032 46.9377 34.6124 46.9637 34.919 46.9637C36.7811 46.9636 38.5469 46.0381 39.6142 44.4062L41.557 41.4356C41.7544 41.1337 41.9709 40.8811 42.2152 40.6638L47.2126 51.3977L41.7942 50.4511ZM46.4186 16.1807L49.0068 18.6097C50.2649 19.7907 50.5749 21.5487 49.7965 23.0886L48.1952 26.2564C47.6779 27.2796 47.4926 28.3306 47.6287 29.4691L48.05 32.9935C48.2547 34.7068 47.3621 36.2528 45.776 36.9322L42.5131 38.3296C41.459 38.7812 40.6415 39.4671 40.0141 40.4265L38.0714 43.3971C37.1269 44.8412 35.4493 45.4515 33.7978 44.9526L30.4001 43.9257C29.3025 43.5942 28.2354 43.5942 27.1378 43.9257L23.7401 44.9526C22.0885 45.4515 20.4109 44.8412 19.4664 43.3971L17.5237 40.4265C16.896 39.4669 16.0785 38.7811 15.0245 38.3297L11.7616 36.9322C10.1754 36.2528 9.28281 34.7068 9.4877 32.9935L9.909 29.4691C10.0451 28.3306 9.85979 27.2796 9.3425 26.2562L7.74121 23.0886C6.9628 21.5487 7.27278 19.7907 8.53091 18.6097L11.1191 16.1807C11.9551 15.3959 12.4887 14.4718 12.7502 13.3554L13.5597 9.89953C13.9533 8.21953 15.3209 7.07202 17.0436 6.97615L20.5875 6.77898C21.7326 6.71526 22.7354 6.35031 23.6532 5.66317L26.4949 3.53617C27.8762 2.50229 29.6614 2.50206 31.0428 3.53617L33.8843 5.66317C34.8022 6.35031 35.8049 6.71526 36.95 6.77898L40.4939 6.97615C41.5325 7.03388 42.457 7.47822 43.1132 8.21699L39.0921 12.8196C36.2798 10.1996 32.6519 8.76735 28.7688 8.76735C20.4006 8.76735 13.5926 15.5754 13.5926 23.9436C13.5926 32.3119 20.4006 39.12 28.7688 39.12C37.137 39.12 43.9451 32.3119 43.9451 23.9436C43.9451 22.0119 43.5879 20.138 42.8848 18.3633C43.7982 17.3064 44.7127 16.2485 45.599 15.2259C45.83 15.5646 46.1007 15.8824 46.4186 16.1807ZM20.4549 24.4673L27.0378 31.0502C27.6603 31.6727 28.4881 32.0155 29.3687 32.0155C30.2494 32.0155 31.0772 31.6727 31.6997 31.0502C33.2246 29.5252 37.3359 24.7837 41.4983 19.9677C41.8983 21.2471 42.1012 22.5788 42.1012 23.9436C42.1012 31.2952 36.1203 37.2762 28.7687 37.2762C21.4171 37.2762 15.4362 31.2952 15.4362 23.9436C15.4362 16.592 21.4171 10.6111 28.7687 10.6111C32.1986 10.6111 35.402 11.8831 37.8782 14.2088L29.318 24.0069L25.1167 19.8054C23.8315 18.5203 21.7401 18.5203 20.4548 19.8055C19.8323 20.428 19.4895 21.2559 19.4895 22.1365C19.4895 23.0171 19.8323 23.8448 20.4549 24.4673ZM51.2603 6.08389C49.6855 7.6732 45.4694 12.5525 41.0056 17.7181C36.5701 22.8511 31.9835 28.1588 30.3958 29.7466C30.1216 30.0208 29.7569 30.1718 29.3686 30.1718C28.9805 30.1718 28.6157 30.0207 28.3414 29.7465L21.7585 23.1636C21.4843 22.8893 21.3332 22.5246 21.3332 22.1365C21.3332 21.7484 21.4843 21.3836 21.7585 21.1093C22.0418 20.8261 22.4138 20.6844 22.7859 20.6844C23.1578 20.6844 23.5299 20.8261 23.8131 21.1093L28.7117 26.008C28.8921 26.1885 29.1392 26.2859 29.3946 26.2774C29.6497 26.2689 29.8898 26.1549 30.0577 25.9627L44.985 8.87694C44.9867 8.87498 44.9884 8.87302 44.9901 8.87106L49.2252 4.0235C49.4944 3.76076 49.8491 3.61568 50.227 3.61418H50.2327C50.6185 3.61418 50.9813 3.76376 51.2549 4.03583C51.8201 4.59771 51.8225 5.51647 51.2603 6.08389Z" fill="#FF7518"/>
                        </svg> 
                    <span>
                        Earned trust of  <br/>
                        <b>9 Lakh+</b> customers
                    </span>
                </li>
                <li>
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_0_1104)">
                        <path d="M54.3077 8.38053H43.5668V4.85499C43.5668 4.36986 43.1737 3.97656 42.6884 3.97656C42.2032 3.97656 41.81 4.36986 41.81 4.85499V8.38053H38.1713C37.6861 8.38053 37.2929 8.77383 37.2929 9.25896C37.2929 9.74408 37.6861 10.1374 38.1713 10.1374H41.81V13.857H41.1507C40.2301 13.857 39.4811 14.606 39.4811 15.5265V25.8678C39.4811 26.7884 40.2301 27.5373 41.1507 27.5373H41.81V34.5063C41.81 34.9914 42.2032 35.3847 42.6884 35.3847C43.1737 35.3847 43.5668 34.9914 43.5668 34.5063V27.5373H44.2261C45.1466 27.5373 45.8956 26.7883 45.8956 25.8678V15.5265C45.8956 14.6059 45.1466 13.857 44.2261 13.857H43.5668V10.1374H54.3077C56.4184 10.1374 58.1357 11.8547 58.1357 13.9655V44.0305H1.86425V13.9656C1.86425 11.8548 3.58152 10.1375 5.69232 10.1375H21.0908V11.8518H20.4315C19.5109 11.8518 18.762 12.6008 18.762 13.5213V23.8626C18.762 24.7832 19.511 25.5321 20.4315 25.5321H21.0908V33.2943C21.0908 33.7794 21.4841 34.1727 21.9692 34.1727C22.4544 34.1727 22.8477 33.7794 22.8477 33.2943V25.5321H23.507C24.4275 25.5321 25.1764 24.7831 25.1764 23.8626V13.5213C25.1764 12.6007 24.4274 11.8518 23.507 11.8518H22.8477V10.1374H26.4863C26.9715 10.1374 27.3648 9.74408 27.3648 9.25896C27.3648 8.77383 26.9715 8.38053 26.4863 8.38053H22.8477V7.9467C22.8477 7.46158 22.4544 7.06828 21.9692 7.06828C21.4841 7.06828 21.0908 7.46158 21.0908 7.9467V8.38053H5.69232C2.61279 8.38053 0.107399 10.8859 0.107399 13.9655V44.9089C0.107399 47.9885 2.61279 50.4939 5.69232 50.4939H19.0642V54.9603L16.233 58.2444H15.1092C14.6241 58.2444 14.2308 58.6377 14.2308 59.1228C14.2308 59.608 14.6241 60.0013 15.1092 60.0013H44.8098C45.295 60.0013 45.6882 59.608 45.6882 59.1228C45.6882 58.6377 45.295 58.2444 44.8098 58.2444H43.7669L40.9357 54.9603V50.4939H54.3077C57.3872 50.4939 59.8926 47.9885 59.8926 44.9089V13.9656C59.8926 10.886 57.3872 8.38053 54.3077 8.38053ZM44.1388 25.7807H41.2381V15.614H44.1389V25.7807H44.1388ZM23.4196 23.7753H20.5188V13.6087H23.4196V23.7753ZM54.3077 48.737H36.5293C36.0441 48.737 35.6509 49.1303 35.6509 49.6154C35.6509 50.1006 36.0441 50.4939 36.5293 50.4939H39.1788V54.4083H36.9907C36.5055 54.4083 36.1123 54.8016 36.1123 55.2867C36.1123 55.7718 36.5055 56.1651 36.9907 56.1651H39.6547L41.4473 58.2444H18.5526L20.3452 56.1651H23.0092C23.4943 56.1651 23.8876 55.7718 23.8876 55.2867C23.8876 54.8016 23.4943 54.4083 23.0092 54.4083H20.8211V50.4939H32.7857C33.271 50.4939 33.6642 50.1006 33.6642 49.6154C33.6642 49.1303 33.271 48.737 32.7857 48.737H5.69232C3.88382 48.737 2.36531 47.4761 1.96709 45.7874H58.0328C57.6347 47.4761 56.1162 48.737 54.3077 48.737Z" fill="#FF7518"/>
                        <path d="M9.28075 25.6469C8.79562 25.6469 8.40232 26.0402 8.40232 26.5253V28.6459C8.40232 29.5665 9.15121 30.3154 10.0718 30.3154H10.7311V34.9934C10.7311 35.4786 11.1244 35.8719 11.6095 35.8719C12.0946 35.8719 12.4879 35.4786 12.4879 34.9934V30.3154H13.1472C14.0678 30.3154 14.8167 29.5665 14.8167 28.6459V18.3046C14.8167 17.384 14.0677 16.635 13.1472 16.635H12.4879V15.23C12.4879 14.7449 12.0946 14.3516 11.6095 14.3516C11.1244 14.3516 10.7311 14.7449 10.7311 15.23V16.635H10.0718C9.15121 16.635 8.40232 17.384 8.40232 18.3046V22.7818C8.40232 23.2669 8.79562 23.6602 9.28075 23.6602C9.76587 23.6602 10.1592 23.2669 10.1592 22.7818V18.392H11.6085H11.6096C11.6096 18.392 11.6103 18.392 11.6108 18.392H13.0601V28.5587H10.1592V26.5254C10.1592 26.0402 9.76587 25.6469 9.28075 25.6469Z" fill="#FF7518"/>
                        <path d="M30.7906 23.7926H31.45V28.4705C31.45 28.9557 31.8431 29.349 32.3284 29.349C32.8136 29.349 33.2068 28.9557 33.2068 28.4705V23.7926H33.8661C34.7866 23.7926 35.5356 23.0436 35.5356 22.123V15.233C35.5356 14.7479 35.1424 14.3546 34.6572 14.3546C34.1719 14.3546 33.7787 14.7479 33.7787 15.233V22.0358H30.8779V6.13002H33.7787V11.4895C33.7787 11.9746 34.1719 12.3679 34.6572 12.3679C35.1424 12.3679 35.5356 11.9746 35.5356 11.4895V6.04264C35.5356 5.12217 34.7866 4.37316 33.8661 4.37316H33.2068V0.878428C33.2068 0.393301 32.8136 0 32.3284 0C31.8431 0 31.45 0.393301 31.45 0.878428V4.37316H30.7906C29.87 4.37316 29.1211 5.12217 29.1211 6.04264V22.123C29.1211 23.0437 29.87 23.7926 30.7906 23.7926Z" fill="#FF7518"/>
                        <path d="M47.7577 24.082C47.9164 24.3764 48.2191 24.5437 48.5317 24.5437C48.6724 24.5437 48.8152 24.5097 48.9478 24.4383L52.9941 22.2566L52.703 23.0205C52.5303 23.4739 52.7579 23.9814 53.2112 24.1541C53.3142 24.1933 53.4198 24.2119 53.5238 24.2119C53.8777 24.2119 54.2114 23.9964 54.3449 23.6459L55.3339 21.0498C55.5066 20.5964 55.2791 20.0889 54.8257 19.9161L52.0701 18.8663C51.6168 18.6937 51.1092 18.9212 50.9365 19.3745C50.7637 19.8279 50.9913 20.3354 51.4447 20.5082L52.0836 20.7516L48.114 22.8919C47.687 23.1222 47.5275 23.655 47.7577 24.082Z" fill="#FF7518"/>
                        <path d="M5.30147 41.2444C5.44413 41.5778 5.76844 41.7775 6.10939 41.7775C6.22464 41.7775 6.34188 41.7546 6.45467 41.7064L17.7897 36.8552L18.8198 39.5541C18.91 39.7903 19.0975 39.9762 19.3344 40.0643C19.5712 40.1523 19.8348 40.1341 20.0573 40.014L38.7835 29.9174C39.2105 29.6871 39.3701 29.1543 39.1398 28.7273C38.9096 28.3004 38.377 28.1408 37.9497 28.371L20.1043 37.9927L19.1051 35.3747C19.0198 35.1513 18.8473 34.9723 18.6272 34.8791C18.4071 34.7858 18.1586 34.7863 17.9388 34.8803L5.76341 40.0911C5.31752 40.2821 5.11068 40.7984 5.30147 41.2444Z" fill="#FF7518"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_0_1104">
                        <rect width="60" height="60" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        <span>
                        Facilitated  <br/>
                        <b>₹37 Crore+</b> trades
                    </span>
                </li>
                <li>
                    <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.377 22.6367H21.8027C21.6131 22.6367 21.4313 22.712 21.2973 22.8461C21.1632 22.9802 21.0879 23.162 21.0879 23.3516V37.6484C21.0879 37.838 21.1632 38.0198 21.2973 38.1539C21.4313 38.288 21.6131 38.3633 21.8027 38.3633H25.377C25.5665 38.3633 25.7484 38.288 25.8824 38.1539C26.0165 38.0198 26.0918 37.838 26.0918 37.6484V23.3516C26.0918 23.162 26.0165 22.9802 25.8824 22.8461C25.7484 22.712 25.5665 22.6367 25.377 22.6367ZM24.6621 36.9336H22.5176V24.0664H24.6621V36.9336Z" fill="#FF7518"/>
                        <path d="M18.2285 29.7852H14.6543C14.4647 29.7852 14.2829 29.8605 14.1488 29.9945C14.0148 30.1286 13.9395 30.3104 13.9395 30.5V37.6484C13.9395 37.838 14.0148 38.0198 14.1488 38.1539C14.2829 38.288 14.4647 38.3633 14.6543 38.3633H18.2285C18.4181 38.3633 18.5999 38.288 18.734 38.1539C18.868 38.0198 18.9434 37.838 18.9434 37.6484V30.5C18.9434 30.3104 18.868 30.1286 18.734 29.9945C18.5999 29.8605 18.4181 29.7852 18.2285 29.7852ZM17.5137 36.9336H15.3691V31.2148H17.5137V36.9336Z" fill="#FF7518"/>
                        <path d="M33.2402 37.6484V28.1172C33.2402 27.9276 33.1649 27.7458 33.0309 27.6117C32.8968 27.4777 32.715 27.4023 32.5254 27.4023H28.9512C28.7616 27.4023 28.5798 27.4777 28.4457 27.6117C28.3116 27.7458 28.2363 27.9276 28.2363 28.1172V37.6484C28.2363 37.838 28.3116 38.0198 28.4457 38.1539C28.5798 38.288 28.7616 38.3633 28.9512 38.3633H32.5254C32.715 38.3633 32.8968 38.288 33.0309 38.1539C33.1649 38.0198 33.2402 37.838 33.2402 37.6484ZM31.8105 36.9336H29.666V28.832H31.8105V36.9336Z" fill="#FF7518"/>
                        <path d="M43.1289 34.7891C42.4095 34.7894 41.6916 34.8558 40.9844 34.9873V16.918C40.9844 16.8241 40.9659 16.7311 40.93 16.6444C40.8941 16.5577 40.8414 16.4788 40.775 16.4125L27.4313 3.06871C27.3649 3.00233 27.2861 2.94968 27.1994 2.91376C27.1126 2.87784 27.0197 2.85936 26.9258 2.85938H10.2461C9.17213 2.86057 8.14249 3.28774 7.38308 4.04714C6.62367 4.80655 6.19651 5.83619 6.19531 6.91016V46.9414C6.19651 48.0154 6.62367 49.045 7.38308 49.8044C8.14249 50.5638 9.17213 50.991 10.2461 50.9922H32.3667C33.1855 52.9386 34.5168 54.6265 36.2189 55.8763C37.921 57.126 39.9302 57.8907 42.0325 58.089C44.1348 58.2873 46.2515 57.9118 48.1573 57.0024C50.0631 56.093 51.6865 54.6838 52.8549 52.9248C54.0232 51.1658 54.6926 49.123 54.7919 47.0137C54.8911 44.9044 54.4165 42.8076 53.4185 40.9467C52.4205 39.0858 50.9366 37.5304 49.1246 36.446C47.3126 35.3617 45.2405 34.789 43.1289 34.7891ZM27.6406 5.29997L38.5438 16.2031H30.2617C29.5668 16.2023 28.9006 15.9259 28.4092 15.4346C27.9178 14.9432 27.6414 14.2769 27.6406 13.582V5.29997ZM10.2461 49.5625C9.55118 49.5617 8.88495 49.2853 8.39357 48.7939C7.90219 48.3025 7.62579 47.6363 7.625 46.9414V6.91016C7.62579 6.21524 7.90219 5.54901 8.39357 5.05763C8.88495 4.56625 9.55118 4.28985 10.2461 4.28906H26.2109V13.582C26.2121 14.656 26.6393 15.6856 27.3987 16.445C28.1581 17.2045 29.1878 17.6316 30.2617 17.6328H39.5547V35.3475C36.6888 36.2699 34.2897 38.2634 32.8581 40.9119C31.4265 43.5605 31.0729 46.6595 31.8711 49.5625H10.2461ZM43.1289 56.7109C41.1024 56.7109 39.1214 56.11 37.4365 54.9842C35.7515 53.8583 34.4382 52.2581 33.6627 50.3859C32.8872 48.5136 32.6843 46.4535 33.0797 44.4659C33.475 42.4784 34.4509 40.6527 35.8838 39.2198C37.3168 37.7868 39.1424 36.811 41.13 36.4156C43.1175 36.0203 45.1777 36.2232 47.0499 36.9987C48.9221 37.7742 50.5224 39.0875 51.6482 40.7724C52.7741 42.4574 53.375 44.4384 53.375 46.4648C53.3718 49.1813 52.2913 51.7856 50.3705 53.7064C48.4497 55.6273 45.8454 56.7078 43.1289 56.7109Z" fill="#FF7518"/>
                        <path d="M47.2988 41.3438C47.4884 41.3438 47.6702 41.2684 47.8043 41.1344C47.9384 41.0003 48.0137 40.8185 48.0137 40.6289C48.0137 40.4393 47.9384 40.2575 47.8043 40.1234C47.6702 39.9894 47.4884 39.9141 47.2988 39.9141H38.959C38.7694 39.9141 38.5876 39.9894 38.4535 40.1234C38.3195 40.2575 38.2441 40.4393 38.2441 40.6289C38.2441 40.8185 38.3195 41.0003 38.4535 41.1344C38.5876 41.2684 38.7694 41.3438 38.959 41.3438H41.3454C41.9777 41.3519 42.5902 41.5655 43.0905 41.9523C43.5908 42.3392 43.9516 42.8783 44.1185 43.4883H38.959C38.7694 43.4883 38.5876 43.5636 38.4535 43.6977C38.3195 43.8317 38.2441 44.0135 38.2441 44.2031C38.2441 44.3927 38.3195 44.5745 38.4535 44.7086C38.5876 44.8427 38.7694 44.918 38.959 44.918H44.1185C43.8001 46.2285 42.6776 47.0625 41.3454 47.0625H38.959C38.8143 47.0676 38.6742 47.115 38.5562 47.1989C38.4382 47.2829 38.3474 47.3996 38.2951 47.5347C38.2428 47.6697 38.2313 47.8171 38.2621 47.9587C38.2928 48.1002 38.3644 48.2296 38.468 48.3308L44.4327 53.9727C44.5005 54.0377 44.5804 54.0887 44.668 54.1227C44.7556 54.1567 44.849 54.1731 44.9429 54.1708C45.0368 54.1686 45.1293 54.1479 45.2152 54.1098C45.3011 54.0717 45.3786 54.017 45.4432 53.9488C45.5736 53.8068 45.6435 53.6196 45.6382 53.4269C45.6328 53.2341 45.5527 53.0511 45.4146 52.9165L40.7562 48.4922H41.3454C42.3591 48.4912 43.3398 48.1319 44.1142 47.4779C44.8887 46.8239 45.4071 45.9172 45.5778 44.918H47.2988C47.4884 44.918 47.6702 44.8427 47.8043 44.7086C47.9384 44.5745 48.0137 44.3927 48.0137 44.2031C48.0137 44.0135 47.9384 43.8317 47.8043 43.6977C47.6702 43.5636 47.4884 43.4883 47.2988 43.4883H45.5778C45.4456 42.6887 45.0857 41.9442 44.5413 41.3438H47.2988Z" fill="#FF7518"/>
                        </svg>
                        <span>
                        Built MTF book of <br/>
                        <b>₹1,000 Crore+ </b>
                    </span>
                </li>
            </ul>
            <div className={styles["midHoriDivider"]}>
                <span className={styles["dot1"]}></span> 
                <span className={styles["dot2"]}></span> 
            </div>
        </div>
    </section >
    </>

  )
}
