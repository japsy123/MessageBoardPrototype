import React, { Component } from 'react'
import { Stack } from '@fluentui/react'
import { editorStyles } from './Editor.styles'

interface IEditorProps {
    message?: string;
}

const Editor = (props: IEditorProps): JSX.Element => {

 const styles = editorStyles()

 return <Stack styles={styles.panelContainer} horizontal>
            <input type='text' style={{width: '70%'}}></input>
            <button style={{width: '30%'}}>Send</button>
        </Stack>
}

export default Editor;