# CLI SDK

CLI SDK.  

Install
```bash
npm i @bizhermit/cli-utils
```

Example
```ts
import Cli, { getKeyArgs } from "@bizhermit/cli-utils";

const func = async () => {
  const command = Cli.getArg();
  const dest = Cli.getKeyArg("-d");
  const excludes = getKeyArgs("-excludes");
  const text = await Cli.rl("input > ");
  await Cli.wl(text);
};
func();
```

### Methods

* ***rl(message?: string) => Promise\<string>***  
  read input text line.
  ```ts
  const text = await rl("input > ");
  ```
  ```bash
  # console
  input > _
  ```

* ***wl(message?: string) => void***  
  write text for console.
  ```ts
  wl("hoge");
  ```
  ```bash
  # console
  hoge
  ```

* ***getArg(index?: number) => string | undefined***  
  get arg value.
  ```bash
  node cli hoge fuga piyo
  ```
  ```ts
  console.log(getArg()); // => "hoge"
  console.log(getArg(2)); // => "piyo"
  console.log(getArg(5)); // => undefined
  ```

* ***getArgs() => Array\<string>***  
  get arg values.
  ```bash
  node cli hoge fuga piyo
  ```
  ```ts
  console.log(getArgs()); // => ["hoge", "fuga", "piyo"]
  ```

* ***hasKeyArg(key: string, subKey?: string) => boolean***  
  return has key arg.
  ```bash
  node cli --hoge
  ```
  ```ts
  console.log(hasKeyArg("--hoge")); // => true
  console.log(hasKeyArg("--fuga")); // => false
  ```

* ***getKeyArg(key: string, subKey?: string) => string | undefined***  
  return arg value.
  ```bash
  node cli -hoge 1 2 3 4 -fuga 5 -piyo -foo
  ```
  ```ts
  console.log(getKeyArg("-hoge")); // => "1"
  console.log(getKeyArg("-fuga")); // => "5"
  console.log(getKeyArg("-piyo")); // => undefined
  console.log(getKeyArg("-none")); // => undefined
  ```

* ***getKeyArgs(key: string, subKey?: string) => Array\<string>***  
  return arg values. continue get value until value start with hyphen or end.  
  ```bash
  node cli -hoge 1 2 3 -fuga 4 -piyo -foo
  ```
  ```ts
  console.log(getKeyArgs("-hoge")); // => ["1", "2", "3"]
  console.log(getKeyArgs("-fuga")); // => ["4"]
  console.log(getKeyArgs("-piyo")); // => []
  console.log(getKeyArgs("-foo"));  // => []
  console.log(getKeyArgs("-none")); // => []
  ```