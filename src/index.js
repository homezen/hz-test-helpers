/* eslint-env mocha */

try {
    require('source-map-support')()
} catch (e) {
    /* NOOP */
}

import chai from 'chai'
import 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

export {expect} from 'chai'
export {default as jsc} from 'jsverify'
export {default as sinon} from 'sinon'
