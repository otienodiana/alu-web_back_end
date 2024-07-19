export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error('Cannot instantiate abstract class Building directly');
    }
    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
  
  // Abstract method placeholder
  evacuationWarningMessage() {
    throw new Error('Method "evacuationWarningMessage" must be implemented');
  }
}
