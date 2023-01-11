import { ADD, DELETE } from './item.action.js';

export const add = (todo) => {
	return {
		type: ADD,
		payload: todo,
	};
};

export const deleteItem = (todo) => {
	return {
		type: DELETE,
		payload: todo,
	};
};
