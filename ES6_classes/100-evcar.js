import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Override cloneCar method to return a Car instance
  cloneCar() {
    const Species = Car[Symbol.species];
    return new Species(this._brand, this._motor, this._color);
  }

  // Optional: Add getters for range if needed
  get range() {
    return this._range;
  }
}
