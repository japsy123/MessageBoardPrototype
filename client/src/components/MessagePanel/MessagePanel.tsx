import { Stack } from '@fluentui/react'
import React, { useState, useEffect } from 'react'
import Editor from '../Editor/Editor'
import MessageList from '../MessageList/MessageList'
import {messagePanelStyles} from './MessagePanel.styles'

interface IMessagePanelProps {
    activeChannel?: number
}

const MessagePanel = (props: IMessagePanelProps): JSX.Element => {

 const {activeChannel} = props
 const styles = messagePanelStyles();

 return <Stack styles={styles.panelContainer} >
        <MessageList activeChannel={activeChannel}/>
        <Editor/>
     </Stack>
}

export default MessagePanel;