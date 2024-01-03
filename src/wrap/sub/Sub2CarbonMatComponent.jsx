import React, { useRef, useState } from 'react';
import './scss/sub2.scss'
import { MdAddShoppingCart } from "react-icons/md";
import Sub2Product from './Sub2/Sub2Product'
import Sub2Nav from './Sub2/Sub2Nav'
import Sub2Banner from './Sub2/Sub2Banner'
import axios from 'axios';
import { useSearchParams, useParams } from 'react-router-dom';

export default function Sub2CarbonMatComponent() {

    const [ state, setState ] = React.useState({
        product : []
    });
    
    React.useEffect(()=>{

        axios({
            url:'./data/sub/sub2_7_CarbonMat.json',
            method: 'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                product: res.data.product
            })
        })
        .catch((err)=>{
            console.log(err);
        })

    },[]);


    return (
        <div id="sub2">
            <div className="container">
                <Sub2Banner />
                <div className="content">
                    <Sub2Nav />
                    <Sub2Product product={state.product} />
                </div>
            </div>
            
        </div>
    );
}
