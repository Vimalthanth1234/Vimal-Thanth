import Dashbord from '../../components/Dashbord'
import * as ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import ResultCompo from '../../components/ResultCompo'
import {Provider} from 'react-redux'
import store from '../../redux/store'
import React from 'react'
describe('Home Component tests',()=>{
    let container:HTMLDivElement
    beforeEach(()=>{
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <React.StrictMode>
            <BrowserRouter>
            <Provider store={store} >
            <ResultCompo />
            </Provider></BrowserRouter></React.StrictMode>,container)
    })
    afterEach(()=>{
        document.body.removeChild(container);
        container.remove()
    })
    it('Render correctly initial document',()=>{
        expect(container).toMatchSnapshot()
    })
})