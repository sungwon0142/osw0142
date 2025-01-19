import React from 'react';
import ReactDOM from 'react-dom/client';
import {Outlet,Link} from "react-router-dom";
import '../css/header.css';
// import Mall from "../Mall";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const Header = () => {
    return (


        <header>
            <nav>
                <ul id='Header_main'>
                    <li><Link to='/' onClick={() => go(0)}>홈화면</Link></li>
                    <li><Link to='/page2' onClick={() => go(1)}>2페이지</Link></li>
                    <li><Link to='/page3' onClick={() => go(2)}>3페이지</Link></li>
                    <li><Link to='/page4' onClick={() => go(3)}>4페이지</Link></li>


                </ul>
            </nav>
            <Outlet/>
        </header>
    );
}

function go(num) {
    console.log(num);
    let menu = document.querySelectorAll('nav li');
    for(let i =0; i<menu.length; i++) {
        menu[i].style.border = 'none';
        menu[i].classList.remove('act');
    }
    let j;
    let txt;
    //
    // if(num === 0) {
    //     j =0;
    //     txt = 'transparent';
    // }
    // else if(num ===1) {
    //     j = 1;
    //     txt = 'gold';
    // }
    // else if(num ===2) {
    //     j = 2;
    //     txt = 'yellowgreen';
    // }
    // else if(num ===3) {
    //     j = 3;
    //     txt = 'pink';
    // }
    //
    // if(j!==0) {
    //     menu[j].style.border='2px dashed dodgerblue';
    //     menu[j].classList.add('act');
    // }
    // document.body.style.backgroundColor =txt;
}

export default Header;


// reportWebVitals();
