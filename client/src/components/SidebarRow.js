import { Avatar } from '@material-ui/core'
import React from 'react'
import { Avatar } from "@material-ui/core";
function SidebarRow({title, src, Icon}) {
    return (
        <div>
            {src && <Avatar src={src} />} 
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
