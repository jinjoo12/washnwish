import React from 'react';
import './scss/signUp2.scss';
import axios from 'axios';

export default function SubSignUpComponentChild(){

    const [state, setState] = React.useState({
        이메일:'',
        비밀번호:'',
        비밀번호확인:'',
        이름:'',
        성별:'',
        연락처:'',
        주소:'',
        상세주소:''
    })


    const onChangeEmail=(e)=>{
        let 이메일 = e.target.value;
        setState({
            ...state,
            이메일:이메일
        });
    }
    const onChangePw=(e)=>{
        let 비밀번호 = e.target.value;
        setState({
            ...state,
            비밀번호:비밀번호
        });
    }
    const onChangePwChk=(e)=>{
        let 비밀번호확인 = e.target.value;
        setState({
            ...state,
            비밀번호확인:비밀번호확인
        });
    }
    const onChangeName=(e)=>{
        let 이름 = e.target.value;
        setState({
            ...state,
            이름:이름
        });
    }
    const onChangeGender=(e)=>{
        let 성별 = e.target.value;
        setState({
            ...state,
            성별:성별
        });
    }
    const onChangeHp=(e)=>{
        let 연락처 = e.target.value;
        setState({
            ...state,
            연락처:연락처
        });
    }
    const onChangeAddr1=(e)=>{
        let 주소 = e.target.value;
        setState({
            ...state,
            주소:주소
        });
    }
    const onChangeAddr2=(e)=>{
        let 상세주소 = e.target.value;
        setState({
            ...state,
            상세주소:상세주소
        });
    }
    const onChangeYear=(e)=>{
        let 년 = e.target.value;
        setState({
            ...state,
            년:년
        });
    }
    const onChangeMonth=(e)=>{
        let 월 = e.target.value;
        setState({
            ...state,
            월:월
        });
    }
    const onChangeDate=(e)=>{
        let 일 = e.target.value;
        setState({
            ...state,
            일:일
        });
    }



    const onSubmitJoin=(e)=>{
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('userEmail', state.이메일);
        formData.append('userPw', state.비밀번호);
        formData.append('userPwChk', state.비밀번호확인);
        formData.append('userName', state.이름);
        formData.append('userGender', state.성별);
        formData.append('userHp', state.연락처);
        formData.append('userAddr', `${state.주소} ${state.상세주소}`);
        formData.append('userBirth', `${state.년}-${state.월}-${state.일}`);

        

        axios({
            url:'http://ljj4771.dothome.co.kr/washnwish/washnwish_insert.php',
            method: 'POST',
            data:formData
        })
        .then((res)=>{
            console.log(res.data);
            if(res.status===200){
                console.log(res.data);
            }
        })
        .catch((err)=>{

        })

    }
    


    return (
        <div id='signUp2'>
            <div className="container">
                <h2>회원가입</h2>
                <form onSubmit={onSubmitJoin}>
                    <div className="txt-box email-pw">
                        <input type="text" name='userEmail' id='userEmail' placeholder='이메일' value={state.이메일} onChange={onChangeEmail} />
                        <input type="text" name='userPw' id='userPw' placeholder='비밀번호' value={state.비밀번호} onChange={onChangePw}  />
                        <input type="text" name='userPwChk' id='userPwChk' placeholder='비밀번호 확인' value={state.비밀번호확인} onChange={onChangePwChk}/>
                    </div>
                    <div className="txt-box name">
                        <h3>이름</h3>
                        <input type="text" name='userName' id='userName' placeholder='이름을 입력하세요' value={state.이름} onChange={onChangeName}/>
                    </div>
                    <div className="txt-box gender">
                        <h3>성별</h3>
                        <input type="radio" name='userGender' id='userMale' value={'남자'} onChange={onChangeGender} checked={state.성별.includes('남자')}/> 남자
                        <input type="radio" name='userGender' id='userFeMale' value={'여자'} checked={state.성별.includes('여자')}/> 여자
                    </div>
                    <div className="txt-box hp">
                        <h3>연락처</h3>
                        <input type="text" name='userHp' id='userHp' placeholder='연락처' value={state.연락처} onChange={onChangeHp} />
                    </div>
                    <div className="txt-box adress">
                        <h3>주소</h3>
                        <input type="text" name='userAddr' id='userAddr1' placeholder='주소' value={state.주소} onChange={onChangeAddr1} />
                        <input type="text" name='userAddr' id='userAddr2' placeholder='상세주소' value={state.상세주소} onChange={onChangeAddr2}  />
                    </div>
                    <div className="txt-box birth">
                        <h3>생년월일</h3>
                        <input type="text" name='userBirth' id='userYear' placeholder='년' value={state.년} onChange={onChangeYear}/>
                        <input type="text" name='userBirth' id='userMonth' placeholder='월' value={state.월} onChange={onChangeMonth}/>
                        <input type="text" name='userBirth' id='userDate' placeholder='일' value={state.일} onChange={onChangeDate}/>
                    </div>
                    <div className="button-box">
                        <button>가입하기</button>
                    </div>
                </form>
                
                
            </div>
        </div>
    );
};
