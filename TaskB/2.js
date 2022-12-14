const original = {
  foo: 'one',
  bar: 2,
  baz: {
    foo: 4,
    bar: {
      foo: 0,
      bar: null,
    },
    baz: {
      foo: 1,
      bar: 6,
      baz: 'two',
    }
  }
}

const flat = (obj) => {
  let result = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      let flatObject = flat(obj[key]);
      for (let flatKey in flatObject) {
        result[key + '.' + flatKey] = flatObject[flatKey];
      }
    } else {
      if (obj[key] % 2 === 0)
        result[key] = obj[key];
    }
  }
  return result;
}


console.log(flat(original))
