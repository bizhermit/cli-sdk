console.log("--- test ---");

const Cli = require("./dist/index.js").default;

// console.log(cli.getArg());
// console.log("10: ", cli.getArg(20));
// console.log(cli.hasKeyArg("--hoge"));
console.log(Cli.getKeyArgs("--fuga", "-fuga"));
// console.log(cli.getKeyArgs("-hoge"));
// console.log(cli.getKeyArgs("-last"));


(async () => {
    const inputs = [];
    inputs.push(await Cli.rl("input1 > "));
    inputs.push(await Cli.rl("input2 > "));
    console.log(inputs);
    inputs.push(await Cli.rl("input3 > "));
    for (const text of inputs) {
        Cli.wl(text);
    }
})();