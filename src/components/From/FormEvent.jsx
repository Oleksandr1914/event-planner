import {
  ContainerForm,
  ContainerInputBox,
  Description,
  IconInput,
  Input,
  InputBox,
  Labal,
  SubmitFormButton,
  TextError,
} from './FormEvent.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';
import SelectForm from '../SelectForm/SelectForm';
import { useState } from 'react';
import DatePickerReact from '../DatePicker/DatePickerReact';
import Down from '../../assets/select-down.svg';
import TimePickerComponent from '../TimePicker/TimePicker';
import useEventStore from '../../store';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

const arrayCategory = [
  'Art',
  'Music',
  'Business',
  'Conference',
  'Workshop',
  'Party',
  'Sport',
];

const arrayPriority = ['High', 'Medium', 'Low'];

const FormEvent = () => {
  const [isActiveCategory, setIsActiveCategory] = useState(false);
  const [isActivePriority, setIsActivePriority] = useState(false);
  const [isPriority, setIsPriority] = useState('');
  const [isCategory, setIsCategory] = useState('');
  const [isDate, setIsDate] = useState('');
  const [isTime, setIsTime] = useState('');

  const navigate = useNavigate();

  const addEvent = useEventStore(state => state.addEvent);

  return (
    <ContainerForm>
      <Formik
        initialValues={{ Title: '', Description: '', Location: '' }}
        validationSchema={Yup.object({
          Title: Yup.string()
            .max(25, 'Must be 25 characters or less')
            .required('Invalid input'),
          Description: Yup.string()
            .max(150, 'Must be 150 characters or less')
            .required('Invalid input'),
          Location: Yup.string()
            .max(30, 'Must be 30 characters or less')
            .required('Invalid input'),
        })}
        onSubmit={(values, { resetForm }) => {
          addEvent({
            title: values.Title,
            description: values.Description,
            data: isDate,
            time: isTime,
            location: values.Location,
            category: isCategory,
            picture: 'Default',
            priority: isPriority,
            id: nanoid(),
          });

          setIsPriority('');
          setIsCategory('');
          resetForm();
          navigate('/');
        }}
      >
        {formik => (
          <form onSubmit={formik.handleSubmit}>
            <ContainerInputBox>
              <InputBox className="title">
                <Labal htmlFor="Title">Title</Labal>
                <Input
                  id="Title"
                  type="text"
                  placeholder="Input"
                  className={
                    formik.touched.Title && formik.errors.Title ? 'invalid' : ''
                  }
                  {...formik.getFieldProps('Title')}
                />
                <IconInput
                  onClick={() =>
                    formik.setValues({
                      Title: '',
                      Description: formik.values.Description,
                      Location: formik.values.Location,
                    })
                  }
                  className={
                    formik.touched.Title && formik.errors.Title
                      ? 'red'
                      : 'divider'
                  }
                />

                {formik.touched.Title && formik.errors.Title ? (
                  <TextError>{formik.errors.Title}</TextError>
                ) : null}
              </InputBox>
              <InputBox className="description">
                <Labal htmlFor="Description">Description</Labal>
                <Description
                  id="Description"
                  type="text"
                  placeholder="Input"
                  className={
                    formik.touched.Description && formik.errors.Description
                      ? 'invalid'
                      : ''
                  }
                  {...formik.getFieldProps('Description')}
                />
                <IconInput
                  onClick={() =>
                    formik.setValues({
                      Title: formik.values.Title,
                      Description: '',
                      Location: formik.values.Location,
                    })
                  }
                  className={
                    formik.touched.Description && formik.errors.Description
                      ? 'red'
                      : 'divider'
                  }
                />
                {formik.touched.Description && formik.errors.Description ? (
                  <TextError>{formik.errors.Description}</TextError>
                ) : null}
              </InputBox>
              <InputBox className="location">
                <Labal htmlFor="Location">Location</Labal>
                <Input
                  id="Location"
                  type="text"
                  placeholder="Input"
                  className={
                    formik.touched.Location && formik.errors.Location
                      ? 'invalid'
                      : ''
                  }
                  {...formik.getFieldProps('Location')}
                />
                <IconInput
                  onClick={() =>
                    formik.setValues({
                      Title: formik.values.Title,
                      Description: formik.values.Description,
                      Location: '',
                    })
                  }
                  className={
                    formik.touched.Location && formik.errors.Location
                      ? 'red'
                      : 'divider'
                  }
                />
                {formik.touched.Location && formik.errors.Location ? (
                  <TextError>{formik.errors.Location}</TextError>
                ) : null}
              </InputBox>
              <InputBox className="category">
                <Labal>Category</Labal>
                <SelectForm
                  array={arrayCategory}
                  isActive={isActiveCategory}
                  setIsActive={setIsActiveCategory}
                  isValue={isCategory}
                  setIsValue={setIsCategory}
                />
              </InputBox>
              <InputBox className="picture">
                <Labal className="disabled">Add picture</Labal>
                <Input
                  type="text"
                  className="disabled"
                  placeholder="Input"
                  disabled
                />
                <IconInput className="disabled" />
              </InputBox>

              <InputBox className="date">
                <Labal>Select date</Labal>
                <DatePickerReact setIsDate={setIsDate} />
                <img src={Down} alt="arrow" />
              </InputBox>
              <InputBox className="time">
                <Labal>Select time</Labal>
                <TimePickerComponent setIsTime={setIsTime} />
                <img src={Down} alt="arrow" />
              </InputBox>
              <InputBox className="priority">
                <Labal>Priority</Labal>
                <SelectForm
                  array={arrayPriority}
                  isActive={isActivePriority}
                  setIsActive={setIsActivePriority}
                  isValue={isPriority}
                  setIsValue={setIsPriority}
                />
              </InputBox>
            </ContainerInputBox>
            <SubmitFormButton
              type="submit"
              disabled={!formik.isValid}
              className={
                isActiveCategory || isActivePriority ? 'active-selector' : ''
              }
            >
              Submit
            </SubmitFormButton>
          </form>
        )}
      </Formik>
    </ContainerForm>
  );
};

export default FormEvent;
