import React, { useRef, useState } from 'react';
import './scss/sub2.scss'
import { MdAddShoppingCart } from "react-icons/md";
import Sub2ComponentChild from './Sub2ComponentChild'
import axios from 'axios';

export default function Sub2Component() {

    const [ state, setState ] = React.useState({
        product : {
            titleMain:'',
            titleSub1:'',
            titleSub2:'',
            item: [],
        },
    });

    React.useEffect(()=>{

        axios({
            url:`./data/sub/sub2.json`,
            method: 'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                product : {
                    titleMain: res.data.product.titleMain,
                    titleSub1: res.data.product.titleSub1,
                    titleSub2: res.data.product.titleSub2,
                    item: res.data.product.item
                },
            })
        })
        .catch((err)=>{
            console.log(err);
        })

    },[]);


    return (
        <div id="sub2">
            <Sub2ComponentChild product={state.product} />
        </div>
    );
}
