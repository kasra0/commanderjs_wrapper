/*import  program  from "commander"
import  _        from 'lodash'*/
let program = require('commander')
let _       = require('lodash')

let opt = (sign,name)=> [`-${sign} --${name}`,`get ${name}`];
let op  = (parent,...args)=> parent.option(...args)

let command = (program,cmd_name,options,action)=>{ 
    let x =   program.command(`${cmd_name} <args...> `)
    let q =   options.map(x=>opt(...x))
    x = q.reduce((previous,current)=> op(previous,...current),x)
    let options_name = options.map(x=>x[1])
    x.action(function (data, cmd) {
          data.forEach(x => {
          let keys_cmd = _.keys(cmd).filter(x=>_.includes(options_name,x))   
          let r        = _.reduce(keys_cmd,(previous,current,index)=>`${previous}${_.padEnd(current,15)}`,'')
          let message  = `${_.padEnd(cmd._name,15)} ${_.padEnd(x,10)}=> ${r} `
          console.log(message); 
        });
        action(data,cmd)
    });
}

let configure_commander = (version,...configurations)=>{    
    program.version(version)
    configurations.forEach(({cmd,options,action})=> command(program,cmd,options,action))
    program.parse(process.argv)
}

module.exports = {command,configure_commander}
//export {command,configure_commander}

