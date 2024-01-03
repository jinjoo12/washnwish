import React from "react";
import './scss/section4Modal.scss';
import axios from "axios";
import { MdClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { section4Modal } from "../reducer/section4Modal";

export default function MainSection4ModalComponent(){

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const onClickCloseBtn=(e)=>{
        e.preventDefault();
     
        dispatch(section4Modal(false));          
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.remove('on');
    }

    return(
        <div id="section4Modal">            
            <div className="container">
                <div className="content">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/tudn9SqtfaE?si=YOymhtisQJGOoXYi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
                <div className="btn-box">
                    <button onClick={onClickCloseBtn}>
                        <i><MdClose /></i>
                    </button>
                </div>
            </div>  
        </div>
    )
}