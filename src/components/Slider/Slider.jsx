import {Layout, Menu} from "antd";
import React, {useState} from "react";
import {
    FontSizeOutlined,
} from '@ant-design/icons';
import {useDispatch} from "react-redux";
import {selectNewsCountry} from "../../redux/actions/news-action";
const { SubMenu } = Menu;
const { Sider } = Layout;


export const Slider = () => {
    const [collapsed, isCollapsed] = useState(true)
    const dispatch = useDispatch()
    const onCollapse = collapsed => {
        isCollapsed(collapsed);
    };
    const onSelectCountry = (country) => {
        dispatch(selectNewsCountry(country))
    }
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo"/>
            <Menu theme="dark" mode="inline">
                <SubMenu key="sub1" icon={<FontSizeOutlined/>} title="Главные новости">
                    <Menu.Item key="1" onClick={() => onSelectCountry('ru')}>Новости России</Menu.Item>
                    <Menu.Item key="2" onClick={() => onSelectCountry('ua')}>Новости Украины</Menu.Item>
                    <Menu.Item key="3" onClick={() => onSelectCountry('pl')}>Новости Польши</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    )
}