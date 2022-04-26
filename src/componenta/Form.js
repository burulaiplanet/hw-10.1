import { useState } from 'react'
import './Form.css'
import FormItem from './FormItem'

function Form(props) {
	const [name, setName] = useState()

	function nameChangeHandler(event) {
		setName(event.target.value)
	}

	function submitHundler(event) {
		event.preventDefault()

		const formData = {
			name: name,
		}
		saveData(formData)
	}
	function saveData(data) {
		const dataWithId = {
			...data,
			id: Math.random().toString(),
		}
		props.onsaveDatToList(dataWithId)
		console.log(dataWithId)
	}

	return (
		<div>
			<form onSubmit={submitHundler}>
				<div className='form-name'>
					<h1>Contact Form</h1>
				</div>
				<div>
					<label>Name:</label>
					<br />
					<input onChange={nameChangeHandler} type='text' />
				</div>
				<div>
					<label>Email:</label>
					<br />
					<input type='email' />
				</div>
				<div>
					<label>Phone:</label>
					<br />
					<input type='tel' />
				</div>
				<button>Add data</button>
			</form>
			<div className='form-block'>
				{props.addData.map((el) => {
					return <FormItem name={el.name} key={el.id} />
				})}
			</div>
		</div>
	)
}
export default Form
