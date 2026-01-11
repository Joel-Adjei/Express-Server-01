export const errorMessageDisplay = (validation) => {
  return validation
    .array()
    .map((values) => ({ fleid: values.path, message: values.msg }));
};

export let usersData = [
  { id: 1, username: "Joel", password: "123456" },
  { id: 2, username: "Jane Smith", password: "123456" },
  { id: 3, username: "Alice Johnson", password: "123456" },
];
