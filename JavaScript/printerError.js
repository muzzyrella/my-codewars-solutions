function printerError(s) {
  const errors = s.match(RegExp(/[n-z]/, "g"));
  let errorCount = 0;
  if (errors) errorCount += errors.length;
  return `${errorCount}/${s.length}`;
}
