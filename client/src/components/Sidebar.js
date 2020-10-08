import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
function Sidebar() {
    return (
      <div className="sidebar">
        <SidebarRow
          title="Shashank"
          src="https://pbs.twimg.com/profile_images/841918679872868353/Y2ew6XZu.jpg"
        />
        <SidebarRow
          title="Covid-19 Information Center"
          Icon={LocalHospitalIcon}
        />
        <SidebarRow title="Pages" Icon={EmojiFlagsIcon} />
        <SidebarRow title="Friends" Icon={PeopleIcon} />
        <SidebarRow title="Messanger" Icon={ChatIcon} />
        <SidebarRow title="Marketplace" Icon={StorefrontIcon} />
        <SidebarRow title="Video" Icon={VideoLibraryIcon} />
        <SidebarRow title="See More" Icon={ExpandMoreIcon} />
      </div>
    );
}

export default Sidebar
