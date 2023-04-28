import React from 'react';
import { useForm } from 'react-hook-form';
import './ScheduleForm.css'

const ScheduleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formattedData = JSON.stringify(data, null, 2);
    const subject = encodeURIComponent('New Appointment Request');
    const body = encodeURIComponent(`Appointment Details:\n\n${formattedData}`);
    const mailtoLink = `mailto:info@healthyandvibrant.com?subject=${subject}&body=${body}`;

    window.open(mailtoLink, '_blank');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Patient Name:
        <input {...register('patientName', { required: true })} />
      </label>
      {errors.patientName && <span>Name is required</span>}
      <br />

      <label>
        Address:
        <input {...register('address', { required: true })} />
      </label>
      {errors.address && <span>Address is required</span>}
      <br />

      <label>
        Phone Number:
        <input {...register('phoneNumber', { required: true })} />
      </label>
      {errors.phoneNumber && <span>Phone number is required</span>}
      <br />

      <label>
        Email Address:
        <input
          {...register('email', {
            required: true,
            pattern: /^\S+@\S+\.\S+$/,
          })}
        />
      </label>
      {errors.email && <span>Email is not valid</span>}
      <br />

      <label>
        What can we help you with?
        <textarea {...register('helpMessage', { required: true })} />
      </label>
      {errors.helpMessage && <span>This field is required</span>}
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ScheduleForm;
