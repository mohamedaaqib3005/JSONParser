function parseNull(input){
    if (!input.startsWith("null"));
    return null;
    const remaining=input.slice(4);
    return [null,remaining];
}


