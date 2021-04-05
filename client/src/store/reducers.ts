import { act } from "react-dom/test-utils";

const channelsData = []

const initialState = {
    channels: [],
    isLoading: true
}
export default function channelsReducer(state = initialState, action: any) {
    switch(action.type) {
        case 'SEND_MESSAGE':
            return {
                channels: state.channels.map((channel:any) => {
                    if(channel.id === action.payload.channelID) {
                        return {
                            ...channel,
                            channelContent: {
                                messages: [...channel.channelContent.messages, action.payload]
                            }
                        }
                    }
                    return channel;
                })
            }
        case 'CHANNEL_LOAD_ASYNC':
            return {
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