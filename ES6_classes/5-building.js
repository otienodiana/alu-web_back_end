import Building from './path-to-building';

describe('Building Class', () => {
  test('should throw an error if instantiated directly', () => {
    expect(() => {
      new Building(1000);
    }).toThrow('Cannot instantiate abstract class Building directly');
  });

  test('should throw an error if subclass does not implement evacuationWarningMessage', () => {
    class IncompleteBuilding extends Building {
      // Missing evacuationWarningMessage implementation
    }

    expect(() => {
      new IncompleteBuilding(1000);
    }).toThrow('Class extending Building must override evacuationWarningMessage');
  });

  // Example of a valid subclass implementation
  test('should not throw error if subclass implements evacuationWarningMessage', () => {
    class CompleteBuilding extends Building {
      evacuationWarningMessage() {
        return 'Warning!';
      }
    }

    expect(() => {
      new CompleteBuilding(1000);
    }).not.toThrow();
  });
});
