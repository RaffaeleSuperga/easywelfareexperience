// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const tsApiBase = 'http://api.tantosvago.it/api/ts';

export const environment = {
  production: false,
  insertOrder: tsApiBase + '/InsertOrder',
  getSvaggyCodeActivityDetail: tsApiBase + '/GetSvaggyCodeActivityDetail',
  getMasterBookingBrief: tsApiBase + '/GetMasterBookingBrief',
  setBooingData: tsApiBase + '/SetBookingData',
  registerContact: tsApiBase + '/registercontact',
  registerAccount: tsApiBase + '/RegisterAccount',
  searchGeoActivities: tsApiBase + '/searchgeoactivities',
  searchActivities: tsApiBase + '/searchactivities',
  searchActivitiesTs: tsApiBase + '/searchactivitiesTS',
  getActivityEvidence: tsApiBase + '/getactivityevidence',
  getNations: tsApiBase + '/GetNations',
  getPartnerData: tsApiBase + '/getpartnerdata',
  getMasterAttributes: tsApiBase + '/getmasterattributes'
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
