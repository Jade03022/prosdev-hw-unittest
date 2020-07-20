const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('Scenario', () => {
  it('When grade is between 0 and 74.99, then the letter grade should be D.', () => {
    // Arrange
    var grade = 74.99

    // Act
    var result = gradeClassifier(grade)

    // Assert
    expect(result).toBe('D')
  });

  it('When grade is between 75.00 and 79.99, then the letter grade should be N.', () => {
    // Arrange
    var grade = 79.99

    // Act
    var result = gradeClassifier(grade)

    // Assert
    expect(result).toBe('N')
  });

  it('When grade is between 80.00 and 84.99, then the letter grade should be S.', () => {
    // Arrange
    var grade = 84.99

    // Act
    var result = gradeClassifier(grade)

    // Assert
    expect(result).toBe('S')
  });

  it('When grade is between 85.00 and 89.99, then the letter grade should be G.', () => {
    // Arrange
    var grade = 89.99

    // Act
    var result = gradeClassifier(grade)

    // Assert
    expect(result).toBe('G')
  });

  it('When grade is between 90.00 and 94.99, then the letter grade should be V.', () => {
    // Arrange
    var grade = 94.99

    // Act
    var result = gradeClassifier(grade)

    // Assert
    expect(result).toBe('V')
  });

  it('When grade is between 95.00 and 100, then the letter grade should be O.', () => {
    // Arrange
    var grade = 100

    // Act
    var result = gradeClassifier(grade)

    // Assert
    expect(result).toBe('O')
  });

  it('When grade is less than 0 or greater than 100, then the result should be Invalid.', () => {
    // Arrange
    var grade = 101

    // Act
    var result = gradeClassifier(grade)

    // Assert
    expect(result).toBe('Invalid')
  });

  it('When grade is not a number, then the result should be Invalid.', () => {
    // Arrange
    var grade = 'hello world'

    // Act
    var result = gradeClassifier(grade)

    // Assert
    expect(result).toBe('Invalid')
  });
});
