import { parse as swcParse, print as swcPrint } from '@swc/core';
import * as t from '@swc/types';
import * as b from './builders';

export const parse = async (code: string) => {
  const ast = await swcParse(code);

  return ast;
};

export const visit = async <T extends t.Node>(
  ast: t.Program,
  visitor: string,
  handler: (node: T) => T
) => {
  ast.body[0] = b.FunctionDeclaration(
    b.Identifier('foo'),
    b.BlockStatement([
      b.ExpressionStatement(
        b.CallExpression(b.Identifier('console.log'), [b.StringLiteral('foo')])
      ),
    ])
  );
};

export const print = async (ast: t.Program) => {
  return await swcPrint(ast);
};
