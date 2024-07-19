import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number' || isNaN(amount)) {
      throw new TypeError('amount must be a valid number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be an instance of Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number' || isNaN(newAmount)) {
      throw new TypeError('amount must be a valid number');
    }
    this._amount = newAmount;
  }


  
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('currency must be an instance of Currency');
    }
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || isNaN(amount) || typeof conversionRate !== 'number' || isNaN(conversionRate)) {
      throw new TypeError('amount and conversionRate must be valid numbers');
    }
    return amount * conversionRate;
  }
}
