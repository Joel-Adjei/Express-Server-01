const getItembyIdValidation = {
  id: {
    isNumeric: {
      errorMessage: "Should be a number",
    },
    notEmpty: {
      errorMessage: "Should not be null",
    },
  },
};

const updateUserValidation = {
  id: {
    isNumeric: {
      errorMessage: "Should be a number",
    },
    notEmpty: {
      errorMessage: "Should not be null",
    },
  },
  name: {
    isString: {
      errorMessage: "Name should be String",
    },
    notEmpty: {
      errorMessage: "Name is required",
    },
  },
};
export { getItembyIdValidation, updateUserValidation };
