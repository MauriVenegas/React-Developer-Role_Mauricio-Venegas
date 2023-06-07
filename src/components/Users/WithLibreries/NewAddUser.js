import React from 'react';

import Card from '../../UI/Card';
import Button from '../../UI/Button';
import classes from '../AddUser.module.css';

// New libreries
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

const RED_COLOR = '#FF0000'

const NewAddUser = ({ addUser }) => {

	// Library to register form inputs, handle form submission, and manage form validation errors.
	const { register, formState: { errors } , handleSubmit } = useForm();

	/**
	 * The function adds a unique ID to user data and submits it to be added to a list of users.
	 * @param data - The `data` parameter is an object that contains the information submitted by the user in a form.
	 * @param e - The "e" parameter in this code refers to the event object that is passed to the onSubmit function when the
	 * form is submitted. It contains information about the event that triggered the function, such as the target element (in
	 * this case, the form that was submitted) and any data associated with the event
	 */
	const onSubmit = (data, e) => {
    data.id = uuidv4();
		addUser(data)

		e.target.reset();
  };

	return (
		<>
			<h2 style={{ textAlign: 'center' }}>Version with new libreries</h2>
			<Card className={classes.card}>
				<form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
					<label htmlFor="username">Username</label>
					<input id="username" name="name" type="text" {...register("name", { required: 'Username is required' })} />
					<div style={{color: RED_COLOR}}>{errors.name?.message}</div>

					<label htmlFor="age">Age (Years)</label>
					<input id="age" name="age" type="number" {...register("age", { required: 'Age is required' })} />
					<div style={{color: RED_COLOR }}>{errors.age?.message}</div>

					<Button type="submit" className={classes.submit}>
						Add User
					</Button>
				</form>
			</Card>
		</>
	);
};

export default NewAddUser;
