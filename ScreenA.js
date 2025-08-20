import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ScreenA({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ScreenA</Text>
      <Button
        title="Go to B"
        onPress={() =>
          navigation.navigate('B', {
            itemId: 86,
            message: 'Hello from ScreenA',
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
  },
  title: {
    fontSize: 24, marginBottom: 20,
  },
});
