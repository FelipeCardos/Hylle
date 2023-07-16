import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialIcons, AntDesign } from '@expo/vector-icons';

import { Home } from '../Pages/Home/Home';
import { Shelves } from '../Pages/Shelves/Shelves';
import { Profile } from '../Pages/Profile/Profile';
import { Search } from '../Pages/Search/Search';


const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {
    return (
        <Navigator>
            <Screen
                name='Hylle'
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name='home'
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Screen
                name='Shelves'
                component={Shelves}
                options={{
                    tabBarLabel: 'Shelves',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name='library-books'
                            color={color}
                            size={size}
                        />
                    ),
                }}

            />
            <Screen
                name='Search'
                component={Search}
                options={{
                    tabBarLabel: 'search',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name='search'
                            color={color}
                            size={size}
                        />
                    ),
                }}

            />
            <Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign
                            name='user'
                            color={color}
                            size={size}
                        />
                    ),
                }}

            />

        </Navigator>
    )
}