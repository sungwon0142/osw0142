// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./page/header";
import Footer from "./page/footer";
import HM from "./page/home";
import P2 from "./page/page2";
import P3 from "./page/page3"; // page3 통합
import P4 from "./page/page4";
// import './SJ_page/JS_index.css';


const App = () => {
    return (
        <BrowserRouter>
            <div className="container_background">
                <Header />
                <Routes>
                    <Route path="/" element={<HM />} />
                    <Route path="/page2" element={<P2 />} />
                    <Route path="/page3/*" element={<P3 />} /> {/* page3를 중첩 라우트로 */}
                    <Route path="/page4" element={<P4 />} />

                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
