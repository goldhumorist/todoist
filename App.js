import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeСategoryScreen from "./screens/HomeСategoryScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TasksScreen from "./screens/TasksScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{
            title: "My categories",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#aed6fc",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="Сategories"
          component={HomeСategoryScreen}
        />
        <Stack.Screen
          options={{
            title: "My Profile",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen
          options={{
            title: "Tasks",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#aed6fc",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="Tasks"
          component={TasksScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
