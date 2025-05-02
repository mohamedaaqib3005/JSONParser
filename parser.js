function parseNull(input) {
  if (!input.startsWith("null"));
  return null;
  const remaining = input.slice(4);
  return [null, remaining];
}

function booleanParser(input) {
  let remaining;
  let value;

  if (!input.startsWith("true") && !input.startsWith("false")) {
    return null;
  }
  if (input.startsWith("true")) {
    remaining = input.slice(4);
    value = true;
  } else {
    remaining = input.slice(5);
    value = false;
  }
  return [value, remaining];
}

console.log(booleanParser("truestring@@@%%*"));

function numberParser(input) {
  const regex = /^-?(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?/;
  const match = input.match(regex);
  if (!match) {
    return null;
  }
  const number = Number(match[0]);
  const remaining = input.slice(match[0].length);
  return [number, remaining];
}
console.log(numberParser("55adsaadaa4"));

function stringParser(input) {
  const regex = /^"+["\\\x00-\x1F]|()|()|()|()|()|()|()|()|()/;
}
