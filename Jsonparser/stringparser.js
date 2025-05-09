function stringParser(input) {
  const regex = /^"+["\\\x00-\x1F]/;

  let match = input.match(regex);
  if (!match) {
    return null;
  }
  let remaining = input.slice(match.length);

  return [match, remaining];

  console.log(stringParser("tsemongh$%%%"));
}
