import React, { FormEvent, useEffect, useState } from "react";

const Form = () => {
	const REGEX = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;
	// const REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorsMessage, setErrorsMessage] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [success, setSuccess] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setSuccess(false);
		}, 6000);

		return () => clearInterval(timer);
	}, [success]);

	const updateForm = (key: string, value: string) => {
		cleanErrorsMessage();
		setForm(form => ({
			...form,
			[key]: value,
		}));
	};

	const updateErrorsMessage = (key: string, value: string) => {
		setErrorsMessage(errors => ({
			...errors,
			[key]: value,
		}));
	};

	const validationForm = () => {
		if (!form.email.match(REGEX)) {
			form.email === ""
				? updateErrorsMessage("email", "Podaj e-mail")
				: updateErrorsMessage("email", "Nieprawidłowy e-mail");
		}
		if (form.name.length < 3 || form.name.length > 99) {
			form.name === ""
				? updateErrorsMessage("name", "Podaj imię i nazwisko")
				: updateErrorsMessage("name", "Imię jest za krótkie");
		}

		if (form.message.length < 10) {
			form.message === ""
				? updateErrorsMessage("message", "Napisz wiadomość")
				: updateErrorsMessage("message", "Wiadomość jest za krótka");
		}
	};

	const sendForm = async (e: FormEvent) => {
		e.preventDefault();

		if (errorsMessage.email || errorsMessage.name || errorsMessage.message) {
			console.log("jesteśmy w błędzie");

			return;
		} else {
			console.log("Powinien się pokazać formularz");

			console.log(form);
			setSuccess(true);
			clearForm();
		}
	};

	const clearForm = () => {
		setForm({
			name: "",
			email: "",
			message: "",
		});
	};

	const cleanErrorsMessage = () => {
		setErrorsMessage({
			email: "",
			name: "",
			message: "",
		});
	};

	return (
		<>
			<form onSubmit={sendForm} className="form">
				<label className="form__label">
					<input
						type="text"
						value={form.name}
						id={form.name}
						onChange={e => updateForm("name", e.target.value)}
						placeholder="Imię i nazwisko*"
						className="form__input"
					/>
					<p className="form__error__text">{errorsMessage.name}</p>
				</label>
				<label className="form__label">
					<input
						type="email"
						value={form.email}
						id={form.email}
						onChange={e => updateForm("email", e.target.value)}
						placeholder="Adres e-mail*"
						className="form__input"
					/>
					<p className="form__error__text">{errorsMessage.email}</p>
				</label>
				<label className="form__label">
					<textarea
						value={form.message}
						id={form.message}
						onChange={e => updateForm("message", e.target.value)}
						placeholder="Wiadomość*"
						className="form__input message-box"
					/>
					<p className="form__error__text">{errorsMessage.message}</p>
				</label>
				<button
					className="form__btn btn"
					type="submit"
					onClick={validationForm}
				>
					Wyślij
				</button>
			</form>
			<p className="success-info">{success && "Mamy sukces"}</p>
		</>
	);
};

export default Form;
