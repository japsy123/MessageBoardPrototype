import { Stack, Text } from '@fluentui/react';
import React from 'react'
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
 console.log(messageList)
 const styles = messageListStyles()
 return <Stack>
     {messageList && messageList.length >= 1 && messageList.map((message:any, id:number)=> <Text key={id}>{message.message}</Text>)}
    </Stack>
}

export default MessageList;