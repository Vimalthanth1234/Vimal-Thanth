import Home from '../../components/Home'
import * as ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
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
            <Home />
            </Provider></BrowserRouter></React.StrictMode>,container)
    })
    afterEach(()=>{
        document.body.removeChild(container);
        container.remove()
    })
    it('Render correctly initial document',()=>{
        const inputs = container.querySelectorAll('input')
        const button = container.querySelectorAll('button')
        const h1 = container.querySelectorAll('h1')
        expect(inputs).toHaveLength(3)
        expect(button).toHaveLength(1)
        expect(h1).toHaveLength(1)
    })
})