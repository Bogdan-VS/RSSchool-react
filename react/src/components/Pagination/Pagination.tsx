import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useGlobalProps } from '../AppContext/AppContext';

type IPaginationForm = {
  page: string;
};

export const Pagination = () => {
  const {
    state: { info, pageNumber },
    getPageNumber,
  } = useGlobalProps();

  const { pages, next, prev, count } = info!;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPaginationForm>();

  const submit = handleSubmit((data: IPaginationForm) => {
    getPageNumber!(Number(data.page));
  });

  const openPrevPage = useCallback(() => {
    getPageNumber!(pageNumber - 1);
  }, [pageNumber]);

  const openNextPage = useCallback(() => {
    getPageNumber!(pageNumber + 1);
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
