import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SidebarRow.css"
function SidebarRow({title, src, Icon}) {
    return (
      <div className="sidebarRow">
        <div className="icon">
          {src && <Avatar src={src} />}
          {Icon && <Icon />}
        </div>
        <div className="sideBarItems">
          {title}
        </div>
      </div>
    );
}

export default SidebarRow
