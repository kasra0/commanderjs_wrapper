/*import  program  from "commander"
import  _        from 'lodash'*/

let program = require('commander')
let _       = require('lodash')

let opt =(sign,name)=> [`-${sign} --${name}`,`get ${name}`];
let op = (parent,...args)=> parent.option(...args)
let command = (program,name,options,action)=>{ 
   let x =   program.command(`${name} <args...> `)
   let q = options.map(x=>opt(...x))
    x = q.reduce((previous,current)=> op(previous,...current),x)
    let options_name = options.map(x=>x[1])
    let options_key  = options.map(x=>x[1])
    x.action(function (data, cmd) {
          data.forEach(x => {
         let keys_cmd = _.keys(cmd).filter(x=>_.includes(options_name,x))
          let flags   = '';
          for(let i = 0 ; i < keys_cmd.length ; i++){                  
             flags += _.padEnd(keys_cmd[i] ,15)                           
           }
          console.log(`${_.padEnd(name,15)} ${_.padEnd(x,10)}=> ${flags} `); 
        });
        action(data,cmd)
    });
}
let configure_commander = (program,{version,names,options},action)=>{
    program.version(version)
    names.forEach(name=>command(program,name,options,action))
    program.parse(process.argv)
}

module.exports = {command,configure_commander}
//export {command,configure_commander}

