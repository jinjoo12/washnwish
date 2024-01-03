import React from "react";
import './scss/section4.scss';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { section4Modal } from "../../reducer/section4Modal";

export default function Section4Component(){
    
    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const [ state, setState ] = React.useState({
        playBtn: false,
    });

    const onMouseEnterBtnColor=()=>{
        setState({
            playBtn: true
        })
    }
    const onMouseLeaveBtnColor=()=>{
        setState({
            playBtn: false
        })
    }

    const onClickOpenBtn=(e)=>{
        e.preventDefault();
     
        dispatch(section4Modal(true));          
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.add('on');
    }
    
    return(
        <section id="section4">            
            <div className="container">
                <div className="content">
                    <div className="bg-box">
                        <div className="img-box">
                            <a href="!#" onClick={onClickOpenBtn} onMouseEnter={onMouseEnterBtnColor} onMouseLeave={onMouseLeaveBtnColor}>
                                <img src="./images/intro/section4/195454168d7a8.jpg" alt="" />
                                <div className="btn-box">
                                    <button className={`play-btn ${state.playBtn ? ' on' : ''}`}></button>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>  
        </section>
    )
}