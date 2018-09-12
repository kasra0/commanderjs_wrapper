import commander_wraper from './index'
import program from 'commander'
import _ from 'lodash'
let names         =  ['competition','club','fields','staff'];
let options       =  [['a','agenda'],['r','results'],['c','calendar'],['o','ranking']]
let configuration =  {names,version:'0.0.1',options}

let f = (x,y,z)=>{
   z.forEach(x=>console.log(x)) 
}
let g =  _.curry(f)(10,20)
commander_wraper.configure_commander(program,configuration,g)