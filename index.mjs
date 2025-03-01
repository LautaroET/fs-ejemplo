import fs from 'fs'
fs.readFile('./data/example.txt','utf8',(err,data)=>{
    if(err) throw err;
    console.log('Contenido del Archivo',data);
});
fs.writeFile('./data/newFile.txt','Contenido Nuevo',(err)=>{
    if(err) throw err;
    console.log('Archivo Creado y escrito');
});
fs.rename('./data/newFile.txt','./data/renameFile.txt',(err)=>{
    if(err) throw err;
    console.log('Archivo renombrado');
});