import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './src/store/gallery/reducers';
import rootSaga from './src/store/root-saga';
import PhotoListScreen from './src/screens/photo-list-screen';
import PhotoScreen from './src/screens/photo-screen';
import thunk from 'redux-thunk';
import { RootStackParamList } from "./src/types/navigation";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, thunk));
sagaMiddleware.run(rootSaga);

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="PhotoList" component={PhotoListScreen} />
                    <Stack.Screen name="Photo" component={PhotoScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
