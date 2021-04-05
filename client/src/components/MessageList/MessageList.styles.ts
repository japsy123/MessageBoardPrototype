import { IStackStyles, IStyle, ITextStyles } from "@fluentui/react"

export interface IMessageListStyles {
    panelContainer: IStackStyles;
    messageStyles: ITextStyles;
}


 export const messageListStyles = (): IMessageListStyles  => {

    return {
        panelContainer: {
           root: {
               display: 'flex',
               flexDirection: 'column',
               backgroundColor: '#e1dfdd'
           }
        },
        messageStyles: {
            root: {
                display: 'flex',
                selectors: {
                    'div span': {
                        backgroundColor: 'red',
                        border:'1px solid grey',
                       }
                }

            }
        }
    }
}