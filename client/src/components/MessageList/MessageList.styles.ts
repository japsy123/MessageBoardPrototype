import { IStackStyles, IStyle } from "@fluentui/react"

export interface IMessageListStyles {
    panelContainer: IStackStyles;
}


 export const messageListStyles = (): IMessageListStyles  => {

    return {
        panelContainer: {
           root: {
               display: 'flex',
               flexDirection: 'column',
               backgroundColor: '#e1dfdd'
           }
        }
    }
}