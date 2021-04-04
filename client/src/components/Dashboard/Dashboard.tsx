import { Stack } from '@fluentui/react'
import React, { useState, useEffect } from 'react'
import Editor from '../Editor/Editor'
import MessageList from '../MessageList/MessageList'
import MessagePanel from '../MessagePanel/MessagePanel'
import {dashboardStyles} from './Dashboard.styles'

interface IDashboardProps {
    channelList?: []
}

const Dashboard = (props: IDashboardProps): JSX.Element => {

 const [channels, setChannels] = useState([]);
 const [homeScreen, setHomeScreen] = useState(true)
 const [activeChannel, setActiveChannel] = useState<any>(null)
 const styles = dashboardStyles();

 useEffect(()=> {
    async function getChannels(){
        const response = await fetch('/channels');

        const channels = await response.json()
        setChannels(channels)
    }
    getChannels()
 },[])

 function onChannelLink(eventObj: any, channelId: number) {
    setHomeScreen(false);
    async function getChannelContent() {
        const response = await fetch(`/messages/${channelId}`)
        console.log(response)
    }
    getChannelContent()
    setActiveChannel(channelId)
 }

 return <Stack styles={styles.dashboardContainer} horizontal >
        <Stack styles={styles.channels} >
           {channels.length && channels.map((channel: any,id) => {
               return <button onClick={(e)=> onChannelLink(e,id)}
               className={id === activeChannel ? 'selected' : ''} key={id}>{channel.channelName}</button>
           })}
         </Stack>
         <div style={{position: 'relative', width:'100%', backgroundColor:'#e1dfdd', display: 'flex', alignItems: 'flex-end', justifyContent:'flex-start'}}>
            {!homeScreen ? <MessagePanel/> :
            <div>Welcome</div>}
        </div>
     </Stack>
}

export default Dashboard;