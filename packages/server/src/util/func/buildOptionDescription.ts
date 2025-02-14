export const buildOptionDescription = (
  optionType: 'select' | 'include' | 'search by key' | 'sort by keys',
  allowedValues: string[],
) => {
  return `The ${optionType === 'search by key' ? 'value' : 'CSV values'} you want to ${optionType} in the payload. Available options: ${allowedValues.map(
    (option, index) => {
      if (index === allowedValues.length - 1) {
        return ` ${option}.`;
      } else {
        return ` ${option}`;
      }
    },
  )}`;
};
