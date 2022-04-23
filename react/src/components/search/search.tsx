import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useGlobalProps } from '../AppContext/AppContext';

import styles from './Search.module.scss';

const { wrapper, item, btn } = styles;

export const Search = () => {
  const [label, setLabel] = useState('');

  const { getLabel } = useGlobalProps();

  const refSearch = useRef<HTMLInputElement>(null);

  const searchItem = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter') {
      getLabel!(label);
    }
  };

  useEffect(() => {
    const label = localStorage.getItem('label');

    if (label) {
      refSearch.current!.value = label;
    }
  });

  useEffect(() => {
    return () => {
      localStorage.setItem('label', label);
    };
  }, [label]);

  return (
    <form action="search" onSubmit={(e: FormEvent) => e.preventDefault()}>
      <div className={wrapper}>
        <input
          className={item}
          type="search"
          name="search"
          id="search"
          ref={refSearch}
          onChange={searchItem}
        />
        <button
          className={btn}
          onClick={() => getLabel!(label)}
          onKeyDown={() => onKeyDown}
        >
          Search
        </button>
      </div>
    </form>
  );
};
