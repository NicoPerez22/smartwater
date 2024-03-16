import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './home';
import { Pressable } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();


export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTintColor: "#340068",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontWeight: "bold"
                    },
                    headerLeft: () => {
                        return(
                            <Pressable>
                                <FontAwesome6 name="bars" size={24} color="#340068" />
                            </Pressable>
                        )
                    }
                }}
            >
                <Stack.Screen name="SMARTWATER" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}