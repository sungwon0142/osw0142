import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { IMG_BASE_URL } from '../SJ_component/Movie';
import '../JS_index.css';


export default function MovieDetail() {

    const{ state } = useLocation();
    console.log(state);

    return (
        <div className ="detail-page-container">
            <div>
                <img src={IMG_BASE_URL + state.poster_path} width = "360px"/>
            </div>
            <div>
                <h1> {state.title},  ({state.release_date}) </h1>
                평점: <span>{state.vote_average}</span><br /><br />

                개요: <br/><br />
                <p>{state.overview}</p>

            </div>
        </div>
    )
}