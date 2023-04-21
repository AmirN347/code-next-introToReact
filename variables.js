import { render } from './util';

// TODO: What is the value of foo? 'foo3' is returned  
render('variables1', () => {
  let foo = 'foo1';
  foo = 'foo2';
  foo = 'foo3';
  return foo;
});

// TODO: Fix this code.
render('variables2', () => {
  let bar = 'bar';
  return bar;
});

// TODO: Fix this code.
render('variables3', () => {
  let baz = 'baz';
  return baz;
});
