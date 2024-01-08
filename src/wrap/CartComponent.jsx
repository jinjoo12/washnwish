import React from 'react';
import './scss/Cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { cartMethod } from '../reducer/cartReducer';
import { viewProduct } from '../reducer/viewProduct';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function CartComponent() {

    // const selector = useSelector((state)=>state);
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const [state, setState] = React.useState({
    //     냉장상품: [],
    //     냉동상품: [],
    //     상온상품: [],
    //     상품금액: 0, 
    //     상품할인금액: 0,
    //     배송비: 0,    
    //     결제예정금액: 0,
    //     cnt: 0 
    // })

    // const [chk, setChk] = React.useState([]);


    // const [isListUl1, setIsListUl1] = React.useState(false);
    // const [isListUl2, setIsListUl2] = React.useState(false);
    // const [isListUl3, setIsListUl3] = React.useState(false);


    // const onClickListUl1=(e)=>{
    //     e.preventDefault();        
    //     setIsListUl1(!isListUl1);
    // }
    // const onClickListUl2=(e)=>{
    //     e.preventDefault();        
    //     setIsListUl2(!isListUl2);
    // }
    // const onClickListUl3=(e)=>{
    //     e.preventDefault();        
    //     setIsListUl3(!isListUl3);
    // }


    // React.useEffect(()=>{
    //     let imsi = [];
    //     imsi = selector.cartReducer.장바구니.map((item)=>item.제품코드);

    //     setChk(imsi);
    //     return;
    // },[]);

    // React.useEffect(()=>{

    //     let 냉장상품 = [];
    //     let 냉동상품 = [];
    //     let 상온상품 = [];
    //     let 상품금액 = 0;
    //     let 상품할인금액 = 0;
    //     let 상품계산금액 = 0;
    //     let 배송비 = 0;
    //     let 결제예정금액 = 0;
        

    //     if(selector.cartReducer.장바구니.length > 0) {                    
    //         냉장상품 = selector.cartReducer.장바구니.filter((item)=>item.보관방법==='냉장');
    //         냉동상품 = selector.cartReducer.장바구니.filter((item)=>item.보관방법==='냉동');
    //         상온상품 = selector.cartReducer.장바구니.filter((item)=>item.보관방법==='상온');
    //         selector.cartReducer.장바구니.map((item)=>{
    //             chk.map((code)=>{
    //                 if(code===item.제품코드){
    //                     상품금액 += (item.수량 * item.정가);                             
    //                     상품할인금액 += (Math.round((item.수량 * item.정가) * item.할인율));
    //                 }
    //             });
    //         });

            
    //         if(chk.length > 0){
    //             상품계산금액 = 상품금액 - 상품할인금액;
    //             배송비 = (상품계산금액 <= 43000) ? 3000 : 0;
    //             결제예정금액 = 상품계산금액 - 배송비;
    //         }
    //     }

    //     setState({
    //         ...state,
    //         냉장상품: 냉장상품,
    //         냉동상품: 냉동상품,
    //         상온상품: 상온상품,
    //         상품금액: 상품금액,
    //         상품할인금액: 상품할인금액,
    //         배송비: 배송비,    
    //         결제예정금액: 결제예정금액,
    //     })
    //     return;         

    // },[selector.cartReducer.장바구니, chk]);

    // const onClickPlusBtn=(e, 제품코드)=>{
    //     e.preventDefault();            
    //     const 결과 = selector.cartReducer.장바구니.map((item)=>{
    //         return 제품코드===item.제품코드 ? {...item, 수량: item.수량+1} : {...item}
    //     });
    //     dispatch(cartMethod(결과));
    //     localStorage.setItem('CART_PRODUCT', JSON.stringify(결과));

    // }

    // const onClickMinusBtn=(e, 제품코드)=>{
    //     e.preventDefault();

    //     const 결과 = selector.cartReducer.장바구니.map((item)=>{
    //         return 제품코드===item.제품코드 ? {...item, 수량: ((item.수량 <= 1) ? (1) : (item.수량-1))} : {...item}
    //     });
    //     dispatch(cartMethod(결과));
    //     localStorage.setItem('CART_PRODUCT', JSON.stringify(결과));
    // }


    // const onChangeCheck=(e)=>{
    //     if(e.target.checked){
    //         setChk([...chk, e.target.value]);
    //     }
    //     else{
    //         let imsi = chk.filter((item)=>item!==e.target.value);
    //         setChk(imsi);
    //     }
    // }   

    // const onChangeAllCheck=(e)=>{
    //     let imsi = [];
    //     if(e.target.checked){
    //         imsi = selector.cartReducer.장바구니.map((item)=>item.제품코드);
    //         setChk(imsi);
    //     }
    //     else{            
    //         setChk([]);
    //     }
    // }   
    
    // const onClickOneDelete=(e, 제품코드)=>{
    //     e.preventDefault();
    //     let 장바구니 = selector.cartReducer.장바구니;
    //     let 결과 = 장바구니.filter((item)=>item.제품코드!==제품코드);        
    //     dispatch(cartMethod(결과));
    //     localStorage.setItem('CART_PRODUCT', JSON.stringify(결과));
        
    //     결과 = chk.filter((item)=>item!==제품코드);
    //     setChk(결과);
    // }

    // const onClickSelectDelete=(e)=>{
    //     e.preventDefault(); 
    //     let 장바구니 = selector.cartReducer.장바구니;

    //     let 결과 = 장바구니.filter((item)=>!chk.includes(item.제품코드) );
    //     dispatch(cartMethod(결과));
    //     localStorage.setItem('CART_PRODUCT', JSON.stringify(결과));

    //     결과 = 장바구니.filter((item)=>!chk.includes(item.제품코드) );
    //     setChk(결과);
    // }    

    // const onClickViewProductPage=(e, item)=>{
    //     e.preventDefault();

    //     dispatch(viewProduct(item));   
    //     localStorage.setItem('viewProduct', JSON.stringify(item));
    //     navigate('/productView');
    // }





    return (
        <main id='cart'>
            <section id='section1'>
                <div className="container">
                    <div className="content">
                        <div className="title">
                            <h2>장바구니<span><em>0</em></span></h2>
                        </div>
                        <div className="list">
                            <div className="top">
                                <ul>
                                    <li>
                                        <input type="checkbox" />
                                        <span>상품정보</span>
                                    </li>
                                    <li>
                                        <span>수량</span>
                                    </li>
                                    <li>
                                        <span>주문금액</span>
                                    </li>
                                    <li>
                                        <span>배송정보</span>
                                    </li>
                                </ul>                                
                            </div>
                            <div className="middle">
                                <div className="no-list">
                                    <i class="fa fa-shopping-cart"></i>
                                    <p>장바구니가 비어있습니다.</p>
                                </div>
                                <div className="on-list">
                                    <ul>
                                        <li>
                                            <span className='product-list'>
                                                <input type="checkbox" />
                                                <img src="./images/cart/67038a50c3eb3.jpg" alt="" />
                                                <h3>[수량 한정 선착순] 새해 복 많이 받으세요! 새해에도 워시앤위시가 쏜다~!</h3>
                                                <i class="material-icons">close</i>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <p>1</p>
                                                <a href="!#" className='change'>옵션/수량변경</a>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <p>10,900원</p>
                                                <a href="!#" className='buy'>바로구매</a>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <p>무료</p>
                                                <em>택배</em>
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="del-box">
                                        <button>선택상품 삭제</button>
                                        <button>품절상품 삭제</button>
                                        <p>네이버페이로 결제 시 할인금액과 배송비가 변경될 수 있습니다.</p>
                                    </div>
                                    <div className="pay-box">
                                        <div className="order-pro">
                                            <p>총 주문상품</p>
                                            <span>1</span>
                                            <p>개</p>
                                        </div>
                                        <div className="price">
                                            <div className="cart-price">
                                                <p className='col1'>10,900원</p>
                                                <p className='col2'>상품금액</p>
                                            </div>
                                            <div><i class="fa fa-plus"></i></div>
                                            <div className="sale-price">
                                                <p className='col1'>무료</p>
                                                <p className='col2'>배송비</p>
                                            </div>
                                            <div><i>=</i></div>
                                            <div className="total-price">                                                
                                                <p className='col1'>10,900원</p>
                                                <p className='col2'>총 주문금액</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="buy-box">
                                        <button className='nowbuy'>주문하기</button>
                                        <button className='navbuy'><img src="./images/cart/pc_btn_npay.png" alt="" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom">
                                <Link to="/index">계속 쇼핑하기</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

