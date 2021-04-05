import { Stack } from '@fluentui/react'
import React, { useState, useEffect } from 'react'
import MessagePanel from '../MessagePanel/MessagePanel'
import {dashboardStyles} from './Dashboard.styles'
import { useDispatch, useSelector } from "react-redux";

interface rootState {
    channels: [];
    isLoading: boolean;
}

const Dashboard = (): JSX.Element => {

 const dispatch = useDispatch()
 const [homeScreen, setHomeScreen] = useState(true)
 const [activeChannel, setActiveChannel] = useState<any>(null)
 const styles = dashboardStyles();
 const channelsData: any = useSelector((state: rootState) => state.channels)
 useEffect(()=> {
    dispatch({type :"CHANNEL_LOAD"})
 },[dispatch])

 function onChannelLink(eventObj: any, channelId: number, channelName: string) {
    setHomeScreen(false);
    dispatch({type: 'CHANNEL_MESSAGE_LOAD', payload: channelName})
    setActiveChannel(channelId)
 }

 return <Stack styles={styles.dashboardContainer} horizontal >
        <Stack styles={styles.channels} >
           {channelsData && channelsData.length > 1 && channelsData.map((channel: any,id: any) => {
               return <button onClick={(e)=> onChannelLink(e,id, channel.metaName)}
               className={id === activeChannel ? 'selected' : ''} key={id}>{channel.channelName}</button>
           })}
         </Stack>
         <div style={{width:'100%', backgroundColor:'#e1dfdd', display: 'flex', alignItems: 'flex-end', justifyContent:'flex-start'}}>
            {!homeScreen ? <MessagePanel activeChannel={activeChannel}/> :
            <Stack>Welcome</Stack>}
        </div>
     </Stack>
}

export default Dashboard;