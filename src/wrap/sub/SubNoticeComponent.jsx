import React from "react";
import './scss/notice.scss';

export default function SubNoticeComponent(){
    return (
        <div id="notice">
            <div id="section">
                <div className="container">
                    <div className="title">
                        <div className="header">
                            <span>NOTICE</span>
                            <em>3</em>
                        </div>
                        <div className="search-box">
                            <input type="text" name="search" id="search" placeholder="Search"/>
                            <i className="icon-magnifier"></i>
                        </div>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <div className="img-box">
                                    <img src="./images/sub/notice/04548e4a34142.jpg" alt="" />
                                </div>
                                <div className="caption">
                                    <span>워시앤위시 사업/제휴/수출 문의</span>
                                </div>
                            </li>
                            <li>
                                <div className="img-box">
                                    <img src="./images/sub/notice/6c06ed4ff6aa7.jpg" alt="" />
                                </div>
                                <div className="caption">
                                    <span>워시앤위시 교환 및 반품 안내</span>
                                </div>
                            </li>
                            <li>
                                <div className="img-box">
                                    <img src="./images/sub/notice/366283c1f3b34.jpg" alt="" />
                                </div>
                                <div className="caption">
                                    <span>[23.01.05 리뉴얼]워시앤위시 회원정책</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}