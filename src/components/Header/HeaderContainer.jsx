import React, {useState} from "react";
import {Layout, Menu} from "antd";
import {
    SettingOutlined
} from '@ant-design/icons';
import {ModalComonent} from "../Modal/ModalComponent";
import {useDispatch, useSelector} from "react-redux";
import {setNewsCategory} from "../../redux/actions/news-action";
const { Header }  = Layout;


export const HeaderContainer = () => {
    const newsCategory = useSelector(state => state.news.newsCategory)
    const dispatch = useDispatch()
    const [modal, modalOpen] = useState(false)

    const showModal = () => {
        modalOpen(true)
    };

    const handleOk = (category) => {
        dispatch(setNewsCategory(category))
        modalOpen(false)
    };

    const handleCancel = e => {
        modalOpen(false)
    };



    return (
        <Header className="site-layout-background" style={{padding: 0, position: 'relative'}}>
            <Menu theme="dark" mode="horizontal" style={{position: 'absolute', right: 0}}>
                <Menu.Item onClick={showModal}  icon={<SettingOutlined style={{fontSize: 25}}/>} key="1"/>
                <ModalComonent newsCategory={newsCategory} modal={modal} handleOk={handleOk} handleCancel={handleCancel}/>
            </Menu>
        </Header>
    )
}