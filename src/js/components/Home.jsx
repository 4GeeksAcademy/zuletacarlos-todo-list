import React, { useState } from "react";

const Home = () => {
	let [task, setTask] = useState("");
	let [list, setList] = useState([]);

	const addTask = (e) => {
		if (e.key === "Enter" && task.trim() !== "") {
			setList([...list, task.trim()]);
			setTask("");
		}
	};

	const deleteTask = (index) => {
		setList(list.filter((_, i) => i !== index));
	};

	return (
		<div className="todo-container">
			<h1 className="title">To Do List</h1>

			<input
				type="text"
				className="input-box"
				placeholder="What needs to be done?"
				value={task}
				onChange={(e) => setTask(e.target.value)}
				onKeyDown={addTask}
			/>

			<ul className="todo-list">
				{list.length === 0 ? (
					<li className="todo-item text-muted">
						Nothing to do — add a task
					</li>
				) : (
					list.map((item, index) => (
						<li key={index} className="todo-item">
							{item}
							<span className="delete" onClick={() => deleteTask(index)}>✖</span>
						</li>
					))
				)}
			</ul>

			<div className="footer-count">
				{list.length} item{list.length !== 1 ? "s" : ""} left
			</div>
		</div>
	);
};

export default Home;

