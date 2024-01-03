import React, { useRef, useState } from 'react';
import './scss/section2.scss'
import { MdAddShoppingCart } from "react-icons/md";

export default function Section2ComponentChild({product}) {
    
    const [state, setState] = React.useState({
        pageListNum: 12,
        page: 1,
        totalPage: 0,
        pageNum: []
    })

    React.useEffect(()=>{
        
        if(product.item.length > 0){
            setState({
                ...state,
                totalPage: Math.ceil(product.item.length/state.pageListNum)
            })
        }
    },[product]);

    React.useEffect(()=>{
        if(state.totalPage > 0){
            let pageNum = [];

            for(let i=1; i<=state.totalPage; i++){
                pageNum = [...pageNum, i];
            }

            setState({
                ...state,
                pageNum: pageNum
            })
        }
    },[state.totalPage]);

    const onClickPrevPage=(e)=>{
        e.preventDefault();

        let page = state.page;
        if(page<=1){
            page = 1
        }
        else {
            page-=1
        }
        setState({
            ...state,
            page: page
        })
        
    }
    const onClickNextPage=(e)=>{
        e.preventDefault();

        let page = state.page;
        if(page>=state.totalPage){
            page = state.totalPage
            
        }
        else {
            page+=1
        }
        setState({
            ...state,
            page: page
        })
    }


    return (
        
        <div className="container">
            <div className="title">
                <h2>{product.title}</h2>
            </div>
            <div className="content">
                <ul className="product-box">
                {
                        product.item.length > 0 && (
                            product.item.map((item, idx)=>{
                                if(Math.ceil((idx+1)/state.pageListNum)===state.page){
                                    return (
                                        <li className={`item${idx}`} key={idx}>
                                            <div className="gap">
                                                <div className="img-box">
                                                    <a href="!#">
                                                        <img className="main-img" src={`./images/intro/section2/${item.이미지MAIN}`} alt="" />
                                                        <img className="sub-img" src={`./images/intro/section2/${item.이미지SUB}`} alt="" />
                                                    </a>
                                                </div>
                                                <div className="info-box">
                                                    <a href="!#">
                                                        <h3>{item.상품명}</h3>
                                                    </a>
                                                    <span className='price'>
                                                        <strong>{(item.할인가격).toLocaleString('ko-KR') }원</strong>
                                                        {
                                                            item.정가 !== 0 &&
                                                                <p>{(item.정가).toLocaleString('ko-KR')}원</p>
                                                        }
                                                    </span>
                                                    <div className="sticker">
                                                        {
                                                            item.SALE스티커 && (
                                                                <i className='sale'>SALE</i>
                                                            )
                                                        }
                                                        {
                                                            item.MD스티커 && (
                                                                <i className='md'>MD</i>
                                                            )
                                                        }
                                                        {
                                                            item.BEST스티커 && (
                                                                <i className='best'>BEST</i>
                                                            )
                                                        }
                                                        {
                                                            item.HOT스티커 && (
                                                                <i className='hot'>HOT</i>
                                                            )
                                                        }
                                                    </div>
                                                    <span className='cart'>
                                                        <MdAddShoppingCart />
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                }
                            })
                    )
                }
                
                </ul>
                <div className="page">
                    <a href="!#" onClick={onClickPrevPage}><i className='icon-arrow-left'></i></a>
                    {
                            state.pageNum.map((item,idx)=>{
                                return(
                                    <a href="!#" key={idx}><span className='on'>{item}</span></a>
                                )
                            })
                    }
                    
                    <a href="!#" onClick={onClickNextPage}><i className='icon-arrow-right'></i></a>
                </div>
            </div>
        </div>
    );
}
