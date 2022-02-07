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

const CliSdk = {
    rl,
    wl,
};
export default CliSdk;