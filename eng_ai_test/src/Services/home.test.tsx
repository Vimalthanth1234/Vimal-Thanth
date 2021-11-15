import Home from '../components/Home'
import * as ReactDOM from 'react-dom'

describe('Home Component tests',()=>{
    let container:HTMLDivElement

    beforeEach(()=>{
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Home />,container)
    })

    afterEach(()=>{
        document.body.removeChild(container);
        container.remove()

    })

    it('Render correctly initial document',()=>{
        const inputs = container.querySelectorAll('input')
        expect(inputs).toHaveLength(3)
    })
})