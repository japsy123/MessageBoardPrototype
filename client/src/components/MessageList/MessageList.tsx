import { Stack } from '@fluentui/react';
import React from 'react'
import { messageListStyles } from './MessageList.styles';

interface IMessageListProps {
    messageList?: []
}

const MessageList = (props: IMessageListProps): JSX.Element => {

 const styles = messageListStyles()
 return <Stack>
     'This is the MessageList'
    </Stack>
}

export default MessageList;