export const handleFormErrorInputsAndModalMessage = (
  message: string[] | string,
) => {
  let returnMessage = message as string;
  let errorFields = [];

  if (typeof message !== "string") {
    (message as string[]).forEach((errorMessage) => {
      errorFields.push(errorMessage.split(" ")[0]);
    });

    const fields = new Set(errorFields);

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

  return { message: returnMessage, errorFields };
};
