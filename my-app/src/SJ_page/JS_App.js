import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./SJ_component/Header";
import Celebrity from "./JS_page/Celebrity";
import Home from "./JS_page/Home";
import MovieDetail from "./JS_page/MovieDetail";
import Movies from "./JS_page/Movies";
import NotFound from "./JS_page/NotFound";
import QueryStringTest from "./JS_page/QueryStrigText";
import Tv from "./JS_page/Tv";



//page3 에 넣었음



function App() {
    return (
        <div className="root-wrap">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie" element={<Movies />} />
                    <Route path="/movie/:title" element={<MovieDetail />} />
                    <Route path="/test" element={<QueryStringTest />} />

                    <Route path="/tv" element={<Tv />} />
                    <Route path="/person" element={<Celebrity />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
