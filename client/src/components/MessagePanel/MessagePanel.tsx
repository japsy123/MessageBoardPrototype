import { Stack } from '@fluentui/react'
import React, { useState, useEffect } from 'react'
import Editor from '../Editor/Editor'
import MessageList from '../MessageList/MessageList'
import {messagePanelStyles} from './MessagePanel.styles'

interface IMessagePanelProps {
    channelList?: []
}

const MessagePanel = (props: IMessagePanelProps): JSX.Element => {


 const styles = messagePanelStyles();

 useEffect(()=> {

 },[])



 return <Stack styles={styles.panelContainer} >
        <MessageList/>
        <Editor/>
     </Stack>
}

export default MessagePanel;