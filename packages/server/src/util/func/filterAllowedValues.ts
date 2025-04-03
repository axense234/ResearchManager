export const filterAllowedValues = (
  values: string[],
  allowedValues: string[],
) => {
  return values.filter((value) => allowedValues.includes(value));
};
