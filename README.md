# trendy-hugo-template

⚡ Trendy hugo template ( hugo, lit-element, TypeScript, scss )
> Inspired by [fireship.io structure](https://github.com/fireship-io/fireship.io)

## Introduce Structure
- `hugo` : hugo site template
- `design` : Web App Design (Scss)
- `scripts` : (JS / TS) scripts ( contain web components )

## Install
```
npx degit cjaewon/trendy-hugo-template my-website
```

**⚠️ Recommed :: [Disable Chrome Caching ( css or js )](https://stackoverflow.com/questions/5690269/disabling-chrome-cache-for-website-development)**

## Command ( yarn )
> **Build Hugo**
- yarn hugo ( build :: prod mode )
- yarn hugo:watch ( dev mode )

> **Compile Sass / Scss**
- yarn design ( build :: prod mode )
- yarn design:watch ( dev mode )

> **Compile Scripts**
- yarn scripts ( build :: prod mode )
- yarn scripts:watch ( dev mode )

> **Build ALL** -> `yarn hugo && yarn design && yarn scripts`
- yarn build ( build :: all )
