import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/Home';
import OpretorHome from '../screens/OpretorHome';
import PlayerHome from '../screens/PlayerHome';

const screens={
    Home:{
        screen:Home
    },
    OpretorHome:{
        screen:OpretorHome
    },
    PlayerHome:{
        screen:PlayerHome
    }
}


const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);