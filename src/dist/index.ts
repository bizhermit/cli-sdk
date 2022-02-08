export const rl = (message?: string) => {
    return new Promise<string>((resolve) => {
        if (message) process.stdout.write(message);
        process.stdin.resume().on("data", (data) => {
            process.stdin.pause();
            resolve(data.toString().trim());
        });
    });
};

export const wl = (message?: string) => {
    if (message) process.stdout.write(message + "\n");
};

export const getArg = (index = 0) => {
    const arg = process.argv[index + 2];
    if (arg == null) return undefined;
    return arg;
};

export const getArgs = () => {
    const args: Array<string> = [];
    for (let i = 2, il = process.argv.length; i < il; i++) args.push(process.argv[i]);
    return args;
};

export const hasKeyArg = (key: string, subKey?: string) => {
    return process.argv.indexOf(key) >= 0 || subKey == null ? false : process.argv.indexOf(subKey) >= 0;
};

export const getKeyArg = (key: string, subKey?: string) => {
    let index = process.argv.lastIndexOf(key);
    if (subKey != null) index = Math.max(index, process.argv.lastIndexOf(subKey));
    if (index < 0) return undefined;
    const val = process.argv[index + 1];
    if (val == null || val.startsWith("-")) return undefined;
    return val;
};

export const getKeyArgs = (key: string, subKey?: string) => {
    let index = process.argv.lastIndexOf(key);
    if (subKey != null) index = Math.max(index, process.argv.lastIndexOf(subKey));
    const args: Array<string> = [];
    if (index < 0) return args;
    for (let i = index + 1, il = process.argv.length; i < il; i++) {
        const val = process.argv[i];
        if (val == null || val.startsWith("-")) break;
        args.push(val);
    }
    return args;
};

const cli = {
    rl,
    wl,
    getArg,
    getArgs,
    hasKeyArg,
    getKeyArg,
    getKeyArgs,
};
export default cli;