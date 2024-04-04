import ReactDOM from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import DefaultLayout from './Layout/DefaultLayout/index.tsx';
import './index.css';
import { ConfigProvider } from 'antd';
import ThemeConfigProvide from './Theme/theme.config.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <Provider store={store}>
      <ConfigProvider theme={ThemeConfigProvide}>
        <DefaultLayout />
      </ConfigProvider>
    </Provider>
  </React.Fragment>
)
