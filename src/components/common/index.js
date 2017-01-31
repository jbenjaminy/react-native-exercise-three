/*
This file is used to aggregate our components for ease of importing and
reusability. We can just import the components from the common directory, and
whenever you import from the directory directly, without specifying a filename,
it will by default look to the index.js file.

NOTE: 'export *' from file both imports and exports its contents in a single
step.
*/
export * from './button';
export * from './card-container';
export * from './card-section';
export * from './header';
export * from './input';
export * from './spinner';

/*
NOTE: if you get an ESlintrc error using this approach, you may have to go back
to your component files and change the export statements to this format:
    `export { Button: Button };`
*/
