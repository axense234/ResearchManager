export type ReduxEntityWrapper<
  EntityWrapper extends {
    createdAt?: Date;
    updatedAt?: Date;
    currentStatusDate?: Date;
  },
> = {
  [K in keyof EntityWrapper]: K extends
    | "createdAt"
    | "updatedAt"
    | "currentStatusDate"
    ? string
    : EntityWrapper[K];
};
