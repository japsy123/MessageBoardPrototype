import { IButtonStyles, IStackStyles, IStyle } from "@fluentui/react"

export interface IDashboardStyles {
    dashboardContainer: IStackStyles;
    channels: IStackStyles;
    channelLinks: IStyle;
    buttonStyles: IButtonStyles;
    welcome: IStackStyles;
}


 export const dashboardStyles = (): IDashboardStyles  => {

    return {
        dashboardContainer: {
           root: {
               backgroundColor: "#ee9889",
               width: "100vw",
               height: "100vh",
               '& button': {
                    height: '100px',
                    borderRadius: '3px',
                    borderStyle: 'none',
                    borderBottom: '1px solid grey'
               },
               '.selected': {
                backgroundColor: '#ff8c00'
            }
           }
        },
        channels: {
            root: {
                width: '30%'
            }
         },
         channelLinks: {
             root: {
                 height: '150px',
                 width: '100px'
             }
         },
         buttonStyles: {
             root: {
                 backgroundColor: 'red'
             }
         },
         welcome: {
             root: {
                 width: '100%',
                 height: '100%',
                 justifyContent: 'center',
                 alignItems: 'center',
                 fontSize: '45px'
             }
         }
    }
}