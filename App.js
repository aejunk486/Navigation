import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';

// สร้างหน้าต่าง ๆ ที่จะใช้ใน Stack
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>🏠 หน้าหลัก (Home)</Text>
      <Button
        title="ไปหน้ารายละเอียด"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>📄 หน้ารายละเอียด (Details)</Text>
      <Button title="ย้อนกลับ" onPress={() => navigation.goBack()} />
    </View>
  );
}

// สร้าง Stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* กำหนดชื่อ route และ component */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'รายละเอียดเพิ่มเติม' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
