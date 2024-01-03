import React from "react";
import './scss/mainModal.scss';
import axios from "axios";
import { MdClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { mainModal } from "../reducer/mainModal";

export default function MainModalComponentChild({title, mainModaList}){

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);


    const onClickCloseBtn=(e)=>{
        e.preventDefault();
     
        dispatch(mainModal(false));
    }

    return(
        <div className="container">
            <div className="modal-box">
                <div className="title">
                    <a href="!#"><h2>{title}</h2></a>
                </div>
                <div className="banner">
                    <a href="!#"><img src={`./images/mainModal/${mainModaList.banner}`} alt="" /></a>
                </div>
                <div className="product-list">
                    <ul>
                        {
                            mainModaList.item.map((item, idx)=>{
                                return(
                                    <li key={idx} className={`list list${idx+1}`}>
                                        <a href="#!">
                                            <img src={`./images/mainModal/${item.이미지}`} alt="" />
                                            <span>{item.설명}</span>
                                        </a>
                                    </li>
                                )
                            })
                            
                        }
                    </ul>
                </div>
            </div>
            <div className="btn-box">
                <button onClick={onClickCloseBtn}>
                    <i><MdClose /></i>
                </button>
            </div>
        </div>  
    )
}