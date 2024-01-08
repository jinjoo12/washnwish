import React from 'react';
import './scss/signIn.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {signIn} from '../../reducer/signIn';

export default function SubSignInComponent(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [state, setState] = React.useState({
        이메일:'',
        비밀번호:''
    });


    const onChangeEmail=(e)=>{
        setState({
            ...state,
            이메일:e.target.value
        });
    }


    const onChangePw=(e)=>{
        setState({
            ...state,
            비밀번호:e.target.value
        });
    }


    const onSubmitSignIn=(e)=>{
        e.preventDefault();

        const formData = new FormData();
        formData.append('userEmail', state.이메일);
        formData.append('userPw', state.비밀번호);

        axios({
            url:'http://ljj4771.dothome.co.kr/washnwish/washnwish_signIn.php',
            method:'POST',
            data:formData
        })
        .then((res)=>{
            if(res.status===200){
                if(res.data!==''){
                    let 회원정보 = {
                        구분:'회원'
                    }
    
                    localStorage.setItem('signIn', JSON.stringify(회원정보));
    
                    dispatch(signIn(회원정보));
                    navigate('/index');
                }
                
            }
        })
        .catch(()=>{

        })

    }

    return (
        <div id='signIn'>
            <div className="container">
                <form onSubmit={onSubmitSignIn}>
                    <div className="main-img">
                        <img src="./images/sub/subSignIn/fb47d212a9821.jpg" alt="" />
                    </div>
                    <div className="id-pw-box">
                        <input type="text" id='userEmail' name='userEmail' placeholder='이메일' onChange={onChangeEmail} value={state.이메일} />
                        <input type="text" id='userPw' name='userPw' placeholder='비밀번호' onChange={onChangePw} value={state.비밀번호}/>
                    </div>
                    <div className="signin-btn">
                        <button>로그인</button>
                    </div>
                    <div className="link-menu">
                        <Link to="/signUp">회원가입</Link>
                        <a href="!#">아이디 · 비밀번호 찾기</a>
                    </div>
                </form>
            </div>
        </div>
    );
};
