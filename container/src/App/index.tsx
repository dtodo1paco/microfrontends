import React from 'react';
//@ts-ignore
import App1Counter from 'app1/Counter';
//@ts-ignore
import App2RandomPet from 'app2/RandomPet';
import s from './styles.module.css';

export default () => (
  <div className={s.appRoot}>
    <React.Suspense fallback="Loading header...">
      <div className={s.appHeader}>
        <h1>CONTAINER</h1>
        <div className={s.appContainer}>
          <div className={s.otherFrontend}>
            <h2>APP-1</h2>
            <App1Counter />
          </div>
          <div className={s.otherFrontend}>
            <h2>APP-2</h2>
            <App2RandomPet iteration={1} />
          </div>
        </div>
      </div>
    </React.Suspense>
  </div>
);