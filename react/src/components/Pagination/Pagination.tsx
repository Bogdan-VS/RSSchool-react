import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { getPageNumber } from '../../store/cardsSlice';
import { IState } from '../../store/type';

type IPaginationForm = {
  page: string;
};

export const Pagination = () => {
  const {
    info: { pages, next, prev },
    pageNumber,
  } = useSelector((state: { cards: IState }) => state.cards);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPaginationForm>();

  const submit = handleSubmit((data: IPaginationForm) => {
    dispatch(getPageNumber(Number(data.page)));
  });

  const openPrevPage = useCallback(() => {
    dispatch(getPageNumber(pageNumber - 1));
  }, [pageNumber]);

  const openNextPage = useCallback(() => {
    dispatch(getPageNumber(pageNumber + 1));
  }, [pageNumber]);

  return (
    <div>
      <div>
        <ul>
          <li>
            Page number: <span>{pageNumber}</span>
          </li>
          <li>
            Page count: <span>{pages}</span>
          </li>
          <form onSubmit={submit}>
            <label htmlFor="page">
              Search page
              <input
                type="number"
                id="page"
                {...register('page', {
                  required: 'uncorrect page number',
                  min: 1,
                  max: pages,
                })}
                {...(errors.page && <div>{errors.page.message}</div>)}
              />
            </label>
            <input type="submit" value="Search" />
          </form>
        </ul>
      </div>
      <div>
        <button disabled={prev ? false : true} onClick={openPrevPage}>
          Prev
        </button>
        <button disabled={next ? false : true} onClick={openNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};
