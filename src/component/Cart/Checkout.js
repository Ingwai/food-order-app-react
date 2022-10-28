import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const Checkout = props => {
	const [formInputsValidity, setFormInputsValidity] = useState({
		name: true,
		street: true,
		postal: true,
		city: true,
	});
	const regex = /\d{2}-\d{3}/;
	const isEmpty = value => value.trim() === '';
	const isFiveChars = value => value.trim().length === 6 && regex.test(value);

	const nameInputRef = useRef();
	const streetInputRef = useRef();
	const postalInputRef = useRef();
	const cityInputRef = useRef();

	const confirmHandler = event => {
		event.preventDefault();
		const enteredName = nameInputRef.current.value; //zbieramy dane z inputa
		const enteredStreet = streetInputRef.current.value;
		const enteredPostal = postalInputRef.current.value;
		const enteredCity = cityInputRef.current.value;

		const enteredNameIsValid = !isEmpty(enteredName);
		const enteredStreetIsValid = !isEmpty(enteredStreet);
		const enteredCityIsValid = !isEmpty(enteredCity);
		const enteredPostalIsValid = isFiveChars(enteredPostal);

		setFormInputsValidity({
			name: enteredNameIsValid,
			street: enteredStreetIsValid,
			city: enteredCityIsValid,
			postal: enteredPostalIsValid,
		});

		const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalIsValid;

		if (formIsValid) {
			props.onConfirm({
				name: enteredName,
				street: enteredStreet,
				postal: enteredPostal,
				city: enteredCity,
			});
		}
	};

	const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`;
	const streetControlClasses = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`;
	const postalControlClasses = `${classes.control} ${formInputsValidity.postal ? '' : classes.invalid}`;
	const cityControlClasses = `${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`;

	return (
		<form className={classes.form} onSubmit={confirmHandler}>
			<div className={nameControlClasses}>
				<label htmlFor='name'>Imię i nazwisko</label>
				<input type='text' id='name' ref={nameInputRef} />
				{!formInputsValidity.name && <p>Proszę wpisać imię i nazwisko</p>}
			</div>
			<div className={streetControlClasses}>
				<label htmlFor='street'>Ulica</label>
				<input type='text' id='street' ref={streetInputRef} />
				{!formInputsValidity.street && <p>Proszę podać nazwę ulicy</p>}
			</div>
			<div className={postalControlClasses}>
				<label htmlFor='postal'>Kod pocztowy</label>
				<input type='text' id='postal' ref={postalInputRef} />
				{!formInputsValidity.postal && <p>Proszę wpisać kod pocztowy _ _ - _ _ _</p>}
			</div>
			<div className={cityControlClasses}>
				<label htmlFor='city'>Miejscowość</label>
				<input type='text' id='city' ref={cityInputRef} />
				{!formInputsValidity.city && <p>Proszę podać nazwę miejscowości</p>}
			</div>
			<div className={classes.actions}>
				<button type='button' onClick={props.onCancel}>
					Anuluj
				</button>
				<button className={classes.submit}>Zamawiam</button>
			</div>
		</form>
	);
};

export default Checkout;
