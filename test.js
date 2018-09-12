import a from './index'
import program from 'commander'
let names         =  ['competition','club','fields','staff'];
let options       =  [['a','agenda'],['r','results'],['c','calendar'],['o','ranking']]
let configuration =  {names,version:'0.0.1',options}
a.configure_commander(program,configuration)