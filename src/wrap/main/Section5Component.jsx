import React from "react";
import './scss/section5.scss';
import axios from "axios";
import Section5ComponentChild from './Section5ComponentChild';

export default function Section5Component(){

    const [ state, setState ] = React.useState({
        title:{},
        instagramImg1:[],
        instagramImg2:[],
        instagramImg3:[],
    });

    React.useEffect(()=>{

        axios({
            url:`./data/intro/section5.json`,
            method: 'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                title: res.data.title,
                instagramImg1: res.data.instagramImg1,
                instagramImg2: res.data.instagramImg2,
                instagramImg3: res.data.instagramImg3,
            })
        })
        .catch((err)=>{
            
        })

    },[]);
    
    return(
        <section id="section5">            
            <Section5ComponentChild title={state.title} instagramImg1={state.instagramImg1}  instagramImg2={state.instagramImg2} instagramImg3={state.instagramImg3} /> 
        </section>
    )
}