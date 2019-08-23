import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe, of as observableOf } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { tags, masters, regions, tagFilters } from 'src/app/shared/lists';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  getSvaggyCodeActivityDetail(postdata): Observable<any> {
    return this.http.post(environment.getSvaggyCodeActivityDetail, postdata)
      .pipe(
        catchError(this.handleError<any>(`get Svaggy Code Activity Detail error data: ${postdata}`))
      );
  }

  getConfig(proj) {
    return {
      progetto: 'WQUI',
      apikeysecret: '8a9b245f-c953-48de-bbbb-b9ea4159b0ee',
      logo: 'img/logos/welfare/WelfareCompany.png',
      email_supporto: 'asistenza.clienti@tantosvago.it',
      telefono_supporto: '848 001 092',
      portale_welfare: 'https://welfarecompanyexperience.tantosvago.it/',
      valuta: 'euro',
      fasciaMax: '',
      urlPagamentoOk: 'http://welfarecompanyexperience.tantosvago.it/acquistoCompletato.php',
      urlPagamentoKo: 'http://welfarecompanyexperience.tantosvago.it/acquistoAnnullato.php'
    };
  }

  getPriceToPoints(priceRaw) {
    let price = priceRaw.replace(',', '.');
    price = parseFloat(price);
    let priceDiscount = price / 100 * 85;
    priceDiscount = priceDiscount / 0.003;
    const punti = Math.round(priceDiscount);
    return punti;
  }

  getPointsToPrice(points) {
    let price = points * 0.003;
    price = price / 85 * 100;
    price = Math.round(price);
    return price;
  }

  getMasterList(company) {
    return masters;
  }

  getTagsList() {
    return tags;
  }

  getTagsFilterList() {
    return tagFilters;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return observableOf(result as T);
    };
  }

}
