import React from "react";
import './scss/SearchModal.scss';
import axios from "axios";
import { MdClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { searchModal } from "../reducer/searchModal";

export default function SearchModalComponent(){

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const onClickCloseBtn=(e)=>{
        e.preventDefault();
     
        dispatch(searchModal(false));          
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.remove('on');
    }

    return(
        <div id="search-modal">            
            <div className="container">
                <div className="content">
                    <div className="input-box">
                        <input type="text" id="search" name="search" placeholder="검색" autoComplete="off" />
                        <i className="icon-magnifier"></i>
                    </div>
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