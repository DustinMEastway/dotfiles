/** Convert the passed in arguments to a JSON string. */
function main() {
  const args: Record<string, boolean | string> = {};
  let lastArg = null as string | null;
  process.argv.slice(2).forEach((arg) => {
    if (arg.startsWith('-')) {
      lastArg = arg.replace(/^-+(.*?)(?:=(.*))?$/, '$1');
      const argValue = arg.replace(/^-+(.*?)(?:=(.*))?$/, '$2')
      args[lastArg] = (argValue) ? argValue : true;
    } else if (lastArg != null) {
      // This is a value for the prior argument.
      args[lastArg] = arg;
    }
  });

  console.log(JSON.stringify(args));
}

main();
