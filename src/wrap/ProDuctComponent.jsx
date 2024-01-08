import React from 'react';
import './scss/Product.scss';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { cartMethod } from '../reducer/cartReducer';
import { viewProduct } from '../reducer/viewProduct';

export default function ProDuctComponent() {

    // const selector = useSelector((state)=>state);
    // const dispatch = useDispatch();
    
    // localStorage.getItem('VIEW-PRODUCT')

    // const selector = useSelector((state)=>state);
    // const dispatch = useDispatch();

    // const [list, setList] = React.useState([]);   
    // const [count, setCount] = React.useState([]); 

    // const [price, setPrice] = React.useState(0);  
    // const [cnt, setCnt] = React.useState(1);
    // const [isSelect, setIsSelect] = React.useState(false);
    // const [isCount, setIsCount] = React.useState(false);
   
    // const [state, setState] = React.useState({
    //     isSelect: false,
    //     isMinus: false, 
    //     totPay: 0,
    //     장바구니: []
    // });
   
    // const onClickList=(e, item, idx)=>{

        
    //     const res = list.map((z)=>z.상품명===item.상품명);
    //     if(!res.includes(true)){ // true 가 아니면
    //         const obj = {
    //             idx: idx,
    //             상품명: item.상품명,
    //             정가: item.정가,
    //             판매가: Math.round(item.정가 * (1-selector.viewProduct.current.할인율))
    //         }
            
    //         setList([obj, ...list]); 
    //         setCount([1, ...count]); 
    //     }
    //     else{ 
    //         const obj = {
    //             isConfirmModal: true,
    //             confirmMsg: '이미 추가된 옵션 입니다.',
    //             회원가입완료: false
    //         }
    //         dispatch(confirmModal(obj));
    //     }
    //     setState({
    //         ...state,
    //         isSelect: false
    //     })
    // }

    // const optionListCountArray=(idx)=>{
    //     let result = null;
    //     result = list.filter((item, id)=> id !== idx);
    //     setList(result);
    //     result = count.filter((item, id)=> id !== idx);
    //     setCount(result);
    // }

    // const onClickCountMinusOption=(e, idx)=>{
    //     e.preventDefault();

    //     count[idx] = count[idx] - 1; 
    //     setCount([...count]);  

    //     let totPay = state.totPay; 
    //     let cuttentPay = 0;
    //         cuttentPay = totPay - list[idx].판매가;  

    //     setState({
    //         ...state,
    //         totPay:  cuttentPay
    //     })

    //     if(count[idx] < 1){
    //         optionListCountArray(idx); 
    //     }
    // } 

    // const onClickOptionDeleteBtn=(e, idx)=>{
    //     e.preventDefault();
    //     optionListCountArray(idx);     
    // }

    
    // const onClickCountPlusOption=(e, idx)=>{
    //     e.preventDefault();
    //     count[idx] = count[idx] + 1;
    //     setCount([...count]);  
    //     let totPay = state.totPay; 
    //     let cuttentPay = 0;
    //         cuttentPay = totPay + list[idx].판매가; 
    //     setState({
    //         ...state,
    //         totPay:  cuttentPay
    //     })
    // }    
      
    // React.useEffect(()=>{
    //     let pay = 0;
    //     if( list.length > 0 ){
    //         list.map((item, idx)=>{
    //             pay += item.판매가;
    //         });            
    //     }
    //     setState({
    //         ...state,
    //         totPay:  pay
    //     })
    // },[list]);


    // React.useEffect(()=>{

    //     if(selector.viewProduct.current.옵션==='단일상품'){
    //         setIsCount(true);
    //     }

    //     if(selector.viewProduct.current.옵션==='다중상품'){
    //         setIsSelect(true);
    //     }

    // },[]);


    // React.useEffect(()=>{
    //     let totPay = 0;
    //     let isMinus = false;

    //     if(selector.viewProduct.current.옵션==='단일상품'){
    //         if(cnt >=1 ){
    //             totPay =  cnt * Number(selector.viewProduct.current.판매가)
    //         }

    //         if(cnt>1){
    //             isMinus = false;
    //         }
    //         else{
    //             isMinus = true;
    //         }

    //         setState({
    //             ...state,
    //             totPay: totPay,
    //             isMinus: isMinus
    //         })
    //     }
         
    //     return;
    // },[cnt]);


    // const onClickSelect=(e)=>{
    //     e.preventDefault();
    //     setState({
    //         ...state,
    //         isSelect: !state.isSelect
    //     })
    // }

    // const onClickCountMinus=(e)=>{
    //     e.preventDefault();
        
    //     if(cnt <= 1) { 
    //         setCnt(1);
    //     }   
    //     else {
    //         setCnt(cnt-1);
    //     }          
    // }

    // const onClickCountPlus=(e)=>{
    //     e.preventDefault();
    //     setCnt(cnt+1);
    // }

    // const onClickCartAdd=(e)=>{
    //     e.preventDefault();
        

    //     let 장바구니 = selector.viewProduct.current;  

    //     let 단일상품장바구니 = [];
    //     let 다중상품장바구니 = [];
    //     let 카트_로컬저장소 = [];

        
    //     if(장바구니.옵션==='단일상품'){

            
    //         장바구니 = {
    //             ...장바구니,
    //             제품코드: selector.viewProduct.current.번호, 
    //             장바구니상품명: selector.viewProduct.current.제품명, 
    //             수량: cnt
    //         }

    //         if(localStorage.getItem('CART_PRODUCT')!==null){
    //             단일상품장바구니 = JSON.parse(localStorage.getItem('CART_PRODUCT'));
    //         }
    
    //         let imsi = 단일상품장바구니.map((item)=>item.제품코드===장바구니.제품코드); 
    
    //         if(imsi.includes(true)===true){
    //             단일상품장바구니 = 단일상품장바구니.map((item)=>item.제품코드===장바구니.제품코드?{...item, 수량:item.수량+장바구니.수량 }:{...item});
    //         }
    //         else{
    //             단일상품장바구니 = [...단일상품장바구니, 장바구니];
    //         }

    //         localStorage.setItem('CART_PRODUCT', JSON.stringify(단일상품장바구니));
    //         setState({
    //             ...state, 
    //             장바구니: 단일상품장바구니
    //         });
    //         dispatch(cartMethod(단일상품장바구니));  


    //     }
        
    //     else if(장바구니.옵션==='다중상품'){
            
    //         list.map((item, i)=>{    
    //             장바구니 = {
    //                 ...장바구니,
    //                 제품코드: `${selector.viewProduct.current.번호}, ${item.상품명}`,
    //                 장바구니상품명: item.상품명,
    //                 수량: count[i]
    //             }            
    //             다중상품장바구니 = [
    //                 ...다중상품장바구니,
    //                 장바구니
    //             ]                
    //         }); 

    //         if(localStorage.getItem('CART_PRODUCT')!==null){
    //             카트_로컬저장소 = JSON.parse(localStorage.getItem('CART_PRODUCT'));             
    //         }

    //         let res = null;
    //         res = 카트_로컬저장소.map((item)=>다중상품장바구니.map((item2)=>item.제품코드===item2.제품코드? 1 : 0));

    //         if( res.map((item)=>item.includes(1)).includes(true) ){ 
    //             console.log( '카트_로컬저장소 => 수량 수정 이전 ' );
    //             console.log( 카트_로컬저장소 );
                
    //             다중상품장바구니.map((item) => 
    //                 카트_로컬저장소.map((item2, idx) => {
    //                     if(item.제품코드===item2.제품코드){
    //                         return 카트_로컬저장소[idx] = {...item2, 수량: item2.수량 + item.수량}
    //                     }
    //                     else{
    //                         return 카트_로컬저장소[idx] = {...item2}
    //                     } 
    //                 })                    
    //             );


    //         }
    //         else {
    //             다중상품장바구니.map((item)=>{ 
    //                 카트_로컬저장소 = [
    //                         ...카트_로컬저장소,
    //                         item   
    //                 ]   
    //             })                    

    //         }

    //         localStorage.setItem('CART_PRODUCT', JSON.stringify(카트_로컬저장소));
    //         setState({
    //             ...state, 
    //             장바구니: 카트_로컬저장소
    //         });
    //         dispatch(cartMethod(카트_로컬저장소));  

    //     }
    
    // }

    // React.useEffect(()=>{
    //     let arr = [];

    //     if(localStorage.getItem('CART_PRODUCT')!==null){
    //         arr = JSON.parse(localStorage.getItem('CART_PRODUCT'));
    //     }     

         
    //     setState({
    //         ...state, 
    //         장바구니: arr
    //     });
    //     dispatch(cartMethod(arr));

    //     return;
    // },[]);

    return (
        <main id='product'>
            <section id='section1'>
                <div className="container">
                    <div className="content">
                        <div className="left">
                            <img src="./images/product/chamgo.jpg" alt="" />
                        </div>
                        <div className="info">
                            <div className="title">
                                <h2>[추석선물세트] 워시앤위시 캡슐세제+드라이시트+런드리샤쉐 세트구성</h2>
                                <div className="chuga">
                                    <div className="sale">SALE</div>
                                    <div className="md">MD</div>
                                </div>
                                <div className="pay">
                                    <div className="pay-num">35,700원</div>
                                    <div className="sharing"><i class="material-icons">share</i></div>
                                </div>
                            </div>
                            <div className="body">
                                <div className="fiview">
                                    <a href=""><img src="./images/product/bc6352e87da08.jpg" alt="" /></a>
                                    <span>** 회원가입 후 다양한 혜택을 누려보세요!**</span>
                                </div>
                                <ul>
                                    <li>
                                        <div className="col1">
                                            구매혜택
                                        </div>
                                        <div className="col2">
                                            <p>0 포인트 적립예정<i class="fa fa-question-circle-o"></i></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="col1">
                                            배송방법
                                        </div>
                                        <div className="col2">
                                            <p>택배</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="col1">
                                            배송비
                                        </div>
                                        <div className="col2">
                                            <p>3,000원 (30,000원 이상 무료배송)</p>
                                            <em>|</em>
                                            <span>도서산간 배송비 추가<i class="fa fa-question-circle-o"></i></span>
                                        </div>
                                    </li>
                                </ul>
                                <div className="button-box">
                                    <button>구매하기</button>
                                    <button>장바구니</button>
                                    <button><i class="fa fa-heart-o">0</i></button>
                                </div>
                                <div className="naver-btn">
                                    <button className='img-btn'><img src="./images/product/pc_btn_npay.png" alt="" /></button>
                                    <button>찜</button>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

