export type T_user = {
	id?: string;
	firstName: string;
	lastName: string;
	birthday: string;
	avatar: string;
	gender: string;
	color: string;
	season: string;
	continent: string[];
	ocean: string;
	number: number;
	vocation: string;
	languages: string[];
	login: string;
	email: string;
	password: string;
	repeatPassword: string;
};

export type T_users = T_user[];

export interface I_initialState {
	all: T_user[];
}
