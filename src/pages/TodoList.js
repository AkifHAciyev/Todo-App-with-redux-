import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../redux/actions/itemActionCreator';

const TodoList = () => {
	const todos = useSelector((state) => state);
	const dispatch = useDispatch();

	return (
		<ul>
			{todos &&
				todos.map((todo) => (
					<li key={todo.id}>
						{todo.text}
						<button onClick={() => dispatch(deleteItem(todo))}>x</button>
					</li>
				))}
		</ul>
	);
};

export default TodoList;
