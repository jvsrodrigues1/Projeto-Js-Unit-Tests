/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

// Aqui foram usadas referencias para o math.round  = https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round //

// E referencias para a linha valores = Math.round((valores /= array.length)); aqui = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division_assignment //

// continuacao das referencias = https://stackoverflow.com/questions/30542515/math-random-in-regards-to-arrays//

const average = (array) => {
let valores = 0;
for (let index of array) {
  if (typeof index !== 'number') {
    return undefined;
  }
  valores += index;
}
if (array.length !== 0) {
  valores = Math.round((valores /= array.length));
  return valores;
}
};

module.exports = average;
