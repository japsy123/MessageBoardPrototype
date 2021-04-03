import { Stack } from '@fluentui/react'
import React, { Component } from 'react'
import Editor from '../Editor/Editor'
import MessageList from '../MessageList/MessageList'
import {dashboardStyles} from './Dashboard.styles'

interface IDashboardProps {
    channelList?: []
}

const Dashboard = (props: IDashboardProps): JSX.Element => {

 const styles = dashboardStyles();

 return <Stack style={styles.dashboardContainer}>
        <div>
            <button>Channel1</button>
            <button>Channel2</button>
            <button>Channel3</button>
         </div>
         <div>
            <div><MessageList/></div>
            <div><Editor/></div>
        </div>
     </Stack>
}

export default Dashboard;