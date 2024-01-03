import React, { useRef, useState } from 'react';
import { MdAddShoppingCart } from "react-icons/md";

export default function Sub2ComponentChild({product}) {
    
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
                    <h3>{product.titleMain}</h3>
                    <p>
                    {product.titleSub1}<br/>
                    {product.titleSub2}
                    </p>
                </div>
                <div className="content">
                    <nav>
                        <ul>
                            <li><a href="!#">ALL</a></li>
                            <li><a href="!#">ALL</a></li>
                            <li><a href="!#">ALL</a></li>
                            <li><a href="!#">ALL</a></li>
                            <li><a href="!#">ALL</a></li>
                            <li><a href="!#">ALL</a></li>
                            <li><a href="!#">ALL</a></li>
                            <li><a href="!#">ALL</a></li>
                        </ul>
                    </nav>
                    <div className="product-box">
                        
                    </div>
                </div>
            </div>
    );
}
