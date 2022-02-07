# CLI SDK

CLI SDK.  

Install
```bash
npm i @bizhermit/cli-sdk
```

Example
```ts
import CliSdk from "@bizhermit/cli-sdk";

const func = async () => {
  const text = await CliSdk.rl("input > ");
  await CliSdk.wl(text);
};
func();
```

* ***rl(message?: string) => Promise\<string>***  
  read line.

* ***wl(message?: string) => void***  
  write line.

* ***hasArg(key: string) => boolean***  
  return has arg.
  ```bash
  node cli --hoge
  ```
  ```ts
  console.log(getArgs("--hoge")); // => true
  console.log(getArgs("--fuga")); // => false
  ```

* ***getArg(key: string) => string | undefined***
  return arg.
  ```bash
  node cli -hoge 1 2 3 4 -fuga 5 -piyo
  ```
  ```ts
  console.log(getArgs("-hoge")); // => "1"
  console.log(getArgs("-fuga")); // => "5"
  console.log(getArgs("-piyo")); // => undefined
  console.log(getArgs("-none")); // => undefined
  ```

* ***getArgs(key: string) => Array\<string>***
  return args. continue get until value start with hyphen.
  ```bash
  node cli -hoge 1 2 3 -fuga 4 -piyo
  ```
  ```ts
  console.log(getArgs("-hoge")); // => ["1", "2", "3"]
  console.log(getArgs("-fuga")); // => ["4"]
  console.log(getArgs("-piyo")); // => []
  console.log(getArgs("-none")); // => []
  ```