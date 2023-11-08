"use strict";

// src/lib.ts
var import_core = require("@swc/core");
var parse = async (code) => {
  const ast = await (0, import_core.parse)(code);
  return ast;
};
var print = async (ast) => {
  return await (0, import_core.print)(ast);
};

// src/script.ts
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
