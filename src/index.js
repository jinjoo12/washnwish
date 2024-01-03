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

let store = configureStore ({
  reducer : {
    section4Modal,
    searchModal,
    footerTermsModal,
    footerPersonalInfoModal,
    mainModal,
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