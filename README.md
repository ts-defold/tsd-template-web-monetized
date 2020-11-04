# Web Monetization
<a href="https://discord.gg/eukcq5m"><img alt="Chat with us!" src="https://img.shields.io/discord/766898804896038942.svg?colorB=7581dc&logo=discord&logoColor=white"></a>

[Web Monetization](https://webmonetization.org/) is a JavaScript browser API which allows the creation of a payment stream from the user agent to the website. Web Monetization is being proposed as a W3C standard at the Web Platform Incubator Community Group.


## Web Monetization for Defold

This repository contains a native extension which integrates the Web Monetization JavaScript API with the [Defold game engine](https://www.defold.com). This allows game developers to detect if a player has an active payment stream or not and offer additional content or perks to paying players.


### Installation
1. Fork this template or use [degit](https://www.npmjs.com/package/degit) to download the template locally
```bash
npx degit ts-defold/tsd-template-web-monetized my-web-monetized-game
# or
git clone https://github.com/ts-defold/tsd-template-web-monetized.git my-web-monetized-game
```

2. Initialize
```bash
cd my-web-monetized-game
npm install
```

3. Generate
```bash
npm run build # Transpile the TypeScript files to lua
# or
npm run watch # Watch for changes and regenerate files on save
```

4. Code
```
code .
```

5. Open `app/game.project` in Defold
- Start making games with TypesScript!

#### Project dependency

To use Web Monetization in a Defold project this project has to be added as a [Defold library dependency](http://www.defold.com/manuals/libraries/). Open the **game.project** file and in the [Dependencies field in the Project section](https://defold.com/manuals/project-settings/#dependencies) add:

https://github.com/defold/extension-webmonetization/archive/master.zip

Or point to the ZIP file of [a specific release](https://github.com/defold/extension-webmonetization/releases).

#### Add payment pointer

The Web Monetization JavaScript API also requires a payment pointer to create a payment stream. The payment pointer must be added as a `<meta>` tag in the `<head>` section of the website. The extension will automatically add the `<meta>` tag when building or bundling a project but the payment pointer must be added to the **game.project** file. Payment pointers are provided by a number of different [companies offering digital wallets](https://webmonetization.org/) (Web Monetization Wallets). Open the **game.project** file using a text editor and add a new section with the payment pointer:

```ini
[webmonetization]
payment_pointer = ADD PAYMENT POINTER HERE
```

### Usage

When the extension and a payment pointer has been added to the **game.project** file it is possible to interact with the Web Monetization API from Defold:

```ts
if (webmonetization != null) {
    const monetized = webmonetization.is_monetized();

    if (monetized) {
        print("The user has an active payment stream");
    }

    webmonetization.set_listener(function(this: unknown, event: webmonetization.Event, details?: webmonetization.EventDetails) {
        if (event == webmonetization.EVENT_PENDING) {
            print("The user is trying to make a first payment");
        } else if (event == webmonetization.EVENT_START) {
            print("The user has started paying");
        } else if (event == webmonetization.EVENT_PROGRESS) {
            print("The user is still paying");
        } else if (event == webmonetization.EVENT_STOP) {
            print("The user has stopped paying");
        }
        print(details?.requestId);
    });
}
```

The details table contains additional information about the event. Example:

```js
{
  paymentPointer: "$ilp.uphold.com/QkG86UgXzKq8",
  assetScale: 9,
  amount: "26009",
  requestId: "a1f728aa-21e0-4376-ae99-0ccb22642956",
  assetCode: "XRP"
}
```

<p align="center" class="h4">
  TypeScript :heart: Defold
</p>
