import React, { FormEvent, useState } from "react";

const Form = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const updateForm = (key: string, value: any) => {
		setForm(form => ({
			...form,
			[key]: value,
		}));
	};

	const sendForm = async (e: FormEvent) => {
		e.preventDefault();
		await console.log("wysłasno");
	};

	const clearForm = () => {
		setForm({
			name: "",
			email: "",
			message: "",
		});
	};

	return (
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
				<p className="form__error-text">Ewentualny błąd</p>
			</label>
			<label className="form__label">
				<input
					type="emial"
					value={form.email}
					id={form.email}
					onChange={e => updateForm("email", e.target.value)}
					placeholder="Adres e-mail*"
					className="form__input"
				/>
				<p className="form__error-text">Ewentualny błąd</p>
			</label>
			<label className="form__label">
				<textarea
					value={form.message}
					id={form.message}
					onChange={e => updateForm("message", e.target.value)}
					placeholder="Wiadomość*"
					className="form__input message-box"
				/>
				<p className="form__error-text">Ewentualny błąd</p>
			</label>
		</form>
	);
};

export default Form;
