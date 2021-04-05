import {takeEvery, put, spawn, call, takeLatest} from 'redux-saga/effects'

export function fetchAllChannels() {

     return fetch('/channels').then(res=> res.json())
  };



function fetchChannelMessages(channelName) {
    return fetch(`/messages/${channelName}`).then(res=> res.json())

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
    console.log(response)
    yield put({type: 'CHANNEL_MESSAGE_ASYNC', payload: {
        channelContent: response,
        channelName: action.payload
    }})
}


export function* watchChannelLoadAsync() {
    yield takeEvery("CHANNEL_LOAD", channelLoadAsync)
}

export function* watchChannelMessageLoadAsync() {
    yield takeLatest("CHANNEL_MESSAGE_LOAD", channelMessageLoadAsync)
}

export default function* rootSaga() {
    yield spawn(watchChannelLoadAsync)
    yield spawn(watchChannelMessageLoadAsync)
}
