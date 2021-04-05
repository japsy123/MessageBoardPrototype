import { act } from "react-dom/test-utils";

const initialState = {
    channels: [],
    isLoading: true
}
export default function channelsReducer(state = initialState, action: any) {
    switch(action.type) {
        case 'SEND_MESSAGE_ASYNC':
            return {
                ...state,
                channels: state.channels.map((channel:any) => {
                    if(channel.metaName === action.payload.channelName) {
                        return {
                            ...channel,
                            content: [...channel.content, ...action.payload.message]
                        }
                    }
                    return channel;
                })
            }
        case 'CHANNEL_LOAD_ASYNC':
            return {
                ...state,
                channels: action.payload.channels,
                isLoading: false
            }
        case 'CHANNEL_MESSAGE_ASYNC':
                return {
                    ...state,
                    channels: state.channels.map((channel:any) => {
                        if(channel.metaName === action.payload.channelName) {
                           return {...channel, content: [...action.payload.channelContent]}
                        }
                        return channel;
                    })
                }
        default: return state;
    }
}