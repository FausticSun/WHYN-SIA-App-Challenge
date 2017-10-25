import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Container, Header, Content, Footer } from 'native-base';
import { ApolloProvider } from 'react-apollo';
import { AppLoading, Asset, Font, Constants } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { PersistGate } from 'redux-persist/es/integration/react';
import RootNavigation from './app/navigation/RootNavigation';
import { persistor, store } from './app/config/configureStore';
import { client } from './app/config/configureApollo';

class App extends React.Component {
  state = {
    isLoading: true,
  };

  render() {
    return (
      this.state.isLoading ?
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={console.warn}
          onFinish={() => this.setState({ isLoading: false })}
        />
      :
        <PersistGate
          persistor={persistor}
          loading={<AppLoading />}
        >
          <ApolloProvider store={store} client={client}>
            <RootNavigation />
          </ApolloProvider>
        </PersistGate>
    )
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
        require('./assets/images/sia-logo.jpg'),
      ]),
      Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
      }),
    ]);
  };
}

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
