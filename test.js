console.log("--- test ---");

const CliSdk = require("./dist/index.js").default;

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