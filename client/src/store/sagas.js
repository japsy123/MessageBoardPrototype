import {takeEvery, put, spawn, call} from 'redux-saga/effects'

export function fetchAllChannels() {
     return fetch('/channels').then(res=> res.json())
};

function fetchChannelMessages(channelName) {
    return fetch(`/messages/${channelName}`).then(res=> res.json())

}

function sendChannelMessage(channelData) {

    return fetch(`/${channelData.channelName}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({message: channelData.message})
    }).then(res => res.json())
}

function* channelLoadAsync() {
    const response = yield call(fetchAllChannels)
    yield put({type: 'CHANNEL_LOAD_ASYNC', payload: {
        channels: response,
        isLoading: false
    }})
}

function* channelMessageLoadAsync(action) {
    const response = yield call(fetchChannelMessages,action.payload)
    yield put({type: 'CHANNEL_MESSAGE_ASYNC', payload: {
        channelContent: response,
        channelName: action.payload
    }})
}

function* channelMessageSentAsync(action) {
    const response = yield call(sendChannelMessage,action.payload)
    yield put({type: 'SEND_MESSAGE_ASYNC', payload: {
        message: response,
        channelName: action.payload.channelName
    }})
}


export function* watchChannelLoadAsync() {
    yield takeEvery("CHANNEL_LOAD", channelLoadAsync)
}

export function* watchChannelMessageLoadAsync() {
    yield takeEvery("CHANNEL_MESSAGE_LOAD", channelMessageLoadAsync)
}

export function* watchChannelMessageSentAsync() {
    yield takeEvery("SEND_MESSAGE", channelMessageSentAsync)
}

export default function* rootSaga() {
    yield spawn(watchChannelLoadAsync)
    yield spawn(watchChannelMessageLoadAsync)
    yield spawn(watchChannelMessageSentAsync)
}
