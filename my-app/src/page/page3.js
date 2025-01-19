import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import Header from "../SJ_page/SJ_component/Header";
import Celebrity from "../SJ_page/JS_page/Celebrity";
import Home from "../SJ_page/JS_page/Home";
import MovieDetail from "../SJ_page/JS_page/MovieDetail";
import Movies from "../SJ_page/JS_page/Movies";
import NotFound from "../SJ_page/JS_page/NotFound";
import QueryStringTest from "../SJ_page/JS_page/QueryStrigText";
import Tv from "../SJ_page/JS_page/Tv";
import React, {useState} from "react";
import {dummy} from "../SJ_page/JS_moviedummy";
import Movie from "../SJ_page/SJ_component/Movie";

function Page3() {
    return (
        <div>
            <div className="movies-container">
                {dummy.results.map((item) => {
                    return (
                        <Movie

                            title={item.title}
                            poster_path={item.poster_path}
                            vote_average={item.vote_average}
                            overview={item.overview}
                            release_date={item.release_date}
                        />
                    );
                })}
            </div>
        </div>
    )
    // const navigate = useNavigate();
    //
    // const [word, setWord] = useState('');
    //
    //
    // const onClickWord = () => {
    //     navigate(`/test?sword=${word}`);
    // }
    //
    // return (
    //     <div className="page-container" style={{ fontSize: "32px" }}>
    //         홈화면입니다.
    //     </div>
    // );


    // return (
        // <div className="root-wrap">
        //     <BrowserRouter>
        //         <Header />
        //         <Routes>
        //             <Route path="/" element={<Home />} />
        //             <Route path="/movie" element={<Movies />} />
        //             <Route path="/movie/:title" element={<MovieDetail />} />
        //             <Route path="/test" element={<QueryStringTest />} />
        //
        //             <Route path="/tv" element={<Tv />} />
        //             <Route path="/person" element={<Celebrity />} />
        //             <Route path="/*" element={<NotFound />} />
        //         </Routes>
        //     </BrowserRouter>
        // </div>
    // );
}

export default Page3;
