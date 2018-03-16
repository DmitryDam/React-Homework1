import React from 'react';
import './MovieForm.css';

class MovieForm extends React.Component {

	render() {
		const { title, description,rating } = this.props;
		const options = [1,2,3,4,5,6,7,8,9,10];
		

		return (
			<form className="MovieForm" >
				<label className="MovieForm__label-for-form">{title} 
					<input className="MovieForm__input" type="text"  />
				</label>
				<label className="MovieForm__label-for-form">{description} 
					<textarea className="MovieForm__txtarea" rows="4"  ></textarea>
				</label>
				<label className="MovieForm__label-for-form">{rating} 
					<select className="MovieForm__input" >
						{options.map( option => <option key ={option}>{option}</option> )}
					</select>
				</label>

				<button className="MovieForm__submit">submit</button>
			</form>
		);
	}
}

export default MovieForm;
