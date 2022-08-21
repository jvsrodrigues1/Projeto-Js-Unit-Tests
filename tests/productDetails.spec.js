const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // refencia do toBeInstanceOf = https://jestjs.io/pt-BR/docs/expect#tobeinstanceofclass //
    expect(typeof productDetails).toBe('function');
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true);
    expect(productDetails('Alcool gel', 'Máscara').length).toBe(2);
    expect(productDetails('Alcool gel', 'Máscara')[0]).toBeInstanceOf(Object);
    expect(productDetails('Alcool gel', 'Máscara')[1]).toBeInstanceOf(Object);
    expect(productDetails('Alcool gel', 'Máscara')[0]).not.toBe(productDetails('Alcool gel', 'Máscara')[1]);
    expect(productDetails('Alcool gel', 'Máscara')[0].details.productId).toMatch('123');
    expect(productDetails('Alcool gel', 'Máscara')[1].details.productId).toMatch('123');
  });
});
