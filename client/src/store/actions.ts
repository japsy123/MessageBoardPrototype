// sendMessage

interface IMessage {
    userId: string,
    content: string,
    channelId: string,
}
export const sendMessage =(message:IMessage) => {
    return {
        type: 'SEND_MESSAGE',
        payload: {
            userId: message.userId,
            channelId: message.channelId,
            message: message.content
        }
    }
}
// loadChannels
export const loadChannels = () => {
    return {
        type: 'LOAD_CHANNELS',
        payload: {

        }
    }
}
// loadChannelMessage
