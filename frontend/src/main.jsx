import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './Redux/Store.js'; // Import the persistor from the Store
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <PersistGate persistor={persistor}> {/* Use persistor instead of persister */}
        <App />
      </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
