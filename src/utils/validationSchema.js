const registerUserValidation = {
  name: {
    notEmpty: {
      errorMessage: "Name is required",
    },
    isString: {
      options: {
        min: 3,
        max: 20,
      },
      errorMessage:
        "Name should be more than 3 characters and less than 20 characters",
    },
  },
  email: {
    notEmpty: {
      errorMessage: "Email is Required",
    },
    isEmail: {
      errorMessage: "Invalid email format",
    },
  },
};

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
export { getItembyIdValidation, registerUserValidation, updateUserValidation };
