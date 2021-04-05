import { Stack } from '@fluentui/react'
import React, { useState, useEffect } from 'react'
import MessagePanel from '../MessagePanel/MessagePanel'
import {dashboardStyles} from './Dashboard.styles'
import { useDispatch, useSelector } from "react-redux";

interface rootState {
    channels: [];
    isLoading: boolean;
}
interface IDashboardProps {
    channelList?: []
}

const Dashboard = (props: IDashboardProps): JSX.Element => {

 const dispatch = useDispatch()
 const [homeScreen, setHomeScreen] = useState(true)
 const [activeChannel, setActiveChannel] = useState<any>(null)
 const styles = dashboardStyles();
 const channelsData = useSelector((state: rootState) => state.channels)
 useEffect(()=> {
    dispatch({type :"CHANNEL_LOAD"})
 },[dispatch])

 function onChannelLink(eventObj: any, channelId: number, channelName: string) {
    setHomeScreen(false);
    console.log(channelName)
    dispatch({type: 'CHANNEL_MESSAGE_LOAD', payload: channelName})
    setActiveChannel(channelId)
 }

 return <Stack styles={styles.dashboardContainer} horizontal >
        <Stack styles={styles.channels} >
           {channelsData.length && channelsData.map((channel: any,id: any) => {
               return <button onClick={(e)=> onChannelLink(e,id, channel.metaName)}
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