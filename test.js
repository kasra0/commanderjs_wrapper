import commander_wraper from './index'
import program          from 'commander'
import _                from 'lodash'
let options0      =  [['a','opt_a'],['b','opt_b'],['c','opt_c'],['d','opt_d']]
let options1      =  [['e','opt_e'],['f','opt_f']]
let f0      = (x,y,z)=>{z.forEach(x=>console.log(parseInt(x) +  1)) }
let f1      = (x,y,z)=>{z.forEach(x=>console.log(x)) }
let g0      =  _.curry(f0)(10,20)
let g1      =  _.curry(f1)(10,20)
let c0      = {cmd:'cmd1',options:options0,action:g0}
let c1      = {cmd:'cmd2',options:options1,action:g1}
let configs = [c0,c1]
commander_wraper.configure_commander(program,'0.0.1',...configs)

