// Home.js
import React from "react";
import { Outlet } from "react-router-dom";
import "../css/home_css.css";
import Panel from "../component/panel";
import Title from "../component/title";
import Content from "../component/content";

const Home = () => {
    return (
        <main>
            <div className="panel-container">
                <Panel>
                    <Title text="react 공부" />
                    <Content text="react의 특징을 살려 구현해보자" />
                </Panel>
                <Panel>
                    <Title text="Panel 2" />
                    <Content text="This is the content for panel 2." />
                </Panel>
                <Panel>
                    <Title text="Panel 3" />
                    <Content text="This is the content for panel 3." />
                </Panel>
                <Panel>
                    <Title text="Panel 4" />
                    <Content text="This is the content for panel 4." />
                </Panel>
            </div>
            <Outlet />
        </main>
    );
};

export default Home;
