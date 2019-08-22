import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe, of as observableOf } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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
    return [
      { id: '', MasterName: 'TUTTE', Img: '', Icon: '' },
      { id: 21, MasterName: 'FUGHE', Img: 'assets/img/gallery/img-01.jpg', Icon: 'assets/img/master/fughe.png', IconList: 'icon-luggage' },
      { id: 14, MasterName: 'BENESSERE', Img: 'assets/img/gallery/img-02.jpg', Icon: 'assets/img/master/benessere.png', IconList: 'icon-water-sea' },
      { id: 22, MasterName: 'GUIDA E MOTORI', Img: 'assets/img/gallery/img-04.jpg', Icon: 'assets/img/master/guida.png', IconList: 'icon-jeep' },
      { id: 15, MasterName: 'GUSTO', Img: 'assets/img/gallery/img-03.jpg', Icon: 'assets/img/master/gusto.png', IconList: 'icon-food-wine' },
      { id: 20, MasterName: 'SPORT', Img: 'assets/img/gallery/img-05.jpg', Icon: 'assets/img/master/sport.png', IconList: 'icon-hiking' },
      { id: 23, MasterName: 'VOLO', Img: 'assets/img/gallery/img-09.jpg', Icon: 'assets/img/master/volo.png', IconList: 'icon-plane' },
      { id: 13, MasterName: 'SVAGO', Img: 'assets/img/gallery/img-07.jpg', Icon: 'assets/img/master/svago.png', IconList: 'icon-beach' },
      { id: 28, MasterName: 'PACCHETTI TOP', Img: 'assets/img/gallery/img-08.jpg', Icon: 'assets/img/master/top.png', IconList: 'icon-star' } 
    ];
  }

  getTagsList() {
    return [
      {
        TagId: 1,
        TagTitle: 'Spa',
        TagSubTitle: 'per 2',
        TagPrezzo: '50',
        TagImg: 'spax2_60.jpg',
        MasterID: 14,
        NumPart: 2,
        Text: '',
        Location: {
          Region: '',
          Province: '',
          Nation: 'ITA'
        },
        Attributes: [
          10630
        ],
        Price: {
          MinPrice: '50',
          MaxPrice: ''
        }
      },
      {
        TagId: 2,
        TagTitle: 'Notte',
        TagSubTitle: 'con cena',
        TagPrezzo: '150',
        TagImg: 'soggiorno_150.jpg',
        MasterID: 21,
        NumPart: 2,
        Text: 'cena',
        Location: {
          Region: '',
          Province: '',
          Nation: 'ITA'
        },
        Attributes: [
          11076
        ],
        Price: {
          MinPrice: '150',
          MaxPrice: ''
        }
      },
      {
        TagId: 3,
        TagTitle: 'Notte',
        TagSubTitle: 'con colazione',
        TagPrezzo: '75',
        TagImg: 'soggiorno_75.jpg',
        MasterID: 21,
        NumPart: 2,
        Text: 'colazione',
        Location: {
          Region: '',
          Province: '',
          Nation: 'ITA'
        },
        Attributes: [
          11076
        ],
        Price: {
          MinPrice: '75',
          MaxPrice: ''
        }
      },
      {
        TagId: 4,
        TagTitle: '2 notti',
        TagSubTitle: 'con colazione',
        TagPrezzo: '110',
        TagImg: 'soggiorno_110.jpg',
        MasterID: 21,
        NumPart: 2,
        Text: 'colazione',
        Location: {
          Region: '',
          Province: '',
          Nation: 'ITA'
        },
        Attributes: [
          11077
        ],
        Price: {
          MinPrice: '75',
          MaxPrice: ''
        }
      },
      {
        TagId: 5,
        TagTitle: 'Massaggio',
        TagSubTitle: 'per 2',
        TagPrezzo: '80',
        TagImg: 'massaggio_80.jpg',
        MasterID: 14,
        NumPart: 2,
        Text: '',
        Location: {
          Region: '',
          Province: '',
          Nation: 'ITA'
        },
        Attributes: [
          10780
        ],
        Price: {
          MinPrice: '80',
          MaxPrice: ''
        }
      },
      {
        TagId: 6,
        TagTitle: 'Massaggio',
        TagSubTitle: 'Special',
        TagPrezzo: '99',
        TagImg: 'massaggio_99.jpg',
        MasterID: 14,
        NumPart: 1,
        Text: '',
        Location: {
          Region: '',
          Province: '',
          Nation: 'ITA'
        },
        Attributes: [
          10780
        ],
        Price: {
          MinPrice: '99',
          MaxPrice: ''
        }
      },
      {
        TagId: 7,
        TagTitle: 'Cena',
        TagSubTitle: 'per 2',
        TagPrezzo: '80',
        TagImg: 'cena_80.jpg',
        MasterID: 15,
        NumPart: 2,
        Text: '',
        Location: {
          Region: '',
          Province: '',
          Nation: 'ITA'
        },
        Attributes: [
          10595
        ],
        Price: {
          MinPrice: '80',
          MaxPrice: ''
        }
      },
      {
        TagId: 8,
        TagTitle: 'Guida',
        TagSubTitle: ' sportiva',
        TagPrezzo: '99',
        TagImg: 'guida_99.jpg',
        MasterID: 22,
        NumPart: 1,
        Text: '',
        Location: {
          Region: '',
          Province: '',
          Nation: 'ITA'
        },
        Attributes: [],
        Price: {
          MinPrice: '99',
          MaxPrice: ''
        }
      },
      {
        TagId: 9,
        TagTitle: 'Esperienze',
        TagSubTitle: ' Top',
        TagPrezzo: '200',
        TagImg: 'top.jpg',
        MasterID: 28,
        NumPart: '',
        Text: '',
        Location: {
          Region: '',
          Province: '',
          Nation: ''
        },
        Attributes: [],
        Price: {
          MinPrice: '',
          MaxPrice: ''
        }
      },
      {
        TagId: 10,
        TagTitle: '1 mese',
        TagSubTitle: 'in Palestra',
        TagPrezzo: '9.90',
        TagImg: 'palestramilano.jpg',
        MasterID: 20,
        NumPart: '',
        Text: 'Mese',
        Location: {
          Region: '',
          Province: '',
          Nation: 'ITA'
        },
        Attributes: [
          10670
        ],
        Price: {
          MinPrice: '9,90',
          MaxPrice: ''
        }
      },
      {
        TagId: 11,
        TagTitle: '1 mese',
        TagSubTitle: 'in Piscina',
        TagPrezzo: '9.90',
        TagImg: 'piscina.jpg',
        MasterID: 20,
        NumPart: '',
        Text: 'Mese',
        Location: {
          Region: '',
          Province: '',
          Nation: 'ITA'
        },
        Attributes: [
          1237
        ],
        Price: {
          MinPrice: '9,90',
          MaxPrice: ''
        }
      },
      {
        TagId: 12,
        TagTitle: 'Notte',
        TagSubTitle: 'con benessere',
        TagPrezzo: '',
        TagImg: 'nottebenessere.jpg',
        MasterID: 21,
        NumPart: '',
        Text: '',
        Location: {
          Region: '',
          Province: '',
          Nation: 'ITA'
        },
        Attributes: [
          10565
        ],
        Price: {
          MinPrice: '',
          MaxPrice: ''
        }
      },
      {
        TagId: 13,
        TagTitle: 'Fuga',
        TagSubTitle: 'dalla città',
        TagPrezzo: '',
        TagImg: 'fugacitta.jpg',
        MasterID: 21,
        NumPart: '',
        Text: '',
        Location: {
          Region: '',
          Province: '',
          Nation: 'ITA'
        },
        Attributes: [
          10565
        ],
        Price: {
          MinPrice: '',
          MaxPrice: ''
        }
      },
      {
        TagId: 14,
        TagTitle: 'Foto',
        TagSubTitle: 'depilazione',
        TagPrezzo: '',
        TagImg: 'fotodepilazione.jpg',
        MasterID: 14,
        NumPart: 1,
        Text: 'fotodepilazione',
        Location: {
          Region: '',
          Province: '',
          Nation: 'ITA'
        },
        Attributes: [],
        Price: {
          MinPrice: '',
          MaxPrice: ''
        }
      },
      {
        TagId: 15,
        TagTitle: 'Chef ',
        TagSubTitle: 'a domicilio',
        TagPrezzo: '',
        TagImg: 'chef.jpg',
        MasterID: 15,
        NumPart: '',
        Text: '',
        Location: {
          Region: '',
          Province: '',
          Nation: 'ITA'
        },
        Attributes: [
          10900
        ],
        Price: {
          MinPrice: '',
          MaxPrice: ''
        }
      },
      {
        TagId: 16,
        TagTitle: 'Ingresso',
        TagSubTitle: 'parchi',
        TagPrezzo: '',
        TagImg: 'parchi.jpg',
        MasterID: 13,
        NumPart: '',
        Text: '',
        Location: {
          Region: '',
          Province: '',
          Nation: 'ITA'
        },
        Attributes: [
          10755
        ],
        Price: {
          MinPrice: '',
          MaxPrice: ''
        }
      },
      {
        TagId: 17,
        TagTitle: 'Ingresso',
        TagSubTitle: 'Ludoteche',
        TagPrezzo: '',
        TagImg: 'ludoteche.jpg',
        MasterID: 13,
        NumPart: '',
        Text: '',
        Location: {
          Region: '',
          Province: '',
          Nation: 'ITA'
        },
        Attributes: [
          11135
        ],
        Price: {
          MinPrice: '',
          MaxPrice: ''
        }
      },
      {
        TagId: 18,
        TagTitle: 'Degustazioni ',
        TagSubTitle: 'per due',
        TagPrezzo: '',
        TagImg: 'degustazioni.jpg',
        MasterID: 15,
        NumPart: '',
        Text: '',
        Location: {
          Region: '',
          Province: '',
          Nation: 'ITA'
        },
        Attributes: [
          10597
        ],
        Price: {
          MinPrice: '',
          MaxPrice: ''
        }
      },
      {
        TagId: 19,
        TagTitle: 'Pacchetto',
        TagSubTitle: 'Turistico',
        TagPrezzo: '',
        TagImg: 'turistico.jpg',
        MasterID: 28,
        NumPart: '',
        Text: '',
        Location: {
          Region: '',
          Province: '',
          Nation: 'ITA'
        },
        Attributes: [
          11125
        ],
        Price: {
          MinPrice: '',
          MaxPrice: ''
        }
      },
      {
        TagId: 20,
        TagTitle: 'Pulizia',
        TagSubTitle: 'viso',
        TagPrezzo: '',
        TagImg: 'pulizia.jpg',
        MasterID: 14,
        NumPart: 1,
        Text: 'pulizia viso',
        Location: {
          Region: '',
          Province: '',
          Nation: 'ITA'
        },
        Attributes: [],
        Price: {
          MinPrice: '',
          MaxPrice: ''
        }
      }
    ];
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
