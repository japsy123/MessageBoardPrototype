import { Stack, Text } from '@fluentui/react';
import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import { messageListStyles } from './MessageList.styles';

interface rootState {
    channels: [];
    isLoading: boolean;
}

interface IMessageListProps {
    activeChannel?: number
}

const MessageList = (props: IMessageListProps): JSX.Element => {
 const {activeChannel} = props
 const channelsData: any = useSelector((state: rootState) => state.channels)
 const messageList = channelsData[activeChannel as number].content
 const styles = messageListStyles()
 console.log(channelsData)
 console.log(`MessageList ${messageList.length}`)
 return <>
     {messageList && messageList.length >= 1 && messageList.map((message:any, id:number)=> <Text styles={styles.messageStyles} key={id}>{message.message}</Text>)}
     </>
}

export default MessageList;