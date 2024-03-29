# repro

```sh
npm install
npm run i18n-scanner
npm run i18n-parser

rm -rf node_modules; pnpm install
pnpm i18n-scanner
pnpm i18n-parser
```

or

```sh
./test.sh
```

to test circular symlinks:

```sh
node test-circular.js
```
