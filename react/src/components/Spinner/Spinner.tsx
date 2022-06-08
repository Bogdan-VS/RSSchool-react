import styles from './Spinner.module.scss';

const { loadingioSpinnerDoubleRing, ldio } = styles;

export const Spinner = () => {
  return (
    <div className={loadingioSpinnerDoubleRing}>
      <div className={ldio}>
        <div></div>
        <div></div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
