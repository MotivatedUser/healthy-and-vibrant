import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com'
import './ScheduleForm.css'

const ScheduleForm = () => {
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    emailjs.send("service_3yokxok", "template_ins9ddf", data).then(
      (result) => {
        console.log(result.text);
        alert("Email successfully sent!");
        reset();
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send email. Please try again later.");
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Schedule form">
      <label htmlFor='name'>
        Name:
        <input id='name' {...register('name', { required: true })} />
      </label>
      {errors.patientName && <span>Name is required</span>}
      <br />

      <label htmlFor='address'>
        Address:
        <input id='address' {...register('address', { required: true })} />
      </label>
      {errors.address && <span>Address is required</span>}
      <br />

      <label htmlFor='phoneNumber'>
        Phone Number:
        <input id='phoneNumber' {...register('phoneNumber', { required: true })} />
      </label>
      {errors.phoneNumber && <span>Phone number is required</span>}
      <br />

      <label htmlFor='email'>
        Email Address:
        <input
          id='email'
          {...register('email', {
            required: true,
            pattern: /^\S+@\S+\.\S+$/,
          })}
        />
      </label>
      {errors.email && <span>Email is not valid</span>}
      <br />
      
      <label htmlFor='bestTimes'>
        Are there certain times or days work best for you?
        <input id='bestTimes' {...register('bestTimes', { required: true })} />
      </label>
      {errors.bestTimes && <span>This field is required</span>}
      <br />

      <label htmlFor='helpMessage'>
        What can we help you with?
        <textarea id='helpMessage' {...register('helpMessage', { required: true })} />
      </label>
      {errors.helpMessage && <span>This field is required</span>}
      <br />

      <button type="submit" aria-label="Submit as Email">Submit</button>
    </form>
  );
};

export default ScheduleForm;
