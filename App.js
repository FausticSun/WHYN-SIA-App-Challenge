import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { AppLoading } from 'expo';
import { PersistGate } from 'redux-persist/es/integration/react';
import RootNavigation from './app/navigation/RootNavigation';
import { persistor, store } from './app/config/configureStore';
import { client } from './app/config/configureApollo';

const App = () => (
  <PersistGate
    persistor={persistor}
    loading={<AppLoading />}
    >
    <ApolloProvider store={store} client={client}>
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        {Platform.OS === 'android' &&
          <View style={styles.statusBarUnderlay} />}
        <RootNavigation />
      </View>
    </ApolloProvider>
  </PersistGate>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

export default App;