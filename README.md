# Simple Static Server

{

  "startupCommands": [

    "node -e \"const http=require('http'),fs=require('fs'),path=require('path'),mime={'.html':'text/html','.css':'text/css','.js':'application/javascript','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.ico':'image/x-icon'};http.createServer((req,res)=>{let f='/home/user/app'+(req.url.split('?')[0]||'/');if(f.endsWith('/'))f+='index.html';fs.readFile(f,(e,d)=>{if(e){res.writeHead(404);res.end('Not found');return;}res.writeHead(200,{'Content-Type':mime[path.extname(f)]||'application/octet-stream'});res.end(d);});}).listen(3000,()=>console.log('OK'))\""

  ],

  "projectId": "9031c409-37ba-4332-bf10-29aea99fece8",

  "templateId": "any"

}

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://simple-server-buddy.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9d8e0125-66ab-4624-8894-b6fb439dfa74).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
