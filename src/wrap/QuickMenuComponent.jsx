import React from "react";
import './scss/QuickMenu.scss'

export default function QuickMenuComponent(){

    const [state, setState] = React.useState({
        isMenuFixed: false,
        isGoTop: false,
    })

    React.useEffect(()=>{
            
        window.addEventListener('scroll', function(){
            let isMenuFixed = false;
            if(this.window.scrollY >= 720){
                isMenuFixed = true;
            }
            else {
                isMenuFixed = false;
            }

            setState({
                ...state,
                isMenuFixed: isMenuFixed,
            })
        });

    },[]);

    return (
        <div id="quick-Menu" className={`${state.isMenuFixed ? 'on':''}`}>
            <div className="container">
                <div className="col col1">
                    <a href="!#"><img src="./images/quickMenu/bafa2a2e0d1dd.png" alt="" /></a>
                </div>
                <div className="col col2">
                    <a href="!#"><img src="./images/quickMenu/7f8b3f9a85040.png" alt="" /></a>
                </div>
                <div className="col col3">
                    <a href="!#"><img src="./images/quickMenu/13c90576f3121.png" alt="" /></a>
                </div>
                <div className="col col4">
                    <a href="#wrap"><img src="./images/quickMenu/3d12774337bbc.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}