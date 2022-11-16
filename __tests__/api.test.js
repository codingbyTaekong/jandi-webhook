// const JandiHook = require('../dist/index.js');
// import JandiHook from '../dist/index.js'
import JandiHook from 'jandi-hook'
import config from '../config'

test("1+1", ()=> {
    JandiHook(config.JANDI_URL, {
        body : "test",
        connectInfo : [{
            title : "test2",
            description : "test3"
        }]
    })
    expect(1).toBe(1)
})