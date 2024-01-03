import React from "react";
import './scss/section6.scss';
import axios from "axios";

export default function Section6Component(){

    
    return(
        <section id="section6">            
           <div className="container">
                <div className="top">
                    <div className="contact-us">
                        <p>CONTACT US</p>
                        <span>
                            <strong>워시앤위시</strong><h2>와</h2>
                        </span>
                        <span><h2>함께 해요!</h2></span>
                    </div>
                    <div className="box">
                        <ul>
                            <li><strong>사입/입점 문의</strong><em>[Buying / Contact]</em></li>
                            <li><strong>마케팅 제휴 문의</strong><em>[Partnership]</em></li>
                            <li><strong>해외 수출 문의</strong><em>[Export]</em></li>
                        </ul>
                    </div>
                </div>
                <div className="mid">
                    <div className="box-info">
                        <span className="top-info">
                            <strong>문의처</strong>
                            <em>info@jjbio.co.kr</em>
                        </span>
                        <span className="bottom-info">
                            <strong>* 메일 발송시 기재사항</strong>
                            <p>1. 제안 희망 상품명 2. 회사명 및 간단한 소개 3. 담당자 연락처 4. 참고자료 및 요청사항</p>
                        </span>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left-cs-center">
                        <strong>CS CENTER</strong>
                        <h3>02.6219.6219</h3>
                    </div>
                    <div className="right-cs-time">
                        <span><strong>Mon - Fri</strong><h3>10:00 ~ 17:00</h3></span>
                        <span><strong>Lunch</strong><h3>12:00 ~ 13:00</h3></span>
                    </div>
                </div>
           </div>
        </section>
    )
}