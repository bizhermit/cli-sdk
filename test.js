console.log("--- test ---");

const cli = require("./dist/index.js").default;

// console.log(cli.getArg());
// console.log("10: ", cli.getArg(20));
// console.log(cli.hasKeyArg("--hoge"));
console.log(cli.getKeyArgs("--fuga", "-fuga"));
// console.log(cli.getKeyArgs("-hoge"));
// console.log(cli.getKeyArgs("-last"));

(async () => {
    // const inputs = [];
    // inputs.push(await cli.rl("input1 > "));
    // inputs.push(await cli.rl("input2 > "));
    // inputs.push(await cli.rl("input3 > "));
    // console.log(inputs);
    // for await (const text of inputs) {
    //     cli.wl(text);
    // }
})();