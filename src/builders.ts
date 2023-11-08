import * as t from '@swc/types';

export const Span = (start: number, end: number, ctxt: number) => ({
  start,
  end,
  ctxt,
});
export const HasSpan = (span: t.Span) => ({ span });
export const HasDecorator = (decorators?: t.Decorator[]) => ({ decorators });
export const Expression = (type: string) => ({ type });
export const ClassMember = (member: t.ClassMember) => ({ member });
export const ClassPropertyBase = (
  isStatic: boolean,
  isOptional: boolean,
  isOverride: boolean,
  readonly: boolean,
  definite: boolean
) => ({ isStatic, isOptional, isOverride, readonly, definite });
export const ClassProperty = (
  key: t.PropertyName,
  isStatic: boolean,
  isAbstract: boolean,
  declare: boolean,
  isOptional: boolean,
  isOverride: boolean,
  readonly: boolean,
  definite: boolean
) => ({
  ...ClassPropertyBase(isStatic, isOptional, isOverride, readonly, definite),
  key,
  isAbstract,
  declare,
  type: 'ClassProperty',
});
export const PrivateProperty = (
  key: t.PrivateName,
  isStatic: boolean,
  isOptional: boolean,
  isOverride: boolean,
  readonly: boolean,
  definite: boolean
) => ({
  ...ClassPropertyBase(isStatic, isOptional, isOverride, readonly, definite),
  key,
  type: 'PrivateProperty',
});
export const Param = (pat: t.Pattern) => ({ type: 'Parameter', pat });
export const Constructor = (
  key: t.PropertyName,
  params: (t.TsParameterProperty | t.Param)[],
  isOptional: boolean
) => ({ type: 'Constructor', key, params, isOptional });
export const ClassMethodBase = (
  functionParameters: t.Fn,
  kind: t.MethodKind,
  isStatic: boolean,
  isAbstract: boolean,
  isOptional: boolean,
  isOverride: boolean
) => ({
  ...functionParameters,
  kind,
  isStatic,
  isAbstract,
  isOptional,
  isOverride,
});
export const ClassMethod = (
  key: t.PropertyName,
  kind: t.MethodKind,
  isStatic: boolean,
  isAbstract: boolean,
  isOptional: boolean,
  isOverride: boolean,
  functionParameters: t.Fn
) => ({
  ...ClassMethodBase(
    functionParameters,
    kind,
    isStatic,
    isAbstract,
    isOptional,
    isOverride
  ),
  key,
  type: 'ClassMethod',
});
export const PrivateMethod = (
  key: t.PrivateName,
  kind: t.MethodKind,
  isStatic: boolean,
  isAbstract: boolean,
  isOptional: boolean,
  isOverride: boolean,
  functionParameters: t.Fn
) => ({
  ...ClassMethodBase(
    functionParameters,
    kind,
    isStatic,
    isAbstract,
    isOptional,
    isOverride
  ),
  key,
  type: 'PrivateMethod',
});
export const StaticBlock = (body: t.BlockStatement) => ({
  type: 'StaticBlock',
  body,
});
export const Decorator = (expression: t.Expression) => ({
  type: 'Decorator',
  expression,
});
export const FunctionDeclaration = (
  identifier: t.Identifier,
  functionParameters: t.Fn,
  declare: boolean = false
) => ({
  ...functionParameters,
  identifier,
  declare,
  type: 'FunctionDeclaration',
});
export const ClassDeclaration = (
  identifier: t.Identifier,
  classDetails: t.Class,
  declare: boolean = false
) => ({ ...classDetails, identifier, declare, type: 'ClassDeclaration' });
export const VariableDeclaration = (
  kind: t.VariableDeclarationKind,
  declare: boolean,
  declarations: t.VariableDeclarator[]
) => ({ type: 'VariableDeclaration', kind, declare, declarations });
export const VariableDeclarator = (
  id: t.Pattern,
  init?: t.Expression,
  definite: boolean = false
) => ({ type: 'VariableDeclarator', id, definite, init });
export const Identifier = (value: string, optional: boolean) => ({
  type: 'Identifier',
  value,
  optional,
});
export const OptionalChainingExpression = (
  questionDotToken: t.Span,
  base: t.MemberExpression | t.OptionalChainingCall
) => ({ type: 'OptionalChainingExpression', questionDotToken, base });
export const OptionalChainingCall = (
  callee: t.Expression,
  argumentsArray: t.ExprOrSpread[],
  typeArguments?: t.TsTypeParameterInstantiation
) => ({
  type: 'CallExpression',
  callee,
  arguments: argumentsArray,
  typeArguments,
});
export const ThisExpression = () => ({ type: 'ThisExpression' });
export const ArrayExpression = (elements: (t.ExprOrSpread | undefined)[]) => ({
  type: 'ArrayExpression',
  elements,
});
export const ObjectExpression = (
  properties: (t.SpreadElement | t.Property)[]
) => ({ type: 'ObjectExpression', properties });
export const SpreadElement = (spread: t.Span, argument: t.Expression) => ({
  type: 'SpreadElement',
  spread,
  argument,
});
export const UnaryExpression = (
  operator: t.UnaryOperator,
  argument: t.Expression
) => ({ type: 'UnaryExpression', operator, argument });
export const UpdateExpression = (
  operator: t.UpdateOperator,
  prefix: boolean,
  argument: t.Expression
) => ({ type: 'UpdateExpression', operator, prefix, argument });
export const BinaryExpression = (
  operator: t.BinaryOperator,
  left: t.Expression,
  right: t.Expression
) => ({ type: 'BinaryExpression', operator, left, right });
export const FunctionExpression = (
  identifier: t.Identifier | undefined,
  functionParameters: t.Fn
) => ({ ...functionParameters, identifier, type: 'FunctionExpression' });
export const ClassExpression = (
  identifier: t.Identifier | undefined,
  classDetails: t.Class
) => ({ ...classDetails, identifier, type: 'ClassExpression' });
export const AssignmentExpression = (
  operator: t.AssignmentOperator,
  left: t.Expression | t.Pattern,
  right: t.Expression
) => ({ type: 'AssignmentExpression', operator, left, right });
export const MemberExpression = (
  object: t.Expression,
  property: t.Identifier | t.PrivateName | t.ComputedPropName
) => ({ type: 'MemberExpression', object, property });
export const SuperPropExpression = (
  obj: t.Super,
  property: t.Identifier | t.ComputedPropName
) => ({ type: 'SuperPropExpression', obj, property });
export const ConditionalExpression = (
  test: t.Expression,
  consequent: t.Expression,
  alternate: t.Expression
) => ({ type: 'ConditionalExpression', test, consequent, alternate });
export const Super = () => ({ type: 'Super' });
export const Import = () => ({ type: 'Import' });
export const CallExpression = (
  callee: t.Super | t.Import | t.Expression,
  argumentsArray: t.Argument[],
  typeArguments?: t.TsTypeParameterInstantiation
) => ({
  type: 'CallExpression',
  callee,
  arguments: argumentsArray,
  typeArguments,
});
export const NewExpression = (
  callee: t.Expression,
  argumentsArray?: t.Argument[],
  typeArguments?: t.TsTypeParameterInstantiation
) => ({
  type: 'NewExpression',
  callee,
  arguments: argumentsArray,
  typeArguments,
});
export const SequenceExpression = (expressions: t.Expression[]) => ({
  type: 'SequenceExpression',
  expressions,
});
export const ArrowFunctionExpression = (
  params: t.Pattern[],
  body: t.BlockStatement | t.Expression,
  async: boolean,
  generator: boolean,
  typeParameters?: t.TsTypeParameterDeclaration,
  returnType?: t.TsTypeAnnotation
) => ({
  type: 'ArrowFunctionExpression',
  params,
  body,
  async,
  generator,
  typeParameters,
  returnType,
});
export const YieldExpression = (
  argument: t.Expression | undefined,
  delegate: boolean
) => ({ type: 'YieldExpression', argument, delegate });
export const MetaProperty = (kind: 'new.target' | 'import.meta') => ({
  type: 'MetaProperty',
  kind,
});
export const AwaitExpression = (argument: t.Expression) => ({
  type: 'AwaitExpression',
  argument,
});
export const TemplateLiteral = (
  expressions: t.Expression[],
  quasis: t.TemplateElement[]
) => ({ type: 'TemplateLiteral', expressions, quasis });
export const TaggedTemplateExpression = (
  tag: t.Expression,
  typeParameters: t.TsTypeParameterInstantiation | undefined,
  template: t.TemplateLiteral
) => ({ type: 'TaggedTemplateExpression', tag, typeParameters, template });
export const TemplateElement = (
  tail: boolean,
  raw: string,
  cooked?: string
) => ({ type: 'TemplateElement', tail, raw, cooked });
export const ParenthesisExpression = (expression: t.Expression) => ({
  type: 'ParenthesisExpression',
  expression,
});
export const PrivateName = (id: t.Identifier) => ({ type: 'PrivateName', id });
export const JSXMemberExpression = (
  object: t.JSXObject,
  property: t.Identifier
) => ({ type: 'JSXMemberExpression', object, property });
export const JSXNamespacedName = (
  namespace: t.Identifier,
  name: t.Identifier
) => ({ type: 'JSXNamespacedName', namespace, name });
export const JSXEmptyExpression = () => ({ type: 'JSXEmptyExpression' });
export const JSXExpressionContainer = (expression: t.JSXExpression) => ({
  type: 'JSXExpressionContainer',
  expression,
});
export const JSXSpreadChild = (expression: t.Expression) => ({
  type: 'JSXSpreadChild',
  expression,
});
export const JSXOpeningElement = (
  name: t.JSXElementName,
  attributes: t.JSXAttributeOrSpread[],
  selfClosing: boolean,
  typeArguments?: t.TsTypeParameterInstantiation
) => ({
  type: 'JSXOpeningElement',
  name,
  attributes,
  selfClosing,
  typeArguments,
});
export const JSXClosingElement = (name: t.JSXElementName) => ({
  type: 'JSXClosingElement',
  name,
});
export const JSXAttribute = (
  name: t.JSXAttributeName,
  value?: t.JSXAttrValue
) => ({ type: 'JSXAttribute', name, value });
export const JSXText = (value: string, raw: string) => ({
  type: 'JSXText',
  value,
  raw,
});
export const JSXElement = (
  opening: t.JSXOpeningElement,
  children: t.JSXElementChild[],
  closing?: t.JSXClosingElement
) => ({ type: 'JSXElement', opening, children, closing });
export const JSXFragment = (
  opening: t.JSXOpeningFragment,
  children: t.JSXElementChild[],
  closing: t.JSXClosingFragment
) => ({ type: 'JSXFragment', opening, children, closing });
export const JSXOpeningFragment = () => ({ type: 'JSXOpeningFragment' });
export const JSXClosingFragment = () => ({ type: 'JSXClosingFragment' });
export const StringLiteral = (value: string) => ({
  type: 'StringLiteral',
  value,
});
export const BooleanLiteral = (value: boolean) => ({
  type: 'BooleanLiteral',
  value,
});
export const NullLiteral = () => ({ type: 'NullLiteral' });
export const RegExpLiteral = (pattern: string, flags: string) => ({
  type: 'RegExpLiteral',
  pattern,
  flags,
});
export const NumericLiteral = (value: number) => ({
  type: 'NumericLiteral',
  value,
});
export const BigIntLiteral = (value: bigint) => ({
  type: 'BigIntLiteral',
  value,
});
export const ExportDefaultExpression = (expression: t.Expression) => ({
  type: 'ExportDefaultExpression',
  expression,
});
export const ExportDeclaration = (declaration: t.Declaration) => ({
  type: 'ExportDeclaration',
  declaration,
});
export const ImportDeclaration = (
  specifiers: t.ImportSpecifier[],
  source: t.StringLiteral,
  typeOnly: boolean,
  asserts?: t.ObjectExpression
) => ({ type: 'ImportDeclaration', specifiers, source, typeOnly, asserts });
export const ExportAllDeclaration = (
  source: t.StringLiteral,
  asserts?: t.ObjectExpression
) => ({ type: 'ExportAllDeclaration', source, asserts });
export const ExportNamedDeclaration = (
  specifiers: t.ExportSpecifier[],
  source: t.StringLiteral | undefined,
  typeOnly: boolean,
  asserts?: t.ObjectExpression
) => ({
  type: 'ExportNamedDeclaration',
  specifiers,
  source,
  typeOnly,
  asserts,
});
export const ExportDefaultDeclaration = (decl: t.DefaultDecl) => ({
  type: 'ExportDefaultDeclaration',
  decl,
});
export const ImportDefaultSpecifier = (local: t.Identifier) => ({
  type: 'ImportDefaultSpecifier',
  local,
});
export const ImportNamespaceSpecifier = (local: t.Identifier) => ({
  type: 'ImportNamespaceSpecifier',
  local,
});
export const NamedImportSpecifier = (
  local: t.Identifier,
  imported: t.ModuleExportName | undefined,
  isTypeOnly: boolean
) => ({ type: 'ImportSpecifier', local, imported, isTypeOnly });
export const ExportNamespaceSpecifier = (name: t.ModuleExportName) => ({
  type: 'ExportNamespaceSpecifier',
  name,
});
export const ExportDefaultSpecifier = (exported: t.Identifier) => ({
  type: 'ExportDefaultSpecifier',
  exported,
});
export const NamedExportSpecifier = (
  orig: t.ModuleExportName,
  exported: t.ModuleExportName | undefined,
  isTypeOnly: boolean
) => ({ type: 'ExportSpecifier', orig, exported, isTypeOnly });
export const Module = (body: t.ModuleItem[], interpreter: string) => ({
  type: 'Module',
  body,
  interpreter,
});
export const Script = (body: t.Statement[], interpreter: string) => ({
  type: 'Script',
  body,
  interpreter,
});
export const BlockStatement = (stmts: t.Statement[]) => ({
  type: 'BlockStatement',
  stmts,
});
export const ExpressionStatement = (expression: t.Expression) => ({
  type: 'ExpressionStatement',
  expression,
});
export const EmptyStatement = () => ({ type: 'EmptyStatement' });
export const DebuggerStatement = () => ({ type: 'DebuggerStatement' });
export const WithStatement = (object: t.Expression, body: t.Statement) => ({
  type: 'WithStatement',
  object,
  body,
});
export const ReturnStatement = (argument?: t.Expression) => ({
  type: 'ReturnStatement',
  argument,
});
export const LabeledStatement = (label: t.Identifier, body: t.Statement) => ({
  type: 'LabeledStatement',
  label,
  body,
});
export const BreakStatement = (label?: t.Identifier) => ({
  type: 'BreakStatement',
  label,
});
export const ContinueStatement = (label?: t.Identifier) => ({
  type: 'ContinueStatement',
  label,
});
export const IfStatement = (
  test: t.Expression,
  consequent: t.Statement,
  alternate?: t.Statement
) => ({ type: 'IfStatement', test, consequent, alternate });
export const SwitchStatement = (
  discriminant: t.Expression,
  cases: t.SwitchCase[]
) => ({ type: 'SwitchStatement', discriminant, cases });
export const ThrowStatement = (argument: t.Expression) => ({
  type: 'ThrowStatement',
  argument,
});
export const TryStatement = (
  block: t.BlockStatement,
  handler?: t.CatchClause,
  finalizer?: t.BlockStatement
) => ({ type: 'TryStatement', block, handler, finalizer });
export const WhileStatement = (test: t.Expression, body: t.Statement) => ({
  type: 'WhileStatement',
  test,
  body,
});
export const DoWhileStatement = (test: t.Expression, body: t.Statement) => ({
  type: 'DoWhileStatement',
  test,
  body,
});
export const ForStatement = (
  init: t.VariableDeclaration | t.Expression | undefined,
  test: t.Expression | undefined,
  update: t.Expression | undefined,
  body: t.Statement
) => ({ type: 'ForStatement', init, test, update, body });
export const ForInStatement = (
  left: t.VariableDeclaration | t.Pattern,
  right: t.Expression,
  body: t.Statement
) => ({ type: 'ForInStatement', left, right, body });
export const ForOfStatement = (
  left: t.VariableDeclaration | t.Pattern,
  right: t.Expression,
  body: t.Statement,
  awaitToken?: t.Span
) => ({ type: 'ForOfStatement', left, right, body, await: awaitToken });
export const SwitchCase = (
  test: t.Expression | undefined,
  consequent: t.Statement[]
) => ({
  type: 'SwitchCase',
  test,
  consequent,
});
export const CatchClause = (
  param: t.Pattern | undefined,
  body: t.BlockStatement
) => ({
  type: 'CatchClause',
  param,
  body,
});
export const TsTypeAnnotation = (typeAnnotation: t.TsType) => ({
  type: 'TsTypeAnnotation',
  typeAnnotation,
});
export const TsTypeParameterDeclaration = (
  parameters: t.TsTypeParameter[]
) => ({ type: 'TsTypeParameterDeclaration', parameters });
export const TsTypeParameter = (
  name: t.Identifier,
  _in: boolean,
  out: boolean,
  constraint?: t.TsType,
  _default?: t.TsType
) => ({
  type: 'TsTypeParameter',
  name,
  in: _in,
  out,
  constraint,
  default: _default,
});
export const TsTypeParameterInstantiation = (params: t.TsType[]) => ({
  type: 'TsTypeParameterInstantiation',
  params,
});
export const TsParameterProperty = (
  accessibility: t.Accessibility | undefined,
  override: boolean,
  readonly: boolean,
  param: t.TsParameterPropertyParameter
) => ({
  type: 'TsParameterProperty',
  accessibility,
  override,
  readonly,
  param,
});
export const TsQualifiedName = (left: t.TsEntityName, right: t.Identifier) => ({
  type: 'TsQualifiedName',
  left,
  right,
});
export const TsCallSignatureDeclaration = (
  params: t.TsFnParameter[],
  typeAnnotation?: t.TsTypeAnnotation,
  typeParams?: t.TsTypeParameterDeclaration
) => ({
  type: 'TsCallSignatureDeclaration',
  params,
  typeAnnotation,
  typeParams,
});
export const TsConstructSignatureDeclaration = (
  params: t.TsFnParameter[],
  typeAnnotation?: t.TsTypeAnnotation,
  typeParams?: t.TsTypeParameterDeclaration
) => ({
  type: 'TsConstructSignatureDeclaration',
  params,
  typeAnnotation,
  typeParams,
});
export const TsPropertySignature = (
  readonly: boolean,
  key: t.Expression,
  computed: boolean,
  optional: boolean,
  init: t.Expression | undefined,
  params: t.TsFnParameter[],
  typeAnnotation?: t.TsTypeAnnotation,
  typeParams?: t.TsTypeParameterDeclaration
) => ({
  type: 'TsPropertySignature',
  readonly,
  key,
  computed,
  optional,
  init,
  params,
  typeAnnotation,
  typeParams,
});
export const TsGetterSignature = (
  readonly: boolean,
  key: t.Expression,
  computed: boolean,
  optional: boolean,
  typeAnnotation?: t.TsTypeAnnotation
) => ({
  type: 'TsGetterSignature',
  readonly,
  key,
  computed,
  optional,
  typeAnnotation,
});
export const TsSetterSignature = (
  readonly: boolean,
  key: t.Expression,
  computed: boolean,
  optional: boolean,
  param: t.TsFnParameter
) => ({ type: 'TsSetterSignature', readonly, key, computed, optional, param });
export const TsMethodSignature = (
  readonly: boolean,
  key: t.Expression,
  computed: boolean,
  optional: boolean,
  params: t.TsFnParameter[],
  typeAnn?: t.TsTypeAnnotation,
  typeParams?: t.TsTypeParameterDeclaration
) => ({
  type: 'TsMethodSignature',
  readonly,
  key,
  computed,
  optional,
  params,
  typeAnn,
  typeParams,
});
export const TsIndexSignature = (
  params: t.TsFnParameter[],
  readonly: boolean,
  typeAnnotation: t.TsTypeAnnotation | undefined,
  staticFlag: boolean
) => ({
  type: 'TsIndexSignature',
  params,
  typeAnnotation,
  readonly,
  static: staticFlag,
});
export const TsKeywordType = (kind: t.TsKeywordTypeKind) => ({
  type: 'TsKeywordType',
  kind,
});
export const TsThisType = () => ({ type: 'TsThisType' });
export const TsFunctionType = (
  params: t.TsFnParameter[],
  typeAnnotation: t.TsTypeAnnotation,
  typeParams?: t.TsTypeParameterDeclaration
) => ({ type: 'TsFunctionType', params, typeAnnotation, typeParams });
export const TsConstructorType = (
  params: t.TsFnParameter[],
  typeAnnotation: t.TsTypeAnnotation,
  isAbstract: boolean,
  typeParams?: t.TsTypeParameterDeclaration
) => ({
  type: 'TsConstructorType',
  params,
  typeAnnotation,
  isAbstract,
  typeParams,
});
export const TsTypeReference = (
  typeName: t.TsEntityName,
  typeParams?: t.TsTypeParameterInstantiation
) => ({ type: 'TsTypeReference', typeName, typeParams });
export const TsTypePredicate = (
  asserts: boolean,
  paramName: t.TsThisTypeOrIdent,
  typeAnnotation?: t.TsTypeAnnotation
) => ({ type: 'TsTypePredicate', asserts, paramName, typeAnnotation });
export const TsImportType = (
  argument: t.StringLiteral,
  qualifier?: t.TsEntityName,
  typeArguments?: t.TsTypeParameterInstantiation
) => ({ type: 'TsImportType', argument, qualifier, typeArguments });
export const TsTypeQuery = (
  exprName: t.TsTypeQueryExpr,
  typeArguments?: t.TsTypeParameterInstantiation
) => ({ type: 'TsTypeQuery', exprName, typeArguments });
export const TsTypeLiteral = (members: t.TsTypeElement[]) => ({
  type: 'TsTypeLiteral',
  members,
});
export const TsArrayType = (elemType: t.TsType) => ({
  type: 'TsArrayType',
  elemType,
});
export const TsTupleType = (elemTypes: t.TsTupleElement[]) => ({
  type: 'TsTupleType',
  elemTypes,
});
export const TsTupleElement = (label: t.Pattern | undefined, ty: t.TsType) => ({
  type: 'TsTupleElement',
  label,
  ty,
});
export const TsOptionalType = (typeAnnotation: t.TsType) => ({
  type: 'TsOptionalType',
  typeAnnotation,
});
export const TsRestType = (typeAnnotation: t.TsType) => ({
  type: 'TsRestType',
  typeAnnotation,
});
export const TsUnionType = (types: t.TsType[]) => ({
  type: 'TsUnionType',
  types,
});
export const TsIntersectionType = (types: t.TsType[]) => ({
  type: 'TsIntersectionType',
  types,
});
export const TsConditionalType = (
  checkType: t.TsType,
  extendsType: t.TsType,
  trueType: t.TsType,
  falseType: t.TsType
) => ({
  type: 'TsConditionalType',
  checkType,
  extendsType,
  trueType,
  falseType,
});
export const TsInferType = (typeParam: t.TsTypeParameter) => ({
  type: 'TsInferType',
  typeParam,
});
export const TsParenthesizedType = (typeAnnotation: t.TsType) => ({
  type: 'TsParenthesizedType',
  typeAnnotation,
});
export const TsTypeOperator = (
  op: t.TsTypeOperatorOp,
  typeAnnotation: t.TsType
) => ({ type: 'TsTypeOperator', op, typeAnnotation });
export const TsIndexedAccessType = (
  readonly: boolean,
  objectType: t.TsType,
  indexType: t.TsType
) => ({ type: 'TsIndexedAccessType', readonly, objectType, indexType });
export const TsMappedType = (
  typeParam: t.TsTypeParameter,
  nameType?: t.TsType,
  readonly?: t.TruePlusMinus,
  optional?: t.TruePlusMinus,
  typeAnnotation?: t.TsType
) => ({
  type: 'TsMappedType',
  typeParam,
  nameType,
  readonly,
  optional,
  typeAnnotation,
});
export const TsLiteralType = (literal: t.TsLiteral) => ({
  type: 'TsLiteralType',
  literal,
});
export const TsTemplateLiteralType = (
  types: t.TsType[],
  quasis: t.TemplateElement[]
) => ({ type: 'TsTemplateLiteralType', types, quasis });
export const TsInterfaceDeclaration = (
  id: t.Identifier,
  declare: boolean,
  extendsArray: t.TsExpressionWithTypeArguments[],
  body: t.TsInterfaceBody,
  typeParams?: t.TsTypeParameterDeclaration
) => ({
  type: 'TsInterfaceDeclaration',
  id,
  declare,
  extends: extendsArray,
  body,
  typeParams,
});
export const TsInterfaceBody = (body: t.TsTypeElement[]) => ({
  type: 'TsInterfaceBody',
  body,
});
export const TsExpressionWithTypeArguments = (
  expression: t.Expression,
  typeArguments?: t.TsTypeParameterInstantiation
) => ({ type: 'TsExpressionWithTypeArguments', expression, typeArguments });
export const TsTypeAliasDeclaration = (
  declare: boolean,
  id: t.Identifier,
  typeParams: t.TsTypeParameterDeclaration | undefined,
  typeAnnotation: t.TsType
) => ({
  type: 'TsTypeAliasDeclaration',
  declare,
  id,
  typeParams,
  typeAnnotation,
});
export const TsEnumDeclaration = (
  declare: boolean,
  isConst: boolean,
  id: t.Identifier,
  members: t.TsEnumMember[]
) => ({ type: 'TsEnumDeclaration', declare, isConst, id, members });
export const TsEnumMember = (id: t.TsEnumMemberId, init?: t.Expression) => ({
  type: 'TsEnumMember',
  id,
  init,
});
export const TsModuleDeclaration = (
  declare: boolean,
  global: boolean,
  id: t.TsModuleName,
  body?: t.TsNamespaceBody
) => ({ type: 'TsModuleDeclaration', declare, global, id, body });
export const TsModuleBlock = (body: t.ModuleItem[]) => ({
  type: 'TsModuleBlock',
  body,
});
export const TsNamespaceDeclaration = (
  declare: boolean,
  global: boolean,
  id: t.Identifier,
  body: t.TsNamespaceBody
) => ({ type: 'TsNamespaceDeclaration', declare, global, id, body });
export const TsImportEqualsDeclaration = (
  declare: boolean,
  isExport: boolean,
  isTypeOnly: boolean,
  id: t.Identifier,
  moduleRef: t.TsModuleReference
) => ({
  type: 'TsImportEqualsDeclaration',
  declare,
  isExport,
  isTypeOnly,
  id,
  moduleRef,
});
export const TsExternalModuleReference = (expression: t.StringLiteral) => ({
  type: 'TsExternalModuleReference',
  expression,
});
export const TsExportAssignment = (expression: t.Expression) => ({
  type: 'TsExportAssignment',
  expression,
});
export const TsNamespaceExportDeclaration = (id: t.Identifier) => ({
  type: 'TsNamespaceExportDeclaration',
  id,
});
export const TsAsExpression = (
  expression: t.Expression,
  typeAnnotation: t.TsType
) => ({ type: 'TsAsExpression', expression, typeAnnotation });
export const TsSatisfiesExpression = (
  expression: t.Expression,
  typeAnnotation: t.TsType
) => ({ type: 'TsSatisfiesExpression', expression, typeAnnotation });
export const TsInstantiation = (
  expression: t.Expression,
  typeArguments: t.TsTypeParameterInstantiation
) => ({ type: 'TsInstantiation', expression, typeArguments });
export const TsTypeAssertion = (
  expression: t.Expression,
  typeAnnotation: t.TsType
) => ({ type: 'TsTypeAssertion', expression, typeAnnotation });
export const TsConstAssertion = (expression: t.Expression) => ({
  type: 'TsConstAssertion',
  expression,
});
export const TsNonNullExpression = (expression: t.Expression) => ({
  type: 'TsNonNullExpression',
  expression,
});
export const Invalid = () => ({ type: 'Invalid' });
