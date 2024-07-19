import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    // Validate amount to be a number and not NaN
    if (typeof amount !== 'number' || isNaN(amount)) {
      throw new TypeError('amount must be a valid number');
    }
    // Validate currency to be an instance of Currency
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
    // Validate newAmount to be a number and not NaN
    if (typeof newAmount !== 'number' || isNaN(newAmount)) {
      throw new TypeError('amount must be a valid number');
    }
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    // Validate newCurrency to be an instance of Currency
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('currency must be an instance of Currency');
    }
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    // Validate amount and conversionRate to be numbers and not NaN
    if (typeof amount !== 'number' || isNaN(amount) || typeof conversionRate !== 'number' || isNaN(conversionRate)) {
      throw new TypeError('amount and conversionRate must be valid numbers');
    }
    return amount * conversionRate;
  }
}
