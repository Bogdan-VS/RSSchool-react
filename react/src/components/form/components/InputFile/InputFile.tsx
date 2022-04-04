import styles from './InputFile.module.scss';

const { title, inputWrapper } = styles;

interface Props {
  inputFileRef: React.RefObject<HTMLInputElement>;
}

export const InputFile: React.FC<Props> = ({ inputFileRef }) => {
  return (
    <label className={title} htmlFor="profile_pic">
      Install your avatar
      <input
        className={inputWrapper}
        type="file"
        id="profile_pic"
        name="profile_pic"
        accept=".jpg, .jpeg, .png"
        ref={inputFileRef}
      />
    </label>
  );
};
