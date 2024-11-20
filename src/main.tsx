import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/app/App.tsx'
import { Provider } from "react-redux";
import store from './store';

const root = document.getElementById('root');

if (!root) throw new Error('Cant find root div!');

createRoot(root!).render(
  <StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </StrictMode>,
)
