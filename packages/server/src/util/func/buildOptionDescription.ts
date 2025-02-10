export const buildOptionDescription = (
  optionType: 'select' | 'include',
  allowedValues: string[],
) => {
  return `The CSV values you want to ${optionType} in the payload. Available options: ${allowedValues.map(
    (option, index) => {
      if (index === allowedValues.length - 1) {
        return `${option}.`;
      } else {
        return ` ${option}`;
      }
    },
  )}`;
};
