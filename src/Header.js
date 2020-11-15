import React from 'react'
import './Header.css';
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import SearchIcon from "@material-ui/icons/Search"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import { useStateValue } from './StateProvider';

function Header() {
    const [{user}] = useStateValue();
    return (
        <div className="header">
            <div className="header_left">
            {/** Avatar of logged in User */}
            <Avatar className="header_avatar" alt={user?.displayName} src={user?.photoURL}/>
            {/** time */}
            <AccessTimeIcon/>

            </div>
            <div className="header_search">
            {/** Search Icon */}
            <SearchIcon/>
            {/** Input */}
            <input placeholder="Search NightSlayer"/>
            </div>
            <div className="header_right">
            {/** Help Icon */}
            <HelpOutlineIcon/>
            </div>
        </div>
    )
}

export default Header
