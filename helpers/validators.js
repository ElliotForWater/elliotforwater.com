const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

export function isEmail(value) {
  return isString(value) && regex.test(value);
}

export function isEmpty(value) {
  return isString(value) && value.trim().length === 0;
}
