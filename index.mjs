import fs from 'fs';
fs.readFile('./data/example.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log('Contenido del archivo:',data);
})
fs.writeFile('./data*/newFile.txt','Contenido nuevo',(err)=>{
    if(err) throw err;
    console.log("Archivo creado y escrito");
})

fs.rename('./data/newFile.txt','./data/renameFile.txt',(err)=>{
    if(err) throw err;
    console.log('Archivo Renombrado');
})