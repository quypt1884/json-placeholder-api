import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './page/Users';
import UserDetail from './page/UserDetail';
import UserForm from './page/UserForm';
import { getListUser } from './store/SliceUser';
import UserEdit from './page/UserEdit';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css'

store.dispatch(getListUser());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route index element={<Users/>}/>
                    <Route path='users/:id' element={<UserDetail/>}/>
                    <Route path='users/add' element={<UserForm/>}/>
                    <Route path='users/edit/:id' element={<UserEdit/>}/>
                </Route>
            </Routes>
        </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();