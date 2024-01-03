import React from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from "./wrap/MainComponent";
import MainModalComponent from "./wrap/MainModalComponent";
import FooterComponent from './wrap/FooterComponent';
import QuickMenuComponent from './wrap/QuickMenuComponent';
import SearchModalComponent from './wrap/SearchModalComponent';
import MainSection4ModalComponent from './wrap/MainSection4ModalComponent'
import FooterTermsModalComponent from './wrap/FooterTermsModalComponent'
import FooterPersonalInfoModalComponent from './wrap/FooterPersonalInfoModalComponent'

import Sub2Component from './wrap/sub/Sub2Component'


import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { searchModal } from './reducer/searchModal';
import { section4Modal } from "./reducer/section4Modal";
import { mainModal } from "./reducer/mainModal";

export default function WrapComponent() {

    const selector = useSelector((state)=>state);

    return (
        <div id="wrap">
           
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                {
                    selector.mainModal.mainModal && (
                        <MainModalComponent />
                    )
                }
                <Routes>
                    <Route path='/' element={<HeaderComponent />}>
                        <Route index element={<MainComponent />}/>
                        <Route path='/index' element={<MainComponent />}/>
                        <Route path='/sub2' element={<Sub2Component />}/>
                    </Route>

                </Routes>
                {
                    selector.searchModal.searchModal && (
                        <SearchModalComponent />
                    )
                }
                {
                    selector.section4Modal.section4Modal && (
                        <MainSection4ModalComponent />
                    )
                }
                {
                    selector.footerTermsModal.footerTermsModal && (
                        <FooterTermsModalComponent />
                    )
                }
                {
                    selector.footerPersonalInfoModal.footerPersonalInfoModal && (
                        <FooterPersonalInfoModalComponent />
                    )
                }
                <QuickMenuComponent />
                <FooterComponent />
            </BrowserRouter>

        </div>
    );
}
