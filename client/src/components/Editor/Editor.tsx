import React, { Component, useState } from 'react'
import { Stack } from '@fluentui/react'
import { editorStyles } from './Editor.styles'
import { useDispatch, useSelector } from "react-redux";

interface rootState {
     channels: [];
     isLoading: boolean;
 }

interface IEditorProps {
    currentChannelText: string;
    updateText: (e:any) => void;
    activeChannel: number;
}

const Editor = (props: IEditorProps): JSX.Element => {

 const dispatch = useDispatch()
 const channels: any = useSelector((state: rootState) => state.channels)

 const {currentChannelText, activeChannel, updateText} = props
 const handleOnChange = (e:any) => {
     updateText(e.target.value)
 }

 const clearInput = () => {
    updateText('')
 }

 const handleOnSubmit = () => {
     const currentChannel = channels[activeChannel].metaName
     console.log('dispatching')
    dispatch({type: 'SEND_MESSAGE', payload: {channelName: currentChannel, message: currentChannelText}})
    console.log('afterr')

    clearInput()
 }

 const styles = editorStyles()

 return <Stack styles={styles.panelContainer} horizontal>
            <input type='text' value={currentChannelText} onChange={handleOnChange} style={{width: '70%'}}></input>
            <button style={{width: '30%'}} disabled={currentChannelText ? false : true} onClick={handleOnSubmit}>Send</button>
        </Stack>
}

export default Editor;