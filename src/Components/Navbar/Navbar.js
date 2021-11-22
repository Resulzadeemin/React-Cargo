import React from 'react'
import { Link } from "react-router-dom"
import logo from "../Img/logo.svg"
import style from "../Navbar/Navbar.module.css"
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import { IoMdArrowDropdown } from "react-icons/io";
import Lan from '../Languages/Lan';
function Navbar() {
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <Link className={style.navfont} to="/about">Haqqımızda</Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link className={style.navfont} to="/news">Xəbərlər</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link className={style.navfont} to="/vacancies">Vakansiyalar</Link>
            </Menu.Item>
        </Menu>
    );

    const menu2 = (
        <Menu>
            <Menu.Item key="0">
                <Link className={style.navfont} to="/suggestions">Tekliflerimiz</Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link className={style.navfont} to="/corporative">Koporativ</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link className={style.navfont} to="/shops">Mağazalar</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link className={style.navfont} to="/regions">Məntəqələr</Link>
            </Menu.Item>
        </Menu>
    );

    const menu3 = (
        <Menu>
            <Menu.Item key="0">
                <Link className={style.navfont} to="/faq">Sual-Cavab</Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link className={style.navfont} to="/support">Dəstək</Link>
            </Menu.Item>
        </Menu>
    );
    return (
        <div className={style.navbar}>


            <div className={style.logo}>
                <Link to="/home"><img src={logo} /></Link>
            </div>
            <div className={style.navbar2}>
                <Dropdown overlay={menu} trigger={['click']}>
                    <Link to="#" className="ant-dropdown-link" onClick={e => e.preventDefault()}>Şirkət
                        <IoMdArrowDropdown className={style.icon} /></Link>
                </Dropdown>

                <Dropdown overlay={menu2} trigger={['click']}>
                    <li><Link to="#" className="ant-dropdown-link" onClick={e => e.preventDefault()}>Xidmətlərimiz
                        <IoMdArrowDropdown className={style.icon} /></Link></li>
                </Dropdown>

                <li><Link className="ant-dropdown-link" to="/tariffs">Tariflər</Link></li>

                <Dropdown overlay={menu3} trigger={['click']}>
                    <li><Link to="#" className="ant-dropdown-link" onClick={e => e.preventDefault()}>Əlaqə
                        <IoMdArrowDropdown className={style.icon} /></Link></li>
                </Dropdown>
            </div>

            <div className={style.form}>
                <Lan />
                <div className={style.login}>
                    <Link to="#">DAXİL OL</Link>
                </div>
                <div className={style.regs}>
                    <Link to="/registration">QEYDİYYAT</Link>
                </div>
            </div>

        </div>
    )
}

export default Navbar
