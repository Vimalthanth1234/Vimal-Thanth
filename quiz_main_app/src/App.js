Quiz App
App.tsx
import React from 'react'
import Home from './components/Home'
import { Provider } from 'react-redux'
import store from './redux/store'
import Dashbord from './components/Dashbord'
import ResultCompo from './components/ResultCompo'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashbord' element={<Dashbord />} />
          <Route path='/resultcompo' element={<ResultCompo />} />
        </Routes>
      </Router>
    </Provider>
  )
}
export default Appcomponents
Dashbord.tsx
import React, { useState } from 'react'
import Navbar from './Navbar'
import { useSelector, useDispatch } from 'react-redux'
import isAnswered from '../redux/actions/isAnswered'
import selectedAnswer from '../redux/actions/selectedAnswer'
import ResultCompo from './ResultCompo'
import next from '../redux/actions/next'
import previous from '../redux/actions/previous'
import Button from '@mui/material/Button'
import quesNumReducer from '../redux/reducers/quesNumReducer'
import { Link } from 'react-router-dom'
type State = {
  startReducer: string,
  allQuestionsReducer: any
  quesNumReducer: number
}
const Dashbord = () => {
  const myState = useSelector((state: State) => {
    return state
  })
  const dispatch = useDispatch()
  const questions = myState.allQuestionsReducer[myState.startReducer]
  const question: any = questions[myState.quesNumReducer]
  const [check, setCheck]: any = useState(question.selectedAns)
  const compo = () => {
    switch (question.type) {
      case 'Fill In The Blanks': return (
        <>
          <h4> {question.question}</h4>
          <ul>
            {question.options.map((ele: string, index: number) => {
              return <><li><input type='radio' onClick={() => {
                question.type !== 'Multi
Select'&&dispatch(selectedAnswer(myState.startReducer,myState.quesNumReducer,[ele
]))
                setCheck(question.selectedAns[0])
                dispatch(isAnswered(myState.startReducer,myState.quesNumReducer,true))
}} name='options1'
                checked={question.selectedAns == ele ? true : false}/>{ele}</li></>
            })}
          </ul>
        </>
      )
      case 'MCQ': return (
        <>
          <h4>{question.question}</h4>
          <ul>
            {question.options.map((ele: string) => {
              return <><li><input type='radio' name='options2'
                onClick={() => {
                  question.type !== 'Multi
Select'&&dispatch(selectedAnswer(myState.startReducer,myState.quesNumReducer,[ele
]))
                setCheck(question.selectedAns[0])
dispatch(isAnswered(myState.startReducer,myState.quesNumReducer,true))}} checked={question.selectedAns == ele ? true : false}
/>{ele}</li></>
            })}
          </ul>
        </>
      )
      case 'True Or False': return (
        <>
          <h4>{question.question}</h4>
          <ul>
            {question.options.map((ele: string) => {
              return <><li><input type='radio' onClick={() => {
                question.type !== 'Multi
Select'&&dispatch(selectedAnswer(myState.startReducer,myState.quesNumReducer,[ele
]))
                setCheck(question.selectedAns[0])
                dispatch(isAnswered(myState.startReducer,myState.quesNumReducer,true))
}} name='options3'
                checked={question.selectedAns == ele ? true : false} />{ele}</li></>
            })}
          </ul>
        </>
      )
      case 'Match The Following': return (
        <>
          <table>
            <thead>
              <tr>
                <th>Questions</th>
                <th>Answers</th></tr>
            </thead>
            <tbody>
              {question.question[0].map((ele: any, index: number) => {
                return
                <><tr><td>{question.question[0][index]}</td><td>{question.question[1][index]}</td
                ></tr></>
              })}
            </tbody>
          </table>
          <ul>
            {question.options.map((ele: string) => {
              return <><li><input type='radio' onClick={() => {
                dispatch(isAnswered(myState.startReducer, myState.quesNumReducer, true))
                setCheck(question.selectedAns[0])
                question.type !== 'Multi
Select'&&dispatch(selectedAnswer(myState.startReducer,myState.quesNumReducer,[ele
]))
}} name='options4'
                checked={question.selectedAns == ele ? true : false} />{ele}</li></>
            })}
          </ul>
        </>
      )
      case 'Multi Select': return (
        <>
          <h4>{question.question}</h4>
          <ul>
            {question.options.map((ele: string, index: number) => {
              return <><li><input value={ele} type='checkbox'
                onClick={(event: any) => {
                  let selectedValues = question.selectedAns
                  if (selectedValues.includes(event.target.value)) {
                    const index =
                      selectedValues.indexOf(event.target.value)
                    selectedValues.splice(index, 1)
                    check ? setCheck('') : setCheck('hello')
                    dispatch(selectedAnswer(myState.startReducer, myState.quesNumReducer, selectedValue
s))
                  } else {
                    selectedValues.push(event.target.value)
                    setCheck(ele)
                    dispatch(selectedAnswer(myState.startReducer, myState.quesNumReducer, selectedValue
s))
                  }
                  question.selectedAns.length ? dispatch(isAnswered(myState.startReducer, myState.ques
NumReducer, true)) : dispatch(isAnswered(myState.startReducer, myState.quesNumReducer
                    , false))
                }} name='options5'
                checked={question.selectedAns.includes(ele) ? true : false} />{ele}</li></>
            })}
          </ul>
        </>
      )
      default:
        break;
    }
  }
  return (
    <div style={{ boxShadow: '5px 10px #888888', padding: '50px' }}><h1 style={{
      textAlign: 'center', boxShadow: '5px 10px
#888888',padding:'10px'}}><span style={{color:'purple'}}>Q</span>UI<span
style = {{color:'blue'}}>Z</span></h1 >
<Navbar />
<h3>Ques No :- {question['Question Number']}</h3>
  { compo() }
<Button style={{backgroundColor:'blue',color:'white'}}
onClick={()=>dispatch(previous())}
disabled={myState.quesNumReducer==0?true:false}>Previous</Button>
<Button style={{backgroundColor:'purple',color:'white'}}
onClick={()=>dispatch(next())} disabled={questions.length-
1==myState.quesNumReducer?true:false}>Next</Button>
  {
    myState.quesNumReducer == questions.length - 1 && <Button
      variant='contained'><Link to='/resultcompo'
        style={{ textDecoration: 'none', color: 'white' }}>Submit test</Link></Button>
  }
</div >
)
}
export default Dashbord
Home.tsx
import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import startHandler from '../redux/actions/startHandler'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import { MenuItem } from '@mui/material'
import { Button } from '@mui/material'
import { Navigate, useNavigate } from 'react-router'
import {
  BrowserRouter as Router, Routes,
  Route,
  Link
} from "react-router-dom";
const Home = () => {
  const navigate = useNavigate()
  const [lang, setLang]: any = useState('0')
  const dispatch = useDispatch()
  return (
    <form
      style={{
        display: 'flex', backgroundColor: 'black', margin: '10px', flexDirection: 'colum
n',justifyContent:'center',alignItems:'center',boxShadow:'5px 10px
#888888',width:'30 % '}} onSubmit={()=>{
dispatch(startHandler(lang))
      navigate('/dashbord')
}}>
  <h1 style={{
    fontFamily: 'cursive', color: 'blue', boxShadow: '5px 10px
#888888',padding:'10px'}}><span style={{color:'purple'}}>Q</span>uiz <span
style = {{color:'purple'}}> A</span > pp</h1 >
  <TextField required style={{
    margin: '10px
0',width:'80% ',backgroundColor:'aquamarine'}} type='text' placeholder='Enter Your
Name'/>
      <TextField required style = {{
        margin: '10px
      0',width:'80 % ',backgroundColor:'aquamarine'}} type='number' placeholder='Enter
Your Age'/>
        < Select style = {{
          margin: '10px
        0',width:'80 % ',backgroundColor:'aquamarine'}}
        value = { lang }
        onChange = {(event: any)=> {
          setLang(event.target.value)
        }
      }>
<MenuItem selected={true} value='0'>English</MenuItem><MenuItem value='1'>Hindi</MenuItem>
</Select >
        <Button type='submit' style={{ margin: '20px' }}
        >Start</Button>
      variant = 'contained'
</form >
)
    }
export default Home
Navbar.tsx
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import quesNumber from '../redux/actions/quesNumber'
import Button from '@mui/material/Button'
type State = {
      startReducer: string,
      allQuestionsReducer: any,
      quesNumReducer: number
    }
const Navbar = () => {
      const myState = useSelector((state: State) => {
        return state
      })
      const dispatch = useDispatch()
      const questions = myState.allQuestionsReducer[myState.startReducer]
      const len = Object.keys(questions)
      return (
        <div>
          <ul>
            {Object.keys(questions).map((ele: string, index: number) => {
              return <Button
                style={{
                  backgroundColor: questions[index].Answered ? 'red' : 'gray', color: 'white', bord
erRadius: '40px', margin: '10px', boxShadow: '5px 10px #888888'
                }} onClick={() => {
                  dispatch(quesNumber(index))
                }}>{index + 1}</Button>
            })}
          </ul>
        </div>
      )
    }
export default Navbar
ResultCompo.tsx
import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
    type State = {
      startReducer: string,
      allQuestionsReducer: any,
      quesNumReducer: number
    }
const ResultCompo = () => {
      const myState = useSelector((state: State) => {
        return state
      })
      const questions = myState.allQuestionsReducer[myState.startReducer]
      const result: any = []
      questions.map((ele: any) => {
        if (ele.type !== 'Multi Select') {
          if (ele.Answer[0] == ele.selectedAns[0]) {
            console.log(ele.selectedAns[0])
            result.push(true)
          }
        } else {
          const multiArr: any = []
          ele.selectedAns.map((e: string) => {
            console.log(e)
            if (ele.Answer.includes(e)) {
              multiArr.push(true)
            } else {
              multiArr.push(false)
            }
          })
          if (multiArr.length) {
            if (multiArr.every((val: boolean) => val === true)) {
              if (multiArr.length === ele.Answer.length) {
                console.log(ele.Answer.length)
                console.log(multiArr.length)
                result.push(true)
                console.log(result)
              }
            }
          }
        }
      })
      return (
        <div style={{ boxShadow: '5px 10px #888888', padding: '50px' }}><h1 style={{
          color: 'blue', textAlign: 'center', boxShadow: '5px 10px
#888888',padding:'10px'}}>Result</h1>
            <div style = {{ display: 'flex', flexDirection:'row'}}>
          <div>
            <PieChart style={{ display: 'block' }}
              data={[
                { title: 'Right', value: result.length, color: 'green' },
                {
                  title: 'Wrong', value: questions.length - result.length, color:
                    'red'
                }
              ]}
            />
          </div>
          <div
            style={{
              display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:
                'column', margin: '10px'
            }}>
            <p style={{ color: 'green', textAlign: 'center' }}>True Answers :-
              {result.length}</p>
            <p style={{ color: 'red', textAlign: 'center' }}>False Answers :-
              {questions.length - result.length}</p>
            <p style={{ textAlign: 'center' }}>Percentage :-
              {(result.length / questions.length) * 100}%</p>
          </div>
        </div>
</div >
)
    }
export default ResultCompo
redux
actions
isAnswred.tsximport React from 'react'
const isAnswered = (priIndex: any, secIndex: any, val: boolean) => {
      return {
        type: 'isAnswered',
        payload: [priIndex, secIndex, val]
      }
    }
export default isAnswered
next.tsx
import React from 'react'
const next = () => {
      return {
        type: 'next'
      }
    }
export default next
previous.tsx
import React from 'react'
const previous = () => {
      return {
        type: 'previous'
      }
    }
export default previous
quesNumber.tsx
import React from 'react'
const quesNumber = (num: number) => {
      return {
        type: 'quesNumber',
        payload: num
      }
    }
export default quesNumber
selectedAnswer.tsx
import React from 'react'
const selectedAnswer = (priIndex: any, secIndex: any, val: string[]) => {
      return {
        type: 'selectedAnswer',
        payload: [priIndex, secIndex, val]
      }
    }
export default selectedAnswer
startHandler.tsx
import React from 'react'
const startHandler = (lang: string) => {
      return {
        type: 'startHandler',
        payload: lang
      }
    }
export default startHandler
reducers
allQuestionsReducer.tsx
import React from 'react'type Action = {
      type: string,
      payload: any
    }
const initialState = [
      [{
        'Question Number': 1,
        'question': '2+2=___',
        'type': 'Fill In The Blanks',
        'options': ['1', '2', '3', '4'],
        'Answer': ['4'],
        'Answered': false,
        'correct': false,
        'lang': '0',
        'selectedAns': []
      },
      {
        'Question Number': 2,
        'question': '3*8 = ?',
        'type': 'MCQ',
        'options': ['11', '24', '0', '76'],
        'Answer': ['24'],
        'Answered': false,
        'correct': false,
        'lang': '0',
        'selectedAns': []
      },
      {
        'Question Number': 3, 'question': '1>2',
        'type': 'True Or False',
        'options': ['true', 'false'],
        'Answer': ['false'],
        'Answered': false,
        'correct': false,
        'lang': '0',
        'selectedAns': []
      },
      {
        'Question Number': 4,
        'question': [['a:1+2', 'b:3*9', 'c:4/2', 'd:9-
8'],['a: 1','b: 3','c: 27','d: 2']],
'type': 'Match The Following',
          'options': ['a->b,b->c,c->d,d->a', 'a->c,b->a,c->d,d->b', 'a->d,b->c,c->b,d-
            > a','a -> a, b -> c, c -> b, d -> d'],
'Answer': ['a->b,b->c,c->d,d->a'],
            'Answered': false,
            'correct': false,
            'lang': '0',
            'selectedAns': []
},
      {
        'Question Number': 5,
        'question': 'Select True options',
        'type': 'Multi Select',
        'options': ['1>2', '5>=3', '1=0', '9<11'],
        'Answer': ['5>=3', '9<11'],
        'Answered': false,
        'correct': false, 'lang': '0',
        'selectedAns': []
      }]
    ]
const allQuestionsReducer = (state = initialState, acion: Action) => {
      switch (acion.type) {
        case 'isAnswered': {
          const [priIndex, secIndex, val] = acion.payload
          state[priIndex][secIndex].Answered = val
          return state
        }
        case 'selectedAnswer': {
          const [priIndex, secIndex, val] = acion.payload
          state[priIndex][secIndex].selectedAns = val
          return state
        }
        default: return state
      }
    }
export default allQuestionsReducer
quesNumReducer.tsx
import React from 'react'
const initialState = 0
type Action = {
      type: string,
      payload: number
    }
const quesNumReducer = (state = initialState, action: Action) => {
      switch (action.type) {
        case 'quesNumber': return action.payload
        case 'next': return state + 1
        case 'previous': return state ? state - 1 : state
        default: return state
      }
    }
export default quesNumReducer
startReducer.tsx
import React from 'react'
type Action = {
      type: string,
      payload: string
    }
const initialState = '0'
const startReducer = (state = initialState, action: Action) => {
      switch (action.type) {
        case 'startHandler': return action.payload
        default: return state
      }
    }
export default startReducer
rootReducer.tsx
import React from 'react'
import { combineReducers } from 'redux'
import startReducer from './startReducer'
import allQuestionsReducer from './allQuestionsReducer'
import quesNumReducer from './quesNumReducer'
const rootReducer = combineReducers({
      startReducer: startReducer,
      allQuestionsReducer: allQuestionsReducer,
      quesNumReducer: quesNumReducer
    })
export default rootReducer
store.tsx
import rootReducer from "./reducers/rootReducer";
    import { createStore, compose } from "redux";
    declare global {
interface Window {
__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?: typeof compose;
}
}
    const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers())
export default store
__test__
actions
isAnswred.test.tsx
import isAnswered from "../../redux/actions/isAnswered";
test('isAnswered', () => {
  const action = isAnswered(1, 2, true)
  expect(action).toEqual({
    type: 'isAnswered',
    payload: [1, 2, true]
  })
})
nest.test.tsx
import next from "../../redux/actions/next"; test('next', () => {
  const action = next()
  expect(action).toEqual({
    type: 'next'
  })
})
previous.test.tsx
import previous from "../../redux/actions/previous";
test('previous', () => {
  const action = previous()
  expect(action).toEqual({
    type: 'previous'
  })
})
quesNumber.test.tsx
import quesNumber from "../../redux/actions/quesNumber";
test('Question Number', () => {
  const action = quesNumber(5)
  expect(action).toEqual({
    type: 'quesNumber',
    payload: 5
  })
})
selectedAnswer.test.tsx
import selectedAnswer from "../../redux/actions/selectedAnswer"; test('selected ansewer action test', () => {
  const action = selectedAnswer(1, 2, ['abc'])
  expect(action).toEqual({
    type: 'selectedAnswer',
    payload: [1, 2, ['abc']]
  })
})
startHandler.test.tsx
import startHandler from "../../redux/actions/startHandler";
test('startHandler action test', () => {
  const action = startHandler('0')
  expect(action).toEqual({
    type: 'startHandler',
    payload: '0'
  })
})
components
Home.test.tsx
import Home from '../../components/Home'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import React from 'react'
describe('Home Component tests', () => {
  let container: HTMLDivElementbeforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={store} >
            <Home />
          </Provider></BrowserRouter></React.StrictMode>, container)
  })
  afterEach(() => {
    document.body.removeChild(container);
    container.remove()
  })
  it('Render correctly initial document', () => {
    const inputs = container.querySelectorAll('input')
    const button = container.querySelectorAll('button')
    const h1 = container.querySelectorAll('h1')
    expect(inputs).toHaveLength(3)
    expect(button).toHaveLength(1)
    expect(h1).toHaveLength(1)
  })
})
reducers
allQuestionsReducer.test.tsx
import allQuestionsReducer from "../../redux/reducers/allQuestionsReducer";
const initialState = [
  [{
    'Question Number': 1, 'question': '2+2=___',
    'type': 'Fill In The Blanks',
    'options': ['1', '2', '3', '4'],
    'Answer': ['4'],
    'Answered': false,
    'correct': false,
    'lang': '0',
    'selectedAns': []
  }]]
test('allQuestionsreducer', () => {
  const reducer = allQuestionsReducer(initialState, {
    type: 'isAnswered',
    payload: ['0', '0', true]
  })
  expect(reducer).toEqual([
    [{
      'Question Number': 1,
      'question': '2+2=___',
      'type': 'Fill In The Blanks',
      'options': ['1', '2', '3', '4'],
      'Answer': ['4'],
      'Answered': true,
      'correct': false,
      'lang': '0',
      'selectedAns': []
    }]])
})
test('Selected Answer test', () => {
  const reducer = allQuestionsReducer(initialState, {
    type: 'selectedAnswer',
    payload: ['0', '0', ['1']]
  })
  expect(reducer).toEqual([
    [{
      'Question Number': 1,
      'question': '2+2=___',
      'type': 'Fill In The Blanks',
      'options': ['1', '2', '3', '4'],
      'Answer': ['4'],
      'Answered': true,
      'correct': false,
      'lang': '0',
      'selectedAns': ['1']
    }]])
})
quesNumberReducer.test.tsx
import quesNumReducer from "../../redux/reducers/quesNumReducer";
const initialState = 0
test('question number reducer', () => {
  const reducer = quesNumReducer(initialState, {
    type: 'quesNumber',
    payload: 2
  })
  expect(reducer).toEqual(2)
})
test('next', () => {
  const reducer = quesNumReducer(initialState, {
    type: 'next', payload: 2
  })
  expect(reducer).toEqual(1)
})
test('previous', () => {
  const reducer = quesNumReducer(initialState, {
    type: 'previous',
    payload: 2
  })
  expect(reducer).toEqual(0)
})
startReducer.test.tsx
import startReducer from "../../redux/reducers/startReducer";
test('start reducer test', () => {
  const reducer = startReducer('0', {
    type: 'startHandler',
    payload: '0'
  })
  expect(reducer).toEqual('0')
})