import { IStackStyles, IStyle } from "@fluentui/react"

export interface IEditorStyles {
    panelContainer: IStackStyles;
}


 export const editorStyles = (): IEditorStyles  => {

    return {
        panelContainer: {
           root: {
               width: '100%',
               backgroundColor: '#e1dfdd'
           }
        }
    }
}