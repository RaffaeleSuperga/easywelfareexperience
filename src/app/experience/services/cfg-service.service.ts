import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CfgServiceService {

  constructor() { }

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

}
