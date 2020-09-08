import React from "react";
import './App.css';
import 'antd/dist/antd.css';
import {Layout} from "antd";
import {Slider} from "./components/Slider/Slider";
import {ArticlesCardsContainer} from "./components/ArticlesCards/ArticlesCardsContainer";
import {getNews} from "./redux/actions/news-action";
import {HeaderContainer} from "./components/Header/HeaderContainer";

const { Content, Footer } = Layout;

function App() {

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Slider/>
            <Layout className="site-layout">
                <HeaderContainer/>
                <Content style={{margin: '0 16px'}}>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        <ArticlesCardsContainer onClick={getNews}/>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

export default App;
