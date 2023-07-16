import  React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { TabRoutes } from './TabRouter'; 


export function Routes(){
    return(
        <NavigationContainer>
            <TabRoutes/>
        </NavigationContainer>
    )
}