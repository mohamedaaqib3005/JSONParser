function falseParser(input) {
  if (!input.startsWith("false")) {
    return null;
  }

  const remaining = input.slice(5);
  return [false, remaining];
}
