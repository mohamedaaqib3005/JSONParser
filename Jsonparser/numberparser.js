function numberParser(input){
    const regex=(/^-?(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?/);
    const match = input.match(regex);
    if (!match) {
      return null;
    }
    const number = Number(match[0]);
    const remaining = input.slice(match[0].length);
    return [number,remaining];
    }

console.log(numberParser("-55"))





















