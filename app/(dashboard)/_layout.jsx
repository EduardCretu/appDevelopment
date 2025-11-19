import { Tabs } from "expo-router"
import { useColorScheme } from "react-native"
import { colors } from '../../constants/colors'
import { Ionicons } from '@expo/vector-icons'

const DashboardLayout = () => {
    const colorScheme = useColorScheme()
    const theme = colors[colorScheme] ?? colors.light
  return (
      <Tabs screenOptions={{headerShown:false, tabBarStyle: {
          backgroundColor: theme.navBackground,
          paddingTop: 10,
          paddingBottom: 0,
          height:100,
          paddingRight: 3// centers my shit do not remove (my own coconut)
      },
      tabBarItemStyle: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      tabBarActiveTintColor: theme.iconColourFocused,
      tabBarInactiveTintColor: theme.iconColour,
      }}

      >
        <Tabs.Screen name='profile' options={{title:'Me', tabBarIcon: ({focused}) => (
            <Ionicons
              size={focused ? 28 : 24}
              color={focused ? theme.iconColourFocused : theme.iconColour}
              name="person"
            />   
          )}} 
        />
        <Tabs.Screen name="create" options={{title:'Create', tabBarIcon: ({focused}) => (
            <Ionicons
              size={focused ? 32 : 28}
              color={focused ? theme.iconColourFocused : theme.iconColour}
              name="add"
            />   
          )}} 
        />
        <Tabs.Screen name='books'
          options={{title:'Bookmarks', tabBarIcon: ({focused}) => (
            <Ionicons
              size={focused ? 28 : 24}
              color={focused ? theme.iconColourFocused : theme.iconColour}
              name="bookmark"
            />   
          )}} 
        />
        

      </Tabs>
  )
}

export default DashboardLayout