import React from "react";
import './scss/cs-center.scss';
import axios from "axios";

export default function SubCSCenterComponent(){
    
    // 상태관리변수
    const [state, setState] = React.useState({
        문의사항: []
    });
    
    // AXIOS
    React.useEffect(()=>{
        axios({
            url: './data/sub/notice.json',
            method: 'GET'
        })
        .then((res)=>{
            console.log(res.data);
            if(res.status===200){
                setState({
                    ...state,
                    문의사항: res.data.문의
                });
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    return (
        <div id="cs-center">
            <div id="section">
                <div className="container">
                    <div className="title">
                        <h1>안녕하세요 워시앤위시입니다.</h1>
                        <h2>CS CENTER</h2>
                    </div>
                    <div className="content">
                        <div className="header">
                            <div className="txt">
                                <span>워시앤위시 문의게시판</span>
                                <em>10</em>
                            </div>
                            <div className="search-box">
                                <input type="text" name="search" id="search" placeholder="Search"/>
                                <i className="icon-magnifier"></i>
                            </div>
                        </div>
                        <ul className="board">
                            <li className="col col1">No</li>
                            <li className="col col2">제목</li>
                            <li className="col col3">글쓴이</li>
                            <li className="col col4">작성시간</li>
                            <li className="col col5">좋아요</li>
                        </ul>
                        <ul className="board board-list">
                        {
                        state.문의사항.length > 0 && (
                            state.문의사항.map((item, idx)=>{
                                return(
                                    <li key={idx}>
                                        <ul>
                                            <li className='col col1'>{item.번호}</li>
                                            <li className='col col2'>{item.제목}</li>
                                            <li className='col col3'>{item.글쓴이}</li>
                                            <li className='col col4'>{`${new Date(item.작성일).getFullYear()}-${(new Date(item.작성일).getMonth()+1)<10? '0'+(new Date(item.작성일).getMonth()+1) : (new Date(item.작성일).getMonth()+1)}-${new Date(item.작성일).getDate()<10? '0'+new Date(item.작성일).getDate() : new Date(item.작성일).getDate()}`}</li>
                                            <li className='col col5'>{item.좋아요}</li>
                                        </ul>  
                                    </li>
                                    )
                                })
                            )
                        }   
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}