
/**
 * Interface que implementaran el servicio de Autenticacion para posteriormenete realizar el Mock 
 * a traves del uso de provider en el modulo.
 * @interface
 * 
 */
export interface AuthServiceInterface {
	login(params:{usuario:string, pass:string}): any;
}