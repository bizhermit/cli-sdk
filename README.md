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

* **rl(message?: string) => Promise\<string>**
  read line.

* **wl(message?: string) => void**
  write line.
