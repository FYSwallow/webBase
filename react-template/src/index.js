import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css' // 初始化css
import 'antd/dist/antd.css'
import PageWarpper from './layout/index'
import * as serviceWorker from './serviceWorker';

// antd汉化
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

ReactDOM.render(
  <React.StrictMode locale={zhCN}>
    <PageWarpper />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
