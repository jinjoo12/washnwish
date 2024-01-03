import React from "react";
import './scss/section3.scss';
import axios from "axios";

export default function Section3Component(){
    
    return(
        <section id="section3">            
            <div className="container">
                <div className="title">
                    <h2>REAL REVIEW</h2>
                    <h3>고객님들의 소중한 실제 사용후기입니다</h3>
                </div>
                <div className="content">
                    <div className="review-box">
                        <img src="./images/intro/section3/138e21bb44920.jpg" alt="" />
                    </div>
                </div>
            </div>  
        </section>
    )
}