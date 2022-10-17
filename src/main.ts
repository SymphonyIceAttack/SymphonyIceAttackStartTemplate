import { name } from './modules/myModole';
import Greeter from './modules/Greeter';
import _ from 'lodash';

const a = new Greeter('ss');
a.greet()
console.log('hello' + name);
const arr = _.concat([1, 2], 3, 4, [5]);
console.log(arr);
