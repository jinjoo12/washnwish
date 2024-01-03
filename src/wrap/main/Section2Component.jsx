import React, { useRef, useState } from 'react';
import './scss/section2.scss'
import { MdAddShoppingCart } from "react-icons/md";
import Section2ComponentChild from './Section2ComponentChild'
import axios from 'axios';

export default function Section2Component() {

    const [ state, setState ] = React.useState({
        product : {
            title:'',
            item: [],
        },
    });

    React.useEffect(()=>{

        axios({
            url:`./data/intro/section2.json`,
            method: 'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                product : {
                    title: res.data.product.title,
                    item: res.data.product.item
                },
            })
        })
        .catch((err)=>{
            console.log(err);
        })

    },[]);


    return (
        <section id='section2'>
            <Section2ComponentChild product={state.product} />
        </section>
    );
}
