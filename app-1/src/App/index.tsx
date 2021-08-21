import React from 'react';
import s from './styles.module.css';
import Counter from '../components/Counter';
export default () => (
  <div className={s.appRoot}>
    <React.Suspense fallback="Loading header...">
      <div className={s.appHeader}>
        <h1>app 1</h1>
        <Counter />
      </div>
    </React.Suspense>
  </div>
);