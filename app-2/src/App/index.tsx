import React from 'react';
import RandomPet from '../components/RandomPet';
import s from './styles.module.css';

export default () => { 
  const [count, setCount] = React.useState(0);

  return (
    <div className={s.appRoot}>
      <React.Suspense fallback="Loading header...">
        <div className={s.appHeader}>
          <h1>app 2</h1>
          <RandomPet iteration={count} />
          <button onClick={() => setCount(count + 1)}>Refresh</button>
        </div>
      </React.Suspense>
    </div>
  )
}