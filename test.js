console.log("--- test ---");

const CliSdk = require("./dist/index.js").default;

console.log(CliSdk.hasArg("--hoge"));
console.log(CliSdk.getArg("-hoge"));
console.log(CliSdk.getArgs("-hoge"));
console.log(CliSdk.getArgs("-last"));

(async () => {
    const inputs = [];
    inputs.push(await CliSdk.rl("input1 > "));
    inputs.push(await CliSdk.rl("input2 > "));
    inputs.push(await CliSdk.rl("input3 > "));
    console.log(inputs);
    for await (const text of inputs) {
        CliSdk.wl(text);
    }
})();