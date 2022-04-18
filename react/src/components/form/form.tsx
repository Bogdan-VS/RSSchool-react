import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Card } from './components/Card';
import { InputText } from './components/InputText';
import { InputDate } from './components/InputDate';
import { Select } from './components/Select/Select';
import { InputCheckbox } from './components/InputCheckbox';
import { InputRadio } from './components/InputRadio';
import { InputFile } from './components/InputFile';

import styles from './Form.module.scss';

const { wrapper, formContainer, cardContainer } = styles;

type FormFiles = {
  firstname: string;
  date: string;
  country: string;
  newsLetter: string;
  gender: string;
  file?: FileList;
  fileUrl?: string;
};

export const Form = () => {
  const [cardCollection, setCardCollection] = useState<FormFiles[]>([]);
  const cardId = { id: 100 };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormFiles>({ mode: 'onBlur' });

  const onSubmit = handleSubmit(
    ({ firstname, date, country, newsLetter, gender, file }) => {
      const currentImage: string =
        file!.length > 0
          ? URL.createObjectURL(file![0])
          : 'https://cdn.dribbble.com/users/20883/screenshots/2381093/evgeniy-artsebasov-developer-icon.png';

      const currentData = [
        ...cardCollection,
        {
          firstname,
          date,
          country,
          newsLetter,
          gender,
          fileUrl: currentImage,
        },
      ];

      setCardCollection(currentData);
      reset();
    }
  );

  return (
    <div className={wrapper}>
      <form className={formContainer} onSubmit={onSubmit}>
        <InputText
          register={{
            ...register('firstname', {
              required: 'invalid value',
              minLength: {
                value: 5,
                message: 'Count of letters has to more than 5',
              },
            }),
          }}
          errors={errors}
        />
        <InputDate
          register={{
            ...register('date', {
              required: 'Date is required',
              pattern: {
                value:
                  /(19|20)\d\d-((0[1-9]|1[012])-(0[1-9]|[12]\d)|(0[13-9]|1[012])-30|(0[13578]|1[02])-31)/,
                message: 'Date is uncorrect',
              },
            }),
          }}
          errors={errors}
        />
        <Select register={{ ...register('country') }} />
        <InputCheckbox register={{ ...register('newsLetter') }} />
        <InputRadio
          register={{
            ...register('gender', { required: 'Gender is required' }),
          }}
          errors={errors}
        />
        <InputFile register={{ ...register('file') }} />
        <input
          type="submit"
          value="Submit"
          id="form-submit"
          disabled={!isValid}
        />
      </form>
      <div className={cardContainer}>
        {cardCollection.map((items: FormFiles) => {
          return <Card {...items} key={cardId.id++} />;
        })}
      </div>
    </div>
  );
};
