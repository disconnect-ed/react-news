import {Layout, Menu} from "antd";
import React, {useState} from "react";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
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
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined/>}>
                    Option 1
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined/>}>
                    Option 2
                </Menu.Item>
                <SubMenu key="sub1" icon={<FontSizeOutlined/>} title="Главные новости">
                    <Menu.Item key="3" onClick={() => onSelectCountry('ru')}>Новости России</Menu.Item>
                    <Menu.Item key="4" onClick={() => onSelectCountry('ua')}>Новости Украины</Menu.Item>
                    <Menu.Item key="5" onClick={() => onSelectCountry('pl')}>Новости Польши</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined/>} title="Team">
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9" icon={<FileOutlined/>}/>
            </Menu>
        </Sider>
    )
}