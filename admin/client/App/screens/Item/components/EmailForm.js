import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Form, Field } from 'formik';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const marginStyle = {
	marginTop: '50px',
};

const selectStyle = {
	backgroundColor: '#fff',
	borderColor: '#d9d9d9 #ccc #b3b3b3',
	borderRadius: '4px',
	border: '1px solid #ccc',
	color: '#333',
	cursor: 'default',
	display: 'table',
	borderSpacing: '0',
	borderCollapse: 'separate',
	height: '36px',
	outline: 'none',
	overflow: 'hidden',
	position: 'relative',
	width: '50%',
};

const disabledSelectStyle = {
	backgroundColor: '#f9f9f9',
	borderColor: '#d9d9d9 #ccc #b3b3b3',
	borderRadius: '4px',
	border: '1px solid #ccc',
	color: '#333',
	cursor: 'default',
	display: 'table',
	borderSpacing: '0',
	borderCollapse: 'separate',
	height: '36px',
	outline: 'none',
	overflow: 'hidden',
	position: 'relative',
	width: '50%',
};

const textareaStyle = {
	appearance: 'none',
	backgroundColor: 'white',
	backgroundImage: 'none',
	borderColor: '#ccc',
	borderRadius: '0.3rem',
	borderStyle: 'solid',
	borderWidth: '1px',
	boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
	color: 'inherit',
	display: 'block',
	height: '150px',
	lineHeight: '2.3em',
	padding: '0 .75em',
	transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
	width: '100%',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	WebkitTransition:
		'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
	MozTransition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
};

const disabledTextareaStyle = {
	appearance: 'none',
	backgroundColor: '#f9f9f9',
	backgroundImage: 'none',
	borderColor: '#ccc',
	borderRadius: '0.3rem',
	borderStyle: 'solid',
	borderWidth: '1px',
	boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
	color: 'inherit',
	display: 'block',
	height: '150px',
	lineHeight: '2.3em',
	padding: '0 .75em',
	transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
	width: '100%',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	WebkitTransition:
		'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
	MozTransition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
};

const alertSuccessStyle = {
	borderColor: 'rgba(52,194,64,0.1)',
	borderRadius: '0.3rem',
	borderStyle: 'solid',
	borderWidth: '1px',
	margin: '0 0 1em',
	padding: '0.75em 1em',
	backgroundColor: 'rgba(52,194,64,0.1)',
	color: '#34c240',
};

const alertErrorStyle = {
	borderColor: 'rgba(214,66,66,0.1)',
	borderRadius: '0.3rem',
	borderStyle: 'solid',
	borderWidth: '1px',
	margin: '0 0 1em',
	padding: '0.75em 1em',
	backgroundColor: 'rgba(214,66,66,0.1)',
	color: '#d64242',
};

const buttonStyle = {
	background: '#c62828',
	border: '#c62828',
	borderRadius: '0.3rem',
	cursor: 'pointer',
	display: 'inline-block',
	fontWeight: '400',
	height: '2.4em',
	lineHeight: '2.3em',
	marginBottom: '0',
	padding: '0 1em',
	outline: '0',
	textAlign: 'center',
	touchAction: 'manipulation',
	userSelect: 'none',
	verticalAlign: 'middle',
	whiteSpace: 'nowrap',
	boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
	color: 'white',
	textShadow: '0 -1px 0 rgba(0, 0, 0, 0.25)',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	WebkitUserSelect: 'none',
};

const disabledButtonStyle = {
	background: '#a6a6a6',
	border: '#a6a6a6',
	borderRadius: '0.3rem',
	cursor: 'pointer',
	display: 'inline-block',
	fontWeight: '400',
	height: '2.4em',
	lineHeight: '2.3em',
	marginBottom: '0',
	padding: '0 1em',
	outline: '0',
	textAlign: 'center',
	touchAction: 'manipulation',
	userSelect: 'none',
	verticalAlign: 'middle',
	whiteSpace: 'nowrap',
	boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
	color: 'white',
	textShadow: '0 -1px 0 rgba(0, 0, 0, 0.25)',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	WebkitUserSelect: 'none',
};

const disabledInputStyle = {
	appearance: 'none',
	background: '#a6a6a6',
	backgroundImage: 'none',
	borderColor: '#ccc',
	borderRadius: '0.3rem',
	borderStyle: 'solid',
	borderWidth: '1px',
	boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
	color: 'inherit',
	display: 'block',
	height: '2.4em',
	lineHeight: '2.3em',
	padding: '0 .75em',
	transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
	width: '100%',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	WebkitTransition:
		'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
	MozTransition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
};

const inputStyle = {
	appearance: 'none',
	backgroundColor: 'white',
	backgroundImage: 'none',
	borderColor: '#ccc',
	borderRadius: '0.3rem',
	borderStyle: 'solid',
	borderWidth: '1px',
	boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
	color: 'inherit',
	display: 'block',
	height: '2.4em',
	lineHeight: '2.3em',
	padding: '0 .75em',
	transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
	width: '100%',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	WebkitTransition:
		'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
	MozTransition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
};

class EmailForm extends Component {
	constructor (props) {
		super(props);
		this.state = {
			templates: [{ name: 'Custom' }],
			loaded: false,
			errorLoading: false,
		};
		this.onChangeTemplate = this.onChangeTemplate.bind(this);
		this.onChangeMessage = this.onChangeMessage.bind(this);
		this.onTryAgain = this.onTryAgain.bind(this);
	}

	componentDidMount () {
		axios
			.get('/api/templates')
			.then(res => {
				this.setState(prevState => ({
					loaded: true,
					templates: [...prevState.templates, ...res.data],
				}));
			})
			.catch(err => {
				this.setState({
					errorLoading: true,
				});
			});
	}

	onChangeTemplate (e) {
		let value = e.target.value;
		let subject = '';
		let message = '';

		if (value !== 'Custom') {
			let template = this.state.templates.find(o => o._id === value);
			subject = template.subject;
			message = template.message;
		}

		this.props.setFieldValue('template', value);
		this.props.setFieldValue('subject', subject);
		this.props.setFieldValue('message', message);
	}

	onChangeSubject (e) {
		this.props.setFieldValue('template', 'Custom');
		this.props.setFieldValue('subject', e.target.value);
	}

	onChangeMessage (e) {
		this.props.setFieldValue('template', 'Custom');
		this.props.setFieldValue('message', e.target.value);
	}

	onTryAgain () {
		this.props.setFormikState({
			submitted: false,
			submitError: false,
		});
	}

	render (
		{
			touched,
			values,
			errors,
			status,
			isSubmitting,
			submitted,
			submitError,
			submitCount,
			handleSubmit,
			handleBlur,
		} = this.props
	) {
		if (this.state.loaded) {
			return (
				<div style={marginStyle}>
					<h2>Email Applicant</h2>
					{!this.props.isSubmitting
						&& this.props.submitted
						&& !this.props.submitError && (
							<div>
								<div style={alertSuccessStyle}>Email sent successfully.</div>

								<button
									color="primary"
									onClick={this.onTryAgain}
									style={buttonStyle}
								>
									Send Another
								</button>
							</div>
						)}
					{!this.props.isSubmitting
						&& this.props.submitted
						&& this.props.submitError && (
							<div>
								<div style={alertErrorStyle}>
									There was an error sending the email. Please try again.
								</div>
								<button
									color="primary"
									onClick={this.onTryAgain}
									style={buttonStyle}
								>
									Try Again
								</button>
							</div>
						)}
					{!this.props.submitted && (
						<Form noValidate onSubmit={handleSubmit}>
							<Field
								name="template"
								component="select"
								label="Template"
								options={this.state.templates}
								placeholder="Template"
								onChange={this.onChangeTemplate}
								disabled={isSubmitting}
								style={isSubmitting ? disabledSelectStyle : selectStyle}
							>
								{this.state.templates.map(template => (
									<option key={template._id} value={template._id}>
										{template.name}
									</option>
								))}
							</Field>
							<br />
							<Field
								name="subject"
								component="input"
								label="Subject"
								placeholder="Subject"
								onChange={this.onChangeSubject}
								disabled={isSubmitting}
								style={isSubmitting ? disabledInputStyle : inputStyle}
							/>
							<br />
							<Field
								name="message"
								placeholder="Message"
								component="textarea"
								onChange={this.onChangeMessage}
								disabled={isSubmitting}
								style={isSubmitting ? disabledTextareaStyle : textareaStyle}
							/>
							{this.props.touched.message && this.props.errors.message && (
								<div style={{ color: 'red' }}>{this.props.errors.message}</div>
							)}

							<br />
							<button
								type="submit"
								color="primary"
								disabled={isSubmitting}
								style={isSubmitting ? disabledButtonStyle : buttonStyle}
							>
								{isSubmitting ? 'Sending...' : 'Send'}
							</button>
						</Form>
					)}
				</div>
			);
		}

		return (
			<div style={marginStyle}>
				<h2>Loading Email Templates...</h2>
			</div>
		);
	}
}

const FormikEmailForm = withFormik({
	mapPropsToValues: props => {
		const values = Object.assign({}, props.values);
		values.tempalte = '';
		values.subject = '';
		values.message = '';
		return values;
	},
	mapPropsToStatus: () => ({
		submitted: false,
	}),
	enableReinitialize: true,
	validateOnBlur: false,
	validateOnChange: true,
	// Custom sync validation
	validationSchema: () => {
		return Yup.object().shape({
			template: Yup.string(),
			subject: Yup.string().required('Please enter a subject'),
			message: Yup.string().required('Please enter a message'),
		});
	},

	handleSubmit: (values, actions) => {
		const data = new FormData();
		data.append('values', JSON.stringify(values));
		data.set('email', actions.props.email);
		data.set('name', actions.props.name);
		data.set('job', actions.props.job);
		data.set('reference', actions.props.reference);
		data.set('subject', values.subject);
		data.set('message', values.message);

		actions.setSubmitting(true);
		axios
			.post('/api/templates', data)
			.then(res => {
				actions.setSubmitting(false);

				actions.setFormikState({
					submitted: true,
					submitError: false,
				});

				actions.resetForm();
			})
			.catch(err => {
				actions.setSubmitting(false);
				actions.setFormikState({
					submitted: true,
					submitError: true,
				});
			});
	},
	displayName: 'EmailForm',
})(EmailForm);

FormikEmailForm.propTypes = {
	email: PropTypes.string.isRequired,
	job: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	reference: PropTypes.string.isRequired,
	templates: PropTypes.arrayOf(
		PropTypes.shape(PropTypes.object.isRequired).isRequired
	).isRequired,
};

export default FormikEmailForm;
