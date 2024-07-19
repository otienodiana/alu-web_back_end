export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(newCode) {
    if (typeof newCode !== 'string' || newCode.trim() === '') {
      throw new TypeError('code must be a non-empty string');
    }
    this._code = newCode;
  }

  set name(newName) {
    if (typeof newName !== 'string' || newName.trim() === '') {
      throw new TypeError('name must be a non-empty string');
    }
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
