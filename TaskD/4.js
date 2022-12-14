const twice = amount => Promise.resolve(amount * 2);
const add = (total, amount) => Promise.resolve(total + amount);
/* End of stubs */

const THRESHOLD = 10;
async function sumSmallDoubles(values) {
  let sum = 0;

  const doubles = await Promise.all(values.map(async (value) => {
    const double = await twice(value)
    return double
  }))

  for (const value of doubles) {
    if (value < THRESHOLD) {
      sum = await add(sum, value);
    }
  }

  return sum;
}

const testApiFunction = async () => {
  const result = await sumSmallDoubles([1, 4, 5, -2]);
  console.assert(result === 6, 'Result should be 6, found %i', result);
};

testApiFunction();