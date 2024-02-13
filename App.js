import * as Sentry from '@sentry/react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { config } from "@gluestack-ui/config"
import { GluestackUIProvider } from "@gluestack-ui/themed"

function App() {
  return (
    <GluestackUIProvider config={config}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </GluestackUIProvider>
  );

Sentry.init({
  dsn: 'https://ac90a3312bd41d1ec0c32f5474941498@o4506642306301952.ingest.sentry.io/4506642307481600',
  racesSampleRate: 1.0,
});
}

export default Sentry.wrap(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
