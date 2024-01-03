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

import Sub2Component from './wrap/sub/Sub2Component';
import Sub2AllComponent from './wrap/sub/Sub2AllComponent';
import Sub2DetergentPacComponent from './wrap/sub/Sub2DetergentPacComponent';
import Sub2AntiDyeSheetComponent from './wrap/sub/Sub2AntiDyeSheetComponent';
import Sub2DrySheetComponent from './wrap/sub/Sub2DrySheetComponent';
import Sub2ETCComponent from './wrap/sub/Sub2ETCComponent';
import Sub2KitchenDetergentComponent from './wrap/sub/Sub2KitchenDetergentComponent';
import Sub2ParisComponent from './wrap/sub/Sub2ParisComponent';
import Sub2CarbonMatComponent from './wrap/sub/Sub2CarbonMatComponent';



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
                        <Route path='/sub2_all' element={<Sub2AllComponent />}/>
                        <Route path='/sub2_DetergentPac' element={<Sub2DetergentPacComponent />}/>
                        <Route path='/sub2_AntiDyeSheet' element={<Sub2AntiDyeSheetComponent />}/>
                        <Route path='/sub2_DrySheet' element={<Sub2DrySheetComponent />}/>
                        <Route path='/sub2_KitchenDetergent' element={<Sub2KitchenDetergentComponent />}/>
                        <Route path='/sub2_ETC' element={<Sub2ETCComponent />}/>
                        <Route path='/sub2_Paris' element={<Sub2ParisComponent />}/>
                        <Route path='/sub2_CarbonMat' element={<Sub2CarbonMatComponent />}/>
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
