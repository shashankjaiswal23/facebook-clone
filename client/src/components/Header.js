import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { IconButton, Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./Header.css"
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook Logo" /> 
                <div className="header__input">
                    <SearchIcon/>
                    <input placeholder="search facebook" type="text"/>
                </div>
            </div>
                <div className="header__center">
                    <div className="header__option header__option--active">
                        <HomeIcon/>
                    </div>
                    <div className="header__option">
                        <FlagIcon/>
                    </div>
                    <div className="header__option">
                        <SubscriptionsIcon/>
                    </div>
                    <div className="header__option">
                        <StorefrontIcon />
                    </div>
                    <div className="header__option">
                        <SupervisedUserCircleIcon fontsize="large"/>
                    </div>
                </div>
                <div className="header__right">
                    <div className="header__info">
                        <Avatar />
                        <h4>Shashank</h4>
                    </div>
                        <IconButton>
                         <AddIcon />
                        </IconButton>
                        <IconButton>
                            <QuestionAnswerIcon />
                        </IconButton>
                        <IconButton>
                            <NotificationsActiveIcon />
                        </IconButton>
                        <IconButton>
                            <ExpandMoreIcon />
                        </IconButton>
                    
                
             </div>
            
        </div>
    )
}

export default Header 
