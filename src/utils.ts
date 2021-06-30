export const REG_EXP_PASSWORD = /[^\s]{6,}$/;
export const REG_EXP_EMAIL =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const regexpEmail = (value: string) =>
  value.match(REG_EXP_EMAIL) ? undefined : "Wrong characters for e-mail";
export const noSpaces = (value: string) =>
  REG_EXP_PASSWORD.test(value)
    ? undefined
    : "Password must not contain whitespaces";
export const required = (value: string) => (value ? undefined : "Required");
export const minValue = (min: number) => (value: string) =>
  value.length >= min ? undefined : `Must contain more than ${min} characters`;
export const composeValidators =
  (...validators: any) =>
  (value: string) =>
    validators.reduce(
      (error: any, validator: any) => error || validator(value),
      undefined
    );
