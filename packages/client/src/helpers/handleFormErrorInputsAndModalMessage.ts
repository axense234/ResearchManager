export const handleFormErrorInputsAndModalMessage = (
  message: string[] | string,
  currentErrorFields: string[],
  errorFieldsUpdater: (errorMessage: string) => void,
) => {
  let returnMessage = message as string;

  if (typeof message !== "string") {
    (message as string[]).forEach((errorMessage) => {
      errorFieldsUpdater(errorMessage.split(" ")[0]);
    });

    const fields = new Set(currentErrorFields);

    if (fields.size > 1) {
      returnMessage = "Invalid values provided.";
    } else if (fields.size === 1) {
      returnMessage =
        (message as string[])[0][0].toUpperCase() +
        (message as string[])[0].slice(1) +
        ".";
      console.log(returnMessage);
    }
  }

  return { message: returnMessage };
};
