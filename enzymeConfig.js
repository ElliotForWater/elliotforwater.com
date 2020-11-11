/* Unofficial plugin for react17 - change to official once is release */
const enzyme = require('enzyme')
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17')

enzyme.configure({ adapter: new Adapter() })
