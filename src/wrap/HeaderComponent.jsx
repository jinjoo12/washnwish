import React from 'react';
import './scss/Header.scss'
import { useSelector, useDispatch } from "react-redux";
import { searchModal } from '../reducer/searchModal';

import { Outlet, Link } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';

export default function HeaderComponent(){

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);
    const navigate = useNavigate();
    const location = useLocation();

    const [state, setState] = React.useState({
        isProductTool: false,
        isCommunityTool: false,
        isMenu: false,
        
    });

    const onMouseEnterProduct=()=>{
        setState({
            ...state,
            isProductTool: !state.isProductTool,
        })
    }
    const onMouseLeaveProduct=()=>{
        setState({
            ...state,
            isProductTool: !state.isProductTool,
        })
    }
    const onMouseEnterCommunity=()=>{
        setState({
            ...state,
            isCommunityTool: !state.isCommunityTool,
        })
    }
    const onMouseLeaveCommunity=()=>{
        setState({
            ...state,
            isCommunityTool: !state.isCommunityTool,
        })
    }

    // React.useEffect(()=>{

    //     let isProductTool = false;
    //     let isCommunityTool = false;


    //     if(isProductTool===true){
    //         isCommunityTool = false;
    //     }
    //     else if(isCommunityTool===true){
    //         isProductTool = false;
    //     }

    //     setState({
    //         ...state,
    //         isProductTool: isProductTool,
    //         isCommunityTool: isCommunityTool,
    //     })
    // },[])

    const onClickSearch=(e)=>{
        e.preventDefault();
     
        dispatch(searchModal(true));          
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.add('on');
    }

    const onClickMenu=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isMenu: !state.isMenu
        })
    }

    return (
        <>
            <header id='header'>
                <div className="container">
                    <div className="header-inner">
                        <div className="left">
                            <div className="img-box">
                                <Link to='/index'>
                                    <img src="./images/intro/header/8c178515c91dd.png" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="mid">
                            <nav className='nav-box' >
                                <a href='!#' >OUR STORY</a>
                                <Link to='/sub2' onMouseEnter={onMouseEnterProduct} >PRODUCT</Link>
                                <a href='!#' onMouseEnter={onMouseEnterCommunity} >COMMUNITY</a>
                            </nav>
                                {
                                    state.isProductTool && (
                                        <div className="product-tooltop" onMouseLeave={onMouseLeaveProduct}>
                                            <ul>
                                                <li><Link to="/sub2_all" className={location.pathname==='/sub2_all'?"on":''}>ALL</Link></li>
                                                <li><Link to="/sub2_DetergentPac" className={location.pathname==='/sub2_DetergentPac'?"on":''}>캡슐세제</Link></li>
                                                <li><Link to="/sub2_AntiDyeSheet" className={location.pathname==='/sub2_AntiDyeSheet'?"on":''}>이염방지시트</Link></li>
                                                <li><Link to="/sub2_DrySheet" className={location.pathname==='/sub2_DrySheet'?"on":''}>드라이시트</Link></li>
                                                <li><Link to="/sub2_KitchenDetergent" className={location.pathname==='/sub2_KitchenDetergent'?"on":''}>주방세제</Link></li>
                                                <li><Link to="/sub2_ETC" className={location.pathname==='/sub2_ETC'?"on":''}>ETC</Link></li>
                                                <li><Link to="/sub2_Paris" className={location.pathname==='/sub2_Paris'?"on":''}>파리세지엠</Link></li>
                                                <li><Link to="/sub2_CarbonMat" className={location.pathname==='/sub2_CarbonMat'?"on":''}>카본매트</Link></li>
                                            </ul>
                                        </div>
                                    )
                                }
                                {
                                    state.isCommunityTool && (
                                        <div className="community-tooltop" onMouseLeave={onMouseLeaveCommunity}>
                                            <ul>
                                                <li><a href="!#">NOTICE</a></li>
                                                <li><a href="!#">CS CENTER</a></li>
                                            </ul>
                                        </div>
                                    )
                                }
                        </div>
                        <div className="right">
                            <ul className='nav-sub-box'>
                                <li>
                                    <a href="!#">
                                        <i className='icon-login'></i>
                                        <span>로그인</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <i className='icon-user-follow'></i>
                                        <span>회원가입</span>
                                    </a>
                                    <div className="cupon-tooltip">
                                        <div className="tooltip-arrow"></div>
                                        <div className="tooltip-box">
                                            +3000원 쿠폰
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <i className='icon-basket-loaded'></i>
                                        <span>장바구니</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <i className='icon-magnifier' onClick={onClickSearch}></i>
                                        <span className='blind'>검색</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#" onClick={onClickMenu}>
                                        <i className='icon-menu'></i>
                                        <span className='blind'>메뉴</span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                
                            <div className={`header-inner-sub ${state.isMenu?' on':''}`}>
                                <div className="menu-list">
                                    <div className="left-list list">
                                        <a href="!#">OUR STORY</a>
                                    </div>
                                    <div className="mid-list list">
                                        <a href="!#">PRODUCT</a>
                                        <ul>
                                            <li><Link to="/sub2_all" className={location.pathname==='/sub2_all'?"on":''}>ALL</Link></li>
                                            <li><Link to="/sub2_DetergentPac" className={location.pathname==='/sub2_DetergentPac'?"on":''}>캡슐세제</Link></li>
                                            <li><Link to="/sub2_AntiDyeSheet" className={location.pathname==='/sub2_AntiDyeSheet'?"on":''}>이염방지시트</Link></li>
                                            <li><Link to="/sub2_DrySheet" className={location.pathname==='/sub2_DrySheet'?"on":''}>드라이시트</Link></li>
                                            <li><Link to="/sub2_KitchenDetergent" className={location.pathname==='/sub2_KitchenDetergent'?"on":''}>주방세제</Link></li>
                                            <li><Link to="/sub2_ETC" className={location.pathname==='/sub2_ETC'?"on":''}>ETC</Link></li>
                                            <li><Link to="/sub2_Paris" className={location.pathname==='/sub2_Paris'?"on":''}>파리세지엠</Link></li>
                                            <li><Link to="/sub2_CarbonMat" className={location.pathname==='/sub2_CarbonMat'?"on":''}>카본매트</Link></li>
                                        </ul>
                                    </div>
                                    <div className="right-list list">
                                        <a href="!#">COMMUNITY</a>
                                        <ul>
                                            <li><a href="!#">NOTICE</a></li>
                                            <li><a href="!#">CS CENTER</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    
                </div>
            </header>
            <Outlet/>
        </>
    );
};
