import React from "react";
import './scss/section1.scss';
import axios from "axios";
import Section1ComponentChild from './Section1ComponentChild';


export default function Section1Component(){

    const [state, setState] = React.useState({
        slide: [],
        n: 0
    });

    React.useEffect(()=>{

        axios({
            url:'./data/intro/section1.json',
            method:'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                slide:  res.data.slide,
                n: res.data.slide.length
            })
        })
        .catch((err)=>{
           
        });
      
    },[]);

    
    return(
        <section id="section1">            
            <Section1ComponentChild slide={state.slide} n={state.n} />            
        </section>
    )
}