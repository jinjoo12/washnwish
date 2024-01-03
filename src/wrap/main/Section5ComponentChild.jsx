import React from "react";
import './scss/section5.scss';
import axios from "axios";

export default function Section5ComponentChild({title, instagramImg1, instagramImg2, instagramImg3}){

    const [ state, setState ] = React.useState({
        isBox1: true,
        isBox2: false,
        isBox3: false,
        isBtn: true,
    });

    const onClickOpenImg=()=>{
        if(state.isBox1===true){
            setState({
                ...state,
                isBox2: true
            })
        }
        if(state.isBox2===true){
            setState({
                ...state,
                isBox3: true,
                isBtn: false
            })
        }
        
    }

    
    return(
           
            <div className="container">
                <div className="title">
                    <h2>{title.titleMain}</h2>
                    <h3>
                        {title.titleSub1}<br/>
                        {title.titleSub2}
                    </h3>
                </div>
                <div className="content">
                    <ul className="box1">
                        {
                            state.isBox1 && (
                                instagramImg1.map((item, idx)=>{
                                    return (
                                        <li key={idx}>
                                            <div className="gap">
                                                <a href="!#">
                                                    <img src={`./images/intro/section5/${item.이미지}`} alt="" />
                                                </a>
                                            </div>
                                        </li>
                                    )
                                })
                            )
                        }
                    </ul>
                    <ul className="box2">
                        {
                            state.isBox2 && (
                                instagramImg2.map((item, idx)=>{
                                    return (
                                        <li key={idx}>
                                            <div className="gap">
                                                <a href="!#">
                                                    <img src={`./images/intro/section5/${item.이미지}`} alt="" />
                                                </a>
                                            </div>
                                        </li>
                                    )
                                })
                            )
                        }
                    </ul>
                    <ul className="box3">
                        {
                            state.isBox3 && (
                                instagramImg2.map((item, idx)=>{
                                    return (
                                        <li key={idx}>
                                            <div className="gap">
                                                <a href="!#">
                                                    <img src={`./images/intro/section5/${item.이미지}`} alt="" />
                                                </a>
                                            </div>
                                        </li>
                                    )
                                })
                            )
                        }
                    </ul>

                    {
                        state.isBtn && (
                            <div className="btn-box">
                                <button onClick={onClickOpenImg}>더보기</button>
                            </div>
                        )
                    }
                </div>
            </div>  
 
    )
}