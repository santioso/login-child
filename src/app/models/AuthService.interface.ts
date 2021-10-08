export interface AuthServiceInterface {
	login(params:{usuario:string, pass:string}): any;
}