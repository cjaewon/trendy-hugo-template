# trendy-hugo-template
![trendy-hugo-template logo](https://user-images.githubusercontent.com/32125218/88475228-e7c1af00-cf68-11ea-9645-b87fb72cf561.png)

⚡ Trendy hugo template ( hugo, React - web component, scss )
> Inspired by [fireship.io structure](https://github.com/fireship-io/fireship.io)

## Introduce Structure
- `hugo` : hugo site template
- `design` : Hugo, Web Components Styles (Scss)
- `components` : React Web Components :: [haunted](https://github.com/matthewp/haunted)

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

> **Compile React Web Components**
- yarn components ( build :: prod mode )
- yarn components:watch ( dev mode )

> **Build ALL** -> `yarn hugo && yarn design && yarn components`
- yarn build ( build :: all )
