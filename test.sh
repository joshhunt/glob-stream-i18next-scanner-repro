#!/usr/bin/env bash

set -ex

rm -rf node_modules; npm install
npm run i18n-scanner
npm run i18n-parser

rm -rf node_modules; pnpm install
pnpm i18n-scanner
pnpm i18n-parser
