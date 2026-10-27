import {cp,rm,mkdir} from 'node:fs/promises';
await rm('_site',{recursive:true,force:true});await mkdir('_site');
await cp('site','_site',{recursive:true});
console.log('HEILOG estático preparado em _site/');
