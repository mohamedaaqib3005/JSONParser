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
