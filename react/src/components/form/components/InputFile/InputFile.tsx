import styles from './InputFile.module.scss';

const { title, inputWrapper } = styles;

type inputFileProps = {
  register: {
    name: string;
  };
};

export const InputFile: React.FC<inputFileProps> = ({ register }) => {
  const { name } = register;

  console.log();
  return (
    <label className={title} htmlFor="profile_pic">
      Install your avatar
      <input
        className={inputWrapper}
        type="file"
        id="profile_pic"
        accept=".jpg, .jpeg, .png"
        {...register}
      />
    </label>
  );
};
