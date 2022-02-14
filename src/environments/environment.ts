// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:8080/agendinhas',
  allUrl: 'http://localhost:8080/agendinhas/all',
  delUrl:  'http://localhost:8080/agendinhas/del',
  putUrl: 'http://localhost:8080/agendinhas/update',
  findID: 'http://localhost:8080/agendinhas/find'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
