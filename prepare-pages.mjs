import {cpSync,mkdirSync,writeFileSync} from 'node:fs';
mkdirSync(new URL('./docs/',import.meta.url),{recursive:true});
cpSync(new URL('./dist/',import.meta.url),new URL('./docs/',import.meta.url),{recursive:true});
writeFileSync(new URL('./docs/.nojekyll',import.meta.url),'');
console.log('GitHub Pages files prepared in docs/');
