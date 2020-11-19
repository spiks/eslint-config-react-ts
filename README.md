# eslint-config-react-ts
Eslint configuration for Typescript React projects.

## Usage
Install dependencies:
    
`npm i -D @spiks/eslint-config-react-ts`

Create `.eslintrc` file in the root directory

```
{
   "extends": "@spiks/eslint-config-react-ts",
   "parserOptions": {
     "project": "./tsconfig.json"
   }
}
```
