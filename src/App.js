import Main from './components/MainComponent';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider} from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { fetchAssets } from './redux/ActionCreators';
import './App.css';

const store = ConfigureStore();

store.dispatch(fetchAssets());

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
