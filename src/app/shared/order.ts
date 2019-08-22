export class Order {
    private _price: number;
    private _ida: string;
    private _reqNum: string;

    constructor(price, ida, reqNum) {
      this._price = price;
      this._ida = ida;
      this._reqNum = reqNum;
    }

    get price(): number {
      return this._price;
    }

    set price(value: number) {
      this._price = value;
    }

    get ida(): string {
      return this._ida;
    }

    set ida(value: string) {
      this._ida = value;
    }

    get reqNum(): string {
      return this._reqNum;
    }

    set reqNum(value: string) {
      this._reqNum = value;
    }

}
