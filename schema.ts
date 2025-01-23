import type { Row } from "@rocicorp/zero";
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
  relationships: {
    owner: {
      sourceField: "ownerId",
      destSchema: userSchema,
      destField: 'id',
    },
    ingredients: {
      sourceField: "id",
      destSchema: () => ingredientSchema,
      destField: "recipeId",
    },
    steps: {
      sourceField: "id",
      destSchema: () => recipeStepSchema,
      destField: "recipeId",
    },
    tags: {
      sourceField: "id",
      destSchema: () => recipeTagSchema,
      destField: "recipeId",
    },
  },
  primaryKey: ["id"],
} as const);

const recipeTagSchema = createTableSchema({
  tableName: "recipeTag",
  columns: {
    id: { type: "string" },
    ownerId: { type: "string" },
    recipeId: { type: "string" },
    name: { type: "string" },
  },
  // relationships: {
  //   owner: {
  //     sourceField: 'ownerId',
  //     destSchema: userSchema,
  //     destField: 'id',
  //   },
  //   recipe: {
  //     sourceField: 'recipeId',
  //     destSchema: recipeSchema,
  //     destField: 'id',
  //   },
  // },
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
  // relationships: {
  //   recipe: {
  //     sourceField: 'recipeId',
  //     destSchema: recipeSchema,
  //     destField: 'id',
  //   },
  //   owner: {
  //     sourceField: 'ownerId',
  //     destSchema: userSchema,
  //     destField: 'id',
  //   },
  // },
  primaryKey: ["id"],
} as const);

const recipeStepSchema = createTableSchema({
  tableName: "recipeStep",
  columns: {
    id: { type: "string" },
    ownerId: { type: "string" },
    recipeId: { type: "string" },
    order: { type: "string" },
    description: { type: "string" },
  },
  // relations: {
  //   owner: {
  //     sourceField: 'ownerId',
  //     destSchema: userSchema,
  //     destField: 'id',
  //   },
  //   recipe: {
  //     sourceField: 'recipeId',
  //     destSchema: recipeSchema,
  //     destField: 'id',
  //   },
  // },
  primaryKey: ["id"],
} as const);

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
export type User = Row<typeof userSchema>;
export type Recipe = Row<typeof recipeSchema>;
export type RecipeTag = Row<typeof recipeTagSchema>;
export type Ingredient = Row<typeof ingredientSchema>;
export type RecipeStep = Row<typeof recipeStepSchema>;

export const permissions = definePermissions(schema, () => ({}));
