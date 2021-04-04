import { IStackStyles, IStyle } from "@fluentui/react"

export interface IMessagePanelStyles {
    panelContainer: IStackStyles;
}


 export const messagePanelStyles = (): IMessagePanelStyles  => {

    return {
        panelContainer: {
           root: {
               display: 'flex',
               flexDirection: 'column',
               backgroundColor: '#e1dfdd',
               width: '100%'
           }
        }
    }
}