import React, { useRef, useState } from 'react';
import { MdAddShoppingCart } from "react-icons/md";
import { BsGift } from "react-icons/bs";

export default function Sub2Product({product}) {
    
    const [state, setState] = React.useState({
        pageListNum: 12,
        page: 1,
        totalPage: 0,
        pageNum: []
    })

    React.useEffect(()=>{
        
        if(product.length > 0){
            setState({
                ...state,
                totalPage: Math.ceil(product.length/state.pageListNum)
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

    const onClickPage=(e, num)=>{
        e.preventDefault();
        setState({
            ...state,
            page: num
        })
    }


    return (
        <div className="product">
            <ul className="product-box">
            {
                product.length > 0 && (
                    product.map((item, idx)=>{
                        if(Math.ceil((idx+1)/state.pageListNum)===state.page){
                            return (
                                <li className={`item${idx}`} key={idx}>
                                    <div className="gap">
                                        <div className="img-box">
                                            <a href="!#">
                                                <img className="main-img" src={`./images/sub/sub2/${item.이미지MAIN}`} alt="" />
                                                <img className="sub-img" src={`./images/sub/sub2/${item.이미지SUB}`} alt="" />
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
            {
                product.length === 0 &&
                (
                    <div className="product-none">
                        <i><BsGift /></i>
                        <p>해당 카테고리에 상품이 없습니다.</p>
                    </div>
                )
            }
            {
                state.pageNum.length !== 0 && (
                    <div className="page">
                        <a href="!#" onClick={onClickPrevPage}><i className='icon-arrow-left'></i></a>
                        {
                                state.pageNum.map((item,idx)=>{
                                    return(
                                        <a href="!#" key={idx} onClick={(e)=>onClickPage(e,item)}><span className={`${item===state.page?'on':''}`}>{item}</span></a>
                                    )
                                })
                        }
                        
                        <a href="!#" onClick={onClickNextPage}><i className='icon-arrow-right'></i></a>
                    </div>
                )
            }
        </div>
    );
}
