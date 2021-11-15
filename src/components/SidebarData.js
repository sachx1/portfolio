import React from 'react'
import * as FaIcons from "react-icons/fa"; //saves time
import * as AiIcons from "react-icons/ai"; //saves time
import * as IoIcons from "react-icons/io"; //saves time

export const SidebarData = [
    {
    title: 'Home', 
    path: '/', 
    icon: <AiIcons.AiFillHome />, 
    cName: 'nav-text', //cName is short for className
    }, 

    {
        title: 'Projects', 
        path: '/projects', 
        icon: <IoIcons.IoIosPaper />, 
        cName: 'nav-text', //cName is short for className
    }, 
]