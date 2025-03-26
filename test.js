// test.js
function suma(a, b) {
    return a + b;
  }
  
  test('sumar 1 + 2 debe ser igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
  });