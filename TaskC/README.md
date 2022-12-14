# Ejercicio C

Se necesita recabar la información de los últimos 7 días sobre las ventas de la empresa.

El reporte final debe contener la suma total de ventas, y además una lista con información de cada nombre de cuenta (Account Name) y el subtotal de esa cuenta.
 
La lista de ventas de cada día se obtiene mediante un método `mainGetSalesFromService`. 

El resultado final se debe enviar a un servicio externo mediante el método `mainSendReportingToService`. 

No se puede confiar en que alguno de estos dos servicios no esté caído o saturado, por lo que cada uno de ellos tiene un servidor de backup por si ocurriera algún error al invocar la función del servicio externo.

* `mainGetSalesFromService` cuenta con un método de respaldo `backupGetSalesFromService`
* `mainSendReportingToService` cuenta con un método de respaldo `backupSendReportingToService` 

Se adjunta la documentación del módulo que define estas funciones, así como el objeto final de reporting que se debe construir. Solo nos han proporcionado la librería, y no contamos aún con conectividad al servicio externo.

Se pide implementar un script que haga uso de estas funciones para conseguir el objetivo.

```javascript
/**
* @typedef {string} DateString Formatted date value: 'YYYY-MM-DD'
*/
/**
* @typedef {Object} SaleList List of sale details
*
* @property {Sale[]}     sales  List of sales
* @property {DateString} date   Date of the sales
* @property {string}     status Status of service
*/
/**
* @typedef {Object} Sale Sale details
*
* @property {string} id            Sale ID
* @property {string} account       Account Name
* @property {Number} amount        Amount in cents of euro
* @property {string} [description] Description
*/
/**
* @typedef {Object} Reporting Reporting details
*
* @property {AccountSales} sales List of account Sales
* @property {Number} total       Total amount in euro
*/
/**
* @typedef {Object} AccountSales Sales of an individual account
*
* @property {string} name  Account name
* @property {Number} total Total amount in euro
*/
/**
* Get sales from primary service
*
* @param {DateString} date Reference date
*
* @returns {Promise<Sale[]>} Sales
*/
function mainGetSalesFromService(date) {
  // ...
}
 
/**
* Get sales from secondary service
*
* @param {DateString} date Reference date
*
* @returns {Promise<SaleList>} Sales
*/
function backupGetSalesFromService(date) {
  // ...
}
/**
* Send reporting to primary external service
*
* @param {Reporting} reporting Reporting
*
* @return {Promise} Resolved if data is received successfully
*/
function mainSendReportingToService(reporting) {
  // ...
}
/**
* Send reportings to secondary external service
*
* @param {Reporting[]} reportings List of reportings
*
* @return {Promise} Resolved if data is received successfully
*/
function backupSendReportingToService(reportings) {
  // ...
}
```
