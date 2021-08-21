import React from 'react';
import { myFetch } from '../../api';
import { APIResponse, APIResponseStatus } from '../../api/types';
import s from './styles.module.css';
import { RandomPetsProps } from './types';

const RandomPet = (props: RandomPetsProps) => {
  const { iteration } = props;
  const [ dogImageUrl, setDogImageUrl ] = React.useState<string>();

  React.useEffect(() => {
    const fetchData = async () => {
      const result:APIResponse = await myFetch(
        'https://dog.ceo/api/breeds/image/random',
        'message'
      );
      if (result.status === APIResponseStatus.OK) {
        setDogImageUrl(`${result.data}`);
      } else {
        console.error("Something failed", result);
      }
    };
    fetchData();
  }, [iteration]);

  return (
    <div className={s.home}>
      <div className={s.content}>
        <div className={s.cat}>
          <img width="200px" src={`https://cataas.com/cat/${iteration}`} />
        </div>
        <div className={s.dog}>
          <img
            width="200px"
            src={dogImageUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default RandomPet;