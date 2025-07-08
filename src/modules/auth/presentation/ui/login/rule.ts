export const rule = {
  username: [{ required: true, message: "Please input your username!" }],
  password: [
    { required: true, message: "Please input your password!" },
    {
      min: 8,
      message: "Password must be at least 8 characters long.",
    },
    {
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/,
      message: "Password must include uppercase, lowercase, number, and special character.",
    },
  ],
};
