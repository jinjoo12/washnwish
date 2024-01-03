import React from "react";
import './scss/mainModal.scss';
import axios from "axios";
import { MdClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";


import MainModalComponentChild from './MainModalComponentChild'

export default function MainModalComponent(){

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const [state, setState] = React.useState({
        title : "",
        mainModaList : {
            banner:'',
            item: [],
        },
    });

    React.useEffect(()=>{

        axios({
            url:'./data/intro/mainModal.json',
            method:'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                title: res.data.title,
                mainModaList:  res.data.mainModaList,
            })
        })
        .catch((err)=>{
           
        });
      
    },[]);


    return(
        <div id="main-modal">
             <MainModalComponentChild title={state.title} mainModaList={state.mainModaList}/>
        </div>
    )
}