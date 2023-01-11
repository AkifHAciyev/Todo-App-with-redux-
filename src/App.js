import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import TodoList from './pages/TodoList';
import Todo from './pages/Todo';

function App() {
	return (
		<div className="App">
			<nav>
				<ul>
					<li>
						<Link to={'/'}>Todo</Link>
					</li>
					<li>
						<Link to={'/todoList'}>Todo List</Link>
					</li>
					<li>
						<Link to={'/about'}>About</Link>
					</li>
				</ul>
			</nav>
			<main>
				<Routes>
					<Route path="/" element={<Todo />} />
					<Route path="/todoList" element={<TodoList />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
