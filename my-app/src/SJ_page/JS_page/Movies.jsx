import React from 'react'
import Movie from '../SJ_component/Movie';
import { dummy } from "../JS_moviedummy";
import '../JS_index.css';
// import {Route} from "react-router-dom";
import MovieDetail from "./MovieDetail";
import QueryStringTest from "./QueryStrigText";
import { Routes, Route } from "react-router-dom";


export default function Movies() {

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
                <Routes>
                    <Route path="/movie" element={<Movies />} />
                    <Route path="/movie/:title" element={<MovieDetail />} />
                    <Route path="/test" element={<QueryStringTest />} />
                </Routes>

            </div>
        </div>
    )
}
