# eslint-config-react-ts
Eslint configuration for Typescript React projects.

## Usage
1) Install dependencies:
    
`npm i -D @spiks/react-ts-eslint-config`

2) Create `.eslintrc` file in the root directory

```
{
   "extends": "@spiks/eslint-config-react-ts",
   "parserOptions": {
     "project": "./tsconfig.json"
   }
}
```
