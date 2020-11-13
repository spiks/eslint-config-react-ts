# eslint-config-spiks
Eslint configuration for React Typescript project.

## Usage 
1) Install dependencies:
    
    `npm i eslint-config-spiks --save-dev`

2) Create `.eslintrc` file in the same directory with your `tsconfig.json`

    ```
   {
       "extends": "eslint-config-spiks",
       "parserOptions": {
         "project": "./tsconfig.json"
       }
   }
    ```