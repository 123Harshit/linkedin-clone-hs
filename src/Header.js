import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationIcon from '@material-ui/icons/Notifications'

function Header() {
    return (
        <div className = 'header'>
            <div className="header_left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>
                <div className="header_search">
                    <SearchIcon/>
                    <input type="text"/>
                </div>
            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationIcon} title="Notification"/>
                <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C5103AQETbyJ8CWEhYA/profile-displayphoto-shrink_200_200/0/1575055818407?e=1614211200&v=beta&t=8kfaHosm4tbwrZ2FJlaeyPY4jqzZ8DIEzGCXFsi5SR8" title="Me"/>
            </div>
        </div>
    )
}

export default Header
