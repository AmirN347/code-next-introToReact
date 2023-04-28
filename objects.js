import { render } from './util';

// TODO: What is the value of foo.bar and foo.baz? 42 and undefined is returned
render('objects1', () => {
  const foo = {
    bar: 42,
  };
  return `foo.bar: ${foo.bar}, foo.baz: ${foo.baz}`;
});

// TODO: Create an object of objects and return it.
render('objects2', () => {
  const zoo = {
    zebra: 42,
    tiger: 2,
    lion: 5,
  };
  return zoo;
});

// TODO: Create an array of objects and return the element at index 0.
render('objects3', () => {
  const arr = [0, 1, 2, 3];
  return arr[0];
});
