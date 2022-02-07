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

export const hasArg = (key: string) => {
    return process.argv.indexOf(key) > 0;
};

export const getArg = (key: string) => {
    const index = process.argv.findIndex(v => v === key);
    if (index < 0) return undefined;
    const val = process.argv[index + 1];
    if (val == null || val.startsWith("-")) return undefined;
    return val;
};

export const getArgs = (key: string) => {
    const index = process.argv.findIndex(v => v === key);
    const args: Array<string> = [];
    if (index < 0) return args;
    for (let i = index + 1, il = process.argv.length; i < il; i++) {
        const val = process.argv[i];
        if (val == null || val.startsWith("-")) break;
        args.push(val);
    }
    return args;
};

const CliSdk = {
    rl,
    wl,
    hasArg,
    getArg,
    getArgs,
};
export default CliSdk;