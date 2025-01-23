import { createSchema, createTableSchema, definePermissions } from "@rocicorp/zero";

const userSchema = createTableSchema({
  tableName: "user",
  columns: {
    id: { type: "string" },
    username: { type: "string" },
  },
  primaryKey: ["id"],
});

const recipeSchema = createTableSchema({
  tableName: "recipe",
  columns: {
    id: { type: "string" },
    ownerId: { type: "string" },
    name: { type: "string" },
    description: { type: "string" },
  },
  relations: {
    owner: {
      sourceField: 'ownerId',
      destSchema: userSchema,
      destField: 'id',
    },
  },
  primaryKey: ["id"],
});

const recipeTagSchema = createTableSchema({
  tableName: "recipeTag",
  columns: {
    id: { type: "string" },
    ownerId: { type: "string" },
    recipeId: { type: "string" },
    name: { type: "string" },
  },
  relations: {
    owner: {
      sourceField: 'ownerId',
      destSchema: userSchema,
      destField: 'id',
    },
    recipe: {
      sourceField: 'recipeId',
      destSchema: recipeSchema,
      destField: 'id',
    },
  },
  primaryKey: ["id"],
});

const ingredientSchema = createTableSchema({
  tableName: "ingredient",
  columns: {
    id: { type: "string" },
    ownerId: { type: "string" },
    recipeId: { type: "string" },
    order: { type: "string" },
    quantity: { type: "string" },
    unit: { type: "string" },
    name: { type: "string" },
  },
  relations: {
    recipe: {
      sourceField: 'recipeId',
      destSchema: recipeSchema,
      destField: 'id',
    },
    owner: {
      sourceField: 'ownerId',
      destSchema: userSchema,
      destField: 'id',
    },
  },
  primaryKey: ["id"],
});

const recipeStepSchema = createTableSchema({
  tableName: "recipeStep",
  columns: {
    id: { type: "string" },
    ownerId: { type: "string" },
    recipeId: { type: "string" },
    order: { type: "string" },
    description: { type: "string" },
  },
  relations: {
    owner: {
      sourceField: 'ownerId',
      destSchema: userSchema,
      destField: 'id',
    },
    recipe: {
      sourceField: 'recipeId',
      destSchema: recipeSchema,
      destField: 'id',
    },
  },
  primaryKey: ["id"],
});

export const schema = createSchema({
  version: 1,
  tables: {
    user: userSchema,
    recipe: recipeSchema,
    recipeTag: recipeTagSchema,
    ingredient: ingredientSchema,
    recipeStep: recipeStepSchema,
  },
});

export type Schema = typeof schema;

export const permissions = definePermissions(schema, () => ({}));
