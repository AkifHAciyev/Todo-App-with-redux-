import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/actions/itemActionCreator';

const Todo = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const submitForm = (event) => {
		event.preventDefault();
		dispatch(add(value));
		setValue('');
	};

	return (
		<form onSubmit={(event) => submitForm(event)}>
			<h1>Add To List</h1>
			<input value={value} onChange={(e) => setValue(e.target.value)} />
			<button>Add</button>
		</form>
	);
};

export default Todo;
