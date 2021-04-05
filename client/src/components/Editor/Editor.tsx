import React, { Component, useState } from 'react'
import { Stack } from '@fluentui/react'
import { editorStyles } from './Editor.styles'

interface IEditorProps {
    currentChannelText: string;
    updateText: (e:any) => void;
}

const Editor = (props: IEditorProps): JSX.Element => {

 const {currentChannelText, updateText} = props
 const handleOnChange = (e:any) => {
     updateText(e.target.value)
 }

 const clearInput = () => {
    updateText('')
 }

 const handleOnSubmit = () => {
    clearInput()
 }

 const styles = editorStyles()

 return <Stack styles={styles.panelContainer} horizontal>
            <input type='text' value={currentChannelText} onChange={handleOnChange} style={{width: '70%'}}></input>
            <button style={{width: '30%'}} disabled={currentChannelText ? false : true} onClick={handleOnSubmit}>Send</button>
        </Stack>
}

export default Editor;