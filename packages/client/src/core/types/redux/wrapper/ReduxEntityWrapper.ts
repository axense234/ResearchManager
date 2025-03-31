export type ReduxEntityWrapper<
  EntityWrapper extends { createdAt: Date; updatedAt: Date },
> = {
  [K in keyof EntityWrapper]: K extends "createdAt" | "updatedAt"
    ? string
    : EntityWrapper[K];
};
