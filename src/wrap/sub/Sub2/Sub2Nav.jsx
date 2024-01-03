import React, { useRef, useState } from 'react';
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Sub2Product() {

    const location = useLocation();

    return (
        <nav>
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
        </nav>
    );
}
