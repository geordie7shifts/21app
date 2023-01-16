import { StatusBar } from 'expo-status-bar';
import { Alert, BackHandler } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from './src/components/Router';
import { configureStore } from './src/store/configureStore';


export default function App() {

  const { store, persistor } = configureStore();


  const handleBack = e => {
    Alert.alert('Hold on!', 'Are you sure you want to exit?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      { text: 'YES', onPress: () => BackHandler.exitApp() },
    ]);
    return true;
  };

  BackHandler.addEventListener('hardwareBackPress', handleBack);


  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={undefined}>
        <Router />
        <StatusBar style="auto" />
      </PersistGate>
    </Provider>
  );
}

