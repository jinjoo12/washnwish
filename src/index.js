import React from 'react';
import ReactDOM from 'react-dom/client';
import WrapComponent from './WrapComponent';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import section4Modal from './reducer/section4Modal.js'
import searchModal from './reducer/searchModal.js'
import footerTermsModal from './reducer/footerTermsModal.js'
import footerPersonalInfoModal from './reducer/footerPersonalInfoModal.js'
import mainModal from './reducer/mainModal.js'
import cartReducer from './reducer/cartReducer';
import viewProduct from './reducer/viewProduct';
import viewProductIsFlag from './reducer/viewProductIsFlag';
import signIn from './reducer/signIn.js';

let store = configureStore ({
  reducer : {
    section4Modal,
    searchModal,
    footerTermsModal,
    footerPersonalInfoModal,
    mainModal,
    cartReducer,
    viewProduct,
    viewProductIsFlag,
    signIn
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <WrapComponent />
    </Provider>
  </React.StrictMode>
);