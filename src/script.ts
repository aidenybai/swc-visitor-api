import { parse, print } from './lib';

(async () => {
  const code = `
  function foo() {
    console.log('foo');
  }
`;

  const ast = await parse(code);
  const newCode = await print(ast);
  console.log(newCode);
})();
