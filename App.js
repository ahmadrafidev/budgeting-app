import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { config } from "@gluestack-ui/config"
import { GluestackUIProvider } from "@gluestack-ui/themed"

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your test!</Text>
        <StatusBar style="auto" />
      </View>
    </GluestackUIProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
