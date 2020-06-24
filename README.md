# eslint-config-spiks
Eslint configuration for React Typescript project with Prettier code formatter.

## Usage 
1) Install dependencies:
    
    `npm i eslint-config-spiks prettier --save-dev`

2) Create `.eslintrc` file in the same directory with your `tsconfig.json`

    ```
   {
       "extends": "eslint-config-spiks",
       "parserOptions": {
         "project": "./tsconfig.json"
       }
   }
    ```
    
3) Create `prettier.config.js` file in the same directory with your `.eslintrc`