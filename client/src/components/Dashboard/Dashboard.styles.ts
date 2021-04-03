import { IStackStyles } from "@fluentui/react"

export interface IDashboardStyles {
    dashboardContainer: IStackStyles;
}


 export const dashboardStyles = (): IDashboardStyles  => {

    return {
        dashboardContainer: {
           root: {
               backgroundColor: 'grey'
           }
        }
    }
}