export const required = (v) => {
  if (!v || v === "") {
    return "This field is required";
  }
  return undefined;
};

export const emailValidator = (v) => {
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  return validEmailRegex.test(v) ? undefined : "Email is not valid!";
};

export const charValidator = (v) => {
  var letters = /^[A-Za-z]+$/;
  return letters.test(v) ? undefined : "Enter only characters";
};

export const composeValidators =
  (...validators) =>
  (value) => {
    return validators.reduce((acc, cur) => acc || cur(value), undefined);
  };
