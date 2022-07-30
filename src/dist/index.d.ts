declare namespace Cli {
    const rl: (message?: string) => Promise<string>;
    const wl: (message?: string) => void;
    const getArg: (index?: number) => string | undefined;
    const getArgs: () => string[];
    const hasKeyArg: (key: string, subKey?: string) => boolean;
    const getKeyArg: (key: string, subKey?: string) => string | undefined;
    const getKeyArgs: (key: string, subKey?: string) => string[];
}
export default Cli;
export declare const rl: (message?: string) => Promise<string>;
export declare const wl: (message?: string) => void;
export declare const getArg: (index?: number) => string | undefined;
export declare const getArgs: () => string[];
export declare const hasKeyArg: (key: string, subKey?: string) => boolean;
export declare const getKeyArg: (key: string, subKey?: string) => string | undefined;
export declare const getKeyArgs: (key: string, subKey?: string) => string[];
