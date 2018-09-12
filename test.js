import commander_wraper from './index'
import program          from 'commander'
import _                from 'lodash'

let names         =  ['cmd1','cmd2','cmd3','cmd4'];
let options       =  [['a','opt_a'],['b','opt_b'],['c','opt_c'],['d','opt_d']]
let configuration =  {names,version:'0.0.1',options}

let f = (x,y,z)=>{z.forEach(x=>console.log(x)) }
let g =  _.curry(f)(10,20)

commander_wraper.configure_commander(program,configuration,g)