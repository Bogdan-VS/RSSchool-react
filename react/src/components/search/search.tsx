import React, { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useGlobalProps } from '../AppContext/AppContext';

import styles from './Search.module.scss';

const { wrapper, item, btn, subWrapper, genderContainer } = styles;

type ISearchForm = {
  value: string;
  male: string;
  female: string;
  genderless: string;
  unknown: string;
};

export const Search = () => {
  const [label, setLabel] = useState('');

  const { getSearchProps } = useGlobalProps();

  const { register, handleSubmit, setValue } = useForm<ISearchForm>();

  const submit = handleSubmit(
    ({ value, male, female, genderless, unknown }) => {
      const searchData = {
        value,
        male: male ? 'male' : '',
        female: female ? 'female' : '',
        genderless: genderless ? 'genderless' : '',
        unknown: unknown ? 'unknown' : '',
      };

      getSearchProps!(searchData);
    }
  );

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter') {
      submit();
    }
  };

  useEffect(() => {
    const labelStore = localStorage.getItem('label');

    if (labelStore) {
      setValue('value', labelStore);
    }
  }, []);

  useEffect(() => {
    return () => {
      localStorage.setItem('label', label);
    };
  }, [label]);

  return (
    <form action="search" onSubmit={submit}>
      <div className={wrapper}>
        <input
          className={item}
          type="search"
          {...register('value', {
            onChange: (e: ChangeEvent<HTMLInputElement>) =>
              setLabel(e.target.value),
          })}
        />
        <button className={btn} onKeyDown={() => onKeyDown}>
          Search
        </button>
      </div>
      <div className={subWrapper}>
        <h4>Gender</h4>
        <div className={genderContainer}>
          <label htmlFor="male">
            Male
            <input type="checkbox" id="male" {...register('male')} />
          </label>
          <label htmlFor="female">
            Female
            <input type="checkbox" id="female" {...register('female')} />
          </label>
          <label htmlFor="female">
            Genderless
            <input
              type="checkbox"
              id="genderless"
              {...register('genderless')}
            />
          </label>
          <label htmlFor="unknown">
            Unknown
            <input type="checkbox" id="unknown" {...register('unknown')} />
          </label>
        </div>
      </div>
    </form>
  );
};
