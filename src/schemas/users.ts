import { object, string, date, number, array, ref } from "yup";

export const validationSchema = object().shape({
	firstName: string()
		.matches(/^[A-Z][a-z0-9_-]{2,18}$/, "must start with uppercase")
		.required("first name is required"),
	lastName: string()
		.matches(/^[A-Z][a-z0-9_-]{3,19}$/, "must start with uppercase")
		.required("last name is required"),
	birthday: date().required("birthday is required"),
	avatar: string().required("avatar is required"),
	gender: string().required("gender is required"),
	color: string().min(3).max(7),
	season: string().required("season is required"),
	continent: array(),
	ocean: string(),
	number: number().positive().integer(),
	vocation: string(),
	languages: array().required("languages is required"),
	login: string().required("login is required"),
	email: string().email("invalid email format").required("email is required"),
	password: string().required("password is required"),
	repeatPassword: string().oneOf([ref("password")], "Passwords must match").required("repeat password"),
});
