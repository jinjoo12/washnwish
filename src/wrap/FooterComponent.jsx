import React from 'react';
import './scss/Footer.scss'
import { useSelector, useDispatch } from "react-redux";
import { footerTermsModal } from '../reducer/footerTermsModal';
import { footerPersonalInfoModal } from '../reducer/footerPersonalInfoModal';

export default function FooterComponent(){

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);
    
    const onClickTerms=(e)=>{
        e.preventDefault();

        dispatch(footerTermsModal(true));          
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.add('on');
    }
    const onClickPersonalInfo=(e)=>{
        e.preventDefault();

        dispatch(footerPersonalInfoModal(true));          
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.add('on');
    }

    return (
        <footer id="footer">
           <div className="container">
                <div className="top">
                    <ul>
                        <li><strong>회사명 </strong><p>전진바이오팜(주)</p><strong>대표명</strong><p>이태훈</p></li>
                        <li><strong>사업자등록번호 </strong><p>505-81-39862 [사업자정보확인]</p></li>
                        <li><strong>통신판매신고번호 </strong><p>제 2012-대구달서-0417호</p></li>
                        <li><strong>주소 </strong><p>대구광역시 달서구 성서공단북로 295(갈산동)</p></li>
                        <li><strong>입금계좌정보 </strong><p>KDB산업은행 022-3600-4876-770  전진바이오팜(주)</p></li>
                        <li><strong>고객센터 </strong><p>02-6219-6219</p></li>
                    </ul>
                </div>
                <div className="mid">
                    <i><img src="./images/intro/footer/184388c91e9cd.png" alt="" /></i>
                </div>
                <div className="bottom">
                    <ul>
                        <li><a href="!#" onClick={onClickTerms}>이용약관</a></li>
                        <li><a href="!#" onClick={onClickPersonalInfo}><strong>개인정보처리방침</strong></a></li>
                        <li><a href="!#">새로운메뉴</a></li>
                    </ul>
                    <p>Copyright ⓒ 2023 WASH&WISH 워시앤위시 All rights reserved.</p>
                </div>
           </div>
        </footer>
    )
}