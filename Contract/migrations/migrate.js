const {createU3} = require('u3.js');
const config = require('../config');
const u3 = createU3(config);
//u3.deploy('build/MyContract', 'chendh1');
u3.deploy('build/LoveOnChain', 'chendh1');
