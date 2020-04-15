import React, { FC } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import BottomTabs from './components/BottomNavigation';
import StatusBar from './components/StatusBar'

interface IMainProps { }

const Main: FC<IMainProps> = props => {
    return (
        
        <NavigationContainer>
             <StatusBar backgroundColor="#00dc00" barStyle="light-content" />
            <BottomTabs />
        </NavigationContainer>
        
    );
};

export default Main;
