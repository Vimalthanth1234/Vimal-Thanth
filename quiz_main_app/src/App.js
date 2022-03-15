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










######################################################################################################################################################################################

Nasa App
App.tsx
import React from 'react'
import Home from './components/Home'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Info from './components/Info'
const App = () => {
  return (
    <div
      style={{
        display: 'flex', justifyContent: 'center', height: '100vh', backgroundImage: `UR
L('https://www.universetoday.com/wp-content/uploads/2017/08/twc_de_komet.jpg')`}}
    >
      <Provider store={store} >
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/Info'>
              <Info />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  )
}export default App
components
Home.tsx
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getInput from '../redux/actions/getInput'
import { useEffect } from 'react'
import axios from 'axios'
import getData from '../redux/actions/getData'
import getRandomId from '../redux/actions/getRandomId'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useHistory } from 'react-router-dom'
type stateType = {
  getInputReducer: string,
  getDataReducer: any,
  getRandomIdReducer: string
}
const Home = () => {
  const myStates = useSelector((state: stateType) => {
    return state
  })
  const [data1, setData1]: any = useState([])
  const history = useHistory()
  const [input, setInput] = useState('')
  const dispatch = useDispatch()const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      const res: any = await
        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=iUcEIzftaidaKEYwnl
IZlLc5gnvYBhXhSFsKXvG5`)
      dispatch(getData(res.data.near_earth_objects))
      setLoading(false)
      console.log('hello')
    }
    fetchData()
  }, [])
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
      <h1 style={{ padding: '20px', color: 'white' }}>Get Information Of
        Asteroids From Id</h1>
      <input type='text'
        style={{ textAlign: 'center', margin: '10px', padding: '20px', borderRadius: '50px' }}
        placeholder='Enter Asteroid ID' value={input} onChange={(event) => {
          setInput(event.target.value)
        }} />
      <Button
        style={{ textAlign: 'center', margin: '10px', padding: '20px', borderRadius: '50px' }}
        variant='contained' disabled={input ? false : true} onClick={() => {
          dispatch(getInput(input))
        }}><Link style={{ textDecoration: 'none', color: 'white' }}
          to={input ? '/Info' : '/'}>Submit</Link></Button>
      <Button
        style={{ textAlign: 'center', margin: '10px', padding: '20px', borderRadius: '50px' }}
        variant='contained' disabled={loading ? true : false} onClick={() => {
          const randomNum = Math.floor((Math.random() * 20) + 1)
          console.log((myStates.getDataReducer)[`${randomNum - 1}`].id)
          setInput((myStates.getDataReducer)[`${randomNum - 1}`].id)dispatch(getRandomId((myStates.getDataReducer)[`${randomNum -
            1}`].id))
        }}>Random</Button>
    </div>
  )
}
export default Home
Info.tsx
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
type stateType = {
  getInputReducer: string,
  getDataReducer: any,
  getRandomIdReducer: string
}
const Info = () => {
  const history = useHistory()
  const myStates = useSelector((state: stateType) => {
    return state
  })
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [hazardous, setHazardous] = useState(false)useEffect(() => {
    const fetchData = async () => {
      const res = await
        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${myStates.getRandomIdReducer}?ap
i_key=iUcEIzftaidaKEYwnlIZlLc5gnvYBhXhSFsKXvG5`)
      setName(res.data.name)
      setUrl(res.data.nasa_jpl_url)
      setHazardous(res.data.is_potentially_hazardous_asteroid)
      setLoading(false)
    }
    fetchData()
  }, [])
  if (loading) {
    return <h1 style={{ color: 'white' }}>Loading......</h1>
  }
  const eleStyle = { background: '#e9e2e2', padding: '20px', borderRadius: '50px' }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
      <h1 style={{ color: 'white' }}>About <span
        style={hazardous ? { color: 'red' } : { color: 'green' }}>{name} </span>Asteroid</h1>
      <p style={eleStyle}>Name:{name}</p>
      <p style={eleStyle}>nasa_jpl_url:{url}</p>
      <p
        style={eleStyle}>is_potentially_hazardous_asteroid:{`${hazardous}`}</p>
      <Button
        style={{ textAlign: 'center', borderRadius: '50px', padding: '20px' }}
        variant='contained' ><Link style={{ textDecoration: 'none', color: 'white' }}
          to='/'>Back</Link></Button>
    </div>
  )
}
export default Inforedux
actons
getData.tsx
const getData = (res: any) => {
  return {
    type: 'getData',
    payload: res
  }
}
export default getData
getInput.tsx
import React from 'react'
const getInput = (input: string) => {
  return {
    type: 'getInput',
    payload: input
  }
}
export default getInput
getRandomId.tsx
const getRandomId = (id: string) => {
  return {
    type: 'getRandomId',
    payload: id
  }
}
export default getRandomIdreducers
getDataReducer.tsx
type Action = {
  type: string,
  payload: any
}
const initialState: any = {}
const getDataReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'getData': return action.payload
    default: return state
  }
}
export default getDataReducer
getInputReducer.tsx
import React from 'react'
type Action = {
  type: string,
  payload: string
}
const initialState = ''
const getInputReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'getInput': return action.payload
    default: return state
  }
}
export default getInputReducergetRandomIdReducer.tsx
type Action = {
  type: string,
  payload: string
}
const initialState: string = ''
const getRandomIdReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'getRandomId': return
      action.payload
    default: return state
  }
}
export default getRandomIdReducer
rootReducer.tsx
import React from 'react'
import { combineReducers } from 'redux'
import getInputReducer from './getInputReducer'
import getDataReducer from './getDataReducer'
import getRandomIdReducer from './getRandomIdReducer'
const rootReducer = combineReducers({
  getInputReducer: getInputReducer,
  getDataReducer: getDataReducer,
  getRandomIdReducer: getRandomIdReducer
})
export default rootReducer
store.tsx
import React from 'react'
import { createStore, compose } from 'redux'import rootReducer from './reducers/rootReducer'
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers())
export default store
__test__
actions
getData.test.tsx
import getData from "../../redux/actions/getData";
test('getData test', () => {
  const action = getData('201002')
  expect(action).toEqual({
    type: 'getData',
    payload: '201002'
  })
})
getInput.test.tsx
import getInput from '../../redux/actions/getInput'
test('getInput test', () => {
  const action = getInput('201002')
  expect(action).toEqual({
    type: 'getInput', payload: '201002'
  })
})
getRandomId.test.tsx
import getRandomId from "../../redux/actions/getRandomId";
test('getRandomId test', () => {
  const action = getRandomId('201002')
  expect(action).toEqual({
    type: 'getRandomId',
    payload: '201002'
  })
})
reducers
getDataReducer.test.tsx
import getDataReducer from "../../redux/reducers/getDataReducer";
test('getDataReducer test', () => {
  const reducer = getDataReducer({}, {
    type: 'getData',
    payload: '201002'
  })
  expect(reducer).toEqual('201002')
})
getInputReducer.test.tsx
import getInputReducer from "../../redux/reducers/getInputReducer";
test('getInputReducer test', () => {
  const reducer = getInputReducer('', {
    type: 'getInput', payload: '201002'
  })
  expect(reducer).toEqual('201002')
})
getRandomIdReducer.test.tsx
import getRandomIdReducer from "../../redux/reducers/getRandomIdReducer";
test('getRandomIdReducer test', () => {
  const reducer = getRandomIdReducer('', {
    type: 'getRandomId',
    payload: '201002'
  })
  expect(reducer).toEqual('201002')
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
  let container: HTMLDivElement
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(
      <React.StrictMode><BrowserRouter>
        <Provider store={store} >
          <Home />
        </Provider></BrowserRouter></React.StrictMode>, container)
  })
  afterEach(() => {
    document.body.removeChild(container);
    container.remove()
  })
  it('Render correctly initial document', () => {
    expect(container).toMatchSnapshot()
  })
})



#############################################################################################



Pagination App with Search
App.tsx
import React from 'react'
import Container from './components/Container'
import {
  Provider
} from 'react-redux'
import store from './redux/store'
const App = () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  )
}
export default App
components
Container.tsx
import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../redux/actions/getData'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PaginationCompo from './PaginationCompo'; import TableContent from './TableContent'
import searchAction from '../redux/actions/searchAction'
import Input from '@mui/material/Input';
type stateType = {
  getDataReducer: any,
  JSONReducer: any
}
const Container = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [newNumPagination, setNewNumPagination] = useState(0)
  const [loading, setLoading] = useState(false)
  const myState = useSelector((state: stateType) => {
    return state
  })
  const dispatch = useDispatch()
  let nbPages: any;
  let newNum: number = 0
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const res: any = await
        axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${newNum}
`)
      const newData: any = res.data.hits
      dispatch(getData(newData))
      setNewNumPagination(newNum)
      nbPages = res.data.nbPages
      setLoading(false)
      newNum += 1
    }fetchData()
    const a = setInterval(() => {
      console.log(nbPages)
      console.log(newNum)
      fetchData()
      newNum == nbPages - 1 && clearInterval(a)
    }, 10000)
  }, [])
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber - 1)
  }
  return (
    <div>
      <p style={{ textAlign: 'center' }}><Input type='text'
        placeholder='Search by Title and Created_At'
        style={{ textAlign: 'center', width: '40%' }}
        onChange={(event) => { dispatch(searchAction(event.target.value)) }} /></p>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">URL</TableCell>
            <TableCell align="right">Created_At</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">See JSON</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableContent myData={myState.getDataReducer}
            pageNumber={currentPage} loading={loading} /></TableBody>
      </Table>
      <p>Current Page Number : {currentPage + 1}</p>
      <PaginationCompo pageNumber={newNumPagination + 1}
        paginate={paginate} />
    </div>
  )
}
export default Container
JsonData.tsx
import { useSelector, useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import modal from '../redux/actions/modal'
import Modal from 'react-modal'
type stateType = {
  getDataReducer: any,
  JSONReducer: any
  modalReducer: boolean
  searchReducer: string
}
const JsonData = () => {
  const dispatch = useDispatch()
  const myState = useSelector((state: stateType) => {
    return state
  })
  return (
    <Modal isOpen={myState.modalReducer}
      onRequestClose={() => dispatch(modal(false))}>
      {JSON.stringify(myState.JSONReducer)}<br /><Button variant="contained"
        style={{ color: 'white', textDecoration: 'none' }}
        onClick={() => { dispatch(modal(false)) }}>Back to Home</Button>
    </Modal>
  )
}
export default JsonData
PaginationCompo.tsx
type paginationProps = {
  pageNumber: number
  paginate: any
}
const PaginationCompo = (props: paginationProps) => {
  const pages: any = []
  for (let i = 1; i <= props.pageNumber; i++) {
    pages.push(i)
  }
  return (
    <nav aria-label="Page navigation example"
      style={{ display: 'flex', flexWrap: 'wrap' }}>
      <ul className="pagination"
        style={{
          display: 'flex', paddingLeft: '0', listStyle: 'none', flexWrap: 'wrap', justifyCo
ntent: 'center'
        }}>
        {pages.map((ele: number) => {
          return <li key={Math.random()} className="page-item"><button
            style={{ borderRadius: '20px' }} onClick={() => props.paginate(ele)} className="page-
link">{ele}</button></li>
        })}
      </ul>
    </nav>
  )
}export default PaginationCompo
TableContent.tsx
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { useSelector, useDispatch } from 'react-redux';
import getJSON from '../redux/actions/getJSON';
import Button from '@mui/material/Button';
import modal from '../redux/actions/modal'
import JsonData from './JsonData';
type tableContentProps = {
  myData: any
  pageNumber: number
  loading: boolean
}
type stateType = {
  getDataReducer: any,
  JSONReducer: any
  modalReducer: boolean
  searchReducer: string
}
const TableContent = (props: tableContentProps) => {
  const myState = useSelector((state: stateType) => {
    return state
  })
  const dispatch = useDispatch()
  const { myData, pageNumber, loading } = props
  let newArr: any
  if (myData[pageNumber]) {
    newArr = []
    for (let i = 0; i < Object.keys(myData[pageNumber]).length; i++) {
      newArr.push(Object.keys(myData[pageNumber])[i])
    }
  }
  return (
    <>
      {myData[pageNumber] && newArr.map((ele: string, index: number) => {
        if ((myData[pageNumber][ele].title).includes(myState.searchReducer) ||
          (myData[pageNumber][ele].created_at).includes(myState.searchReducer)) {
          return (
            <TableRow key={index}>
              <TableCell
                align="right">{myData[pageNumber][ele].title}</TableCell>
              <TableCell
                align="right">{myData[pageNumber][ele].url}</TableCell>
              <TableCell
                align="right">{myData[pageNumber][ele].created_at}</TableCell>
              <TableCell
                align="right">{myData[pageNumber][ele].author}</TableCell>
              <TableCell align="right"><Button variant="contained"
                style={{ color: 'white', textDecoration: 'none' }} onClick={() => {
                  dispatch(modal(true))
                  dispatch(getJSON({
                    title: myData[pageNumber][ele].title,
                    url: myData[pageNumber][ele].url,
                    created_at: myData[pageNumber][ele].created_at,
                    author: myData[pageNumber][ele].author
                  }))
                }}>Show</Button></TableCell>
            </TableRow>
          )
        }
      })}
      <JsonData />
    </>
  )
}
export default TableContent
redux
actions
getData.tsx
export const getData = (data: any) => {
  return {
    type: 'getData',
    payload: data
  }
}
getJSON.tsx
const getJSON = (json: any) => {
  return {
    type: 'getJSON',
    payload: json
  }
}
export default getJSON
modal.tsx
const modal = (val: boolean) => {
  return {
    type: 'modal',
    payload: val
  }
}
export default modal
searchAction.tsx
const searchAction = (val: string) => {
  return {
    type: 'searchAction',
    payload: val
  }
}
export default searchAction
reducers
getDataReducer.tsx
const initialState: any = []
type Action = {
  type: string
  payload: any
}
const getDataReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'getData': return [...state, action.payload]
    default: return state
  }
}
export default getDataReducer
getJSONReducer.tsx
const initialState = {}
type Action = {
  type: string
  payload: any
}
const getJSONReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'getJSON': return action.payload
    default: return state
  }
}
export default getJSONReducer
modalReducer.tsx
type Action = {
  type: string,
  payload: boolean
}
const initialState = false
const modalReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'modal': return action.payload
    default: return state
  }
}
export default modalReducer
searchReducer.tsx
type ActionType = {
  type: string,
  payload: string
}
const initialState = ''const searchReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case 'searchAction': return action.payload
    default: return state
  }
}
export default searchReducer
rootReducer.tsx
import { combineReducers } from "redux";
import modalReducer from "./reducers/modalReducer";
import getDataReducer from "./reducers/getDataReducer";
import getJSONReducer from "./reducers/getJSONReducer";
import searchReducer from "./reducers/searchReducer";
const rootReducer = combineReducers({
  getDataReducer: getDataReducer,
  JSONReducer: getJSONReducer,
  modalReducer: modalReducer,
  searchReducer: searchReducer
})
export default rootReducer
store.tsx
import { createStore, compose } from "redux";
import rootReducer from "./rootReducer";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose;
const store = createStore(rootReducer, composeEnhancers());
export default store
__test__
actions
getData.test.tsx
import { getData } from "../../redux/actions/getData";
test('getData', () => {
  const action = getData({ a: '1', b: '2' })
  expect(action).toEqual({
    type: 'getData',
    payload: { a: '1', b: '2' }
  })
})
JsonData.test.tsx
import getJSON from "../../redux/actions/getJSON";
test('getJSON test', () => {
  const action = getJSON({ a: '1', b: '2' })
  expect(action).toEqual({
    type: 'getJSON',
    payload: { a: '1', b: '2' }
  })
})
modal.test.tsx
import modal from "../../redux/actions/modal";
test('modal test', () => {
  const action = modal(true)expect(action).toEqual({
    type: 'modal',
    payload: true
  })
})
searchAction.test.tsx
import searchAction from "../../redux/actions/searchAction";
test('searchAction test', () => {
  const action = searchAction('abc')
  expect(action).toEqual({
    type: 'searchAction',
    payload: 'abc'
  })
})
components
Container.test.tsx
import Container from '../../components/Container'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import React from 'react'
describe('Container Component tests', () => {
  let container: HTMLDivElement
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(
      <React.StrictMode><BrowserRouter>
        <Provider store={store} >
          <Container />
        </Provider></BrowserRouter></React.StrictMode>, container)
  })
  afterEach(() => {
    document.body.removeChild(container);
    container.remove()
  })
  it('Render correctly initial document', () => {
    expect(container).toMatchSnapshot()
  })
})
reducers
getDataReducer.test.tsx
import getDataReducer from "../../redux/reducers/getDataReducer";
test('getDataReducer test', () => {
  const reducer = getDataReducer(['a'], {
    type: 'getData',
    payload: ['b', 'c']
  })
  expect(reducer).toEqual(['a', ['b', 'c']])
})
getJSONReducer.test.tsx
import getJSONReducer from "../../redux/reducers/getJSONReducer";
test('getJSONReducer test', () => {
  const reducer = getJSONReducer({}, {
    type: 'getJSON',
    payload: { a: '1', b: '2' }
  })
  expect(reducer).toEqual({ a: '1', b: '2' })
})
modalReducer.test.tsx
import modalReducer from "../../redux/reducers/modalReducer";
test('modalReducer test', () => {
  const reducer = modalReducer(true, {
    type: 'modal',
    payload: false
  })
  expect(reducer).toEqual(false)
})
searchReducer.test.tsx
import searchReducer from "../../redux/reducers/searchReducer";
test('searchReducer test', () => {
  const reducer = searchReducer('abc', {
    type: 'searchAction',
    payload: 'abcdef'
  })
  expect(reducer).toEqual('abcdef')
})



################################################################################################




Weather App
App.tsx
import React from 'react'
import Home from './components/Home'
import { Provider } from 'react-redux'
import store from './redux/store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Info from './components/Info';
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/Info'>
            <Info />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}export default App
components
Home.tsx
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import getData from '../redux/actions/getData'
import { useHistory } from 'react-router'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
const Home = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:
          'center'
      }}>
      <h1>Country Details with Weather App</h1>
      <form>
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          defaultValue="Small" variant="filled"
          size="small" type='text' placeholder='Enter Country' value={input}
          onChange={(event) => {
            setInput(event.target.value)
          }} />
        <Router><Link to={() => input ? '/Info' : '/'}
          style={{ textDecoration: 'none' }}><Button style={{ textDecoration: 'none' }}
            variant="outlined" size="large" disabled={input ? false : true} onClick={(event) => {
              event.preventDefault()
              const fetchData = async () => {
                const res = await
                  axios.get(`https://restcountries.com/v2/name/${input}`)
                dispatch(getData(res.data))
                history.push('/Info')
                setInput('')
              }
              { fetchData() }
            }}>Submit</Button></Link></Router>
      </form>
    </div>
  )
}
export default Home
Info.tsx
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'; import { Button, CardActionArea, CardActions } from '@mui/material';
import modal from '../redux/actions/modal';
import axios from 'axios';
import Weather from './Weather';
import getWeatherData from '../redux/actions/getWeatherData'
import { useHistory } from 'react-router';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
type stateType = {
  getDataReducer: any
  modalreducer: boolean
  getWeatherDataReducer: any
}
const Info = () => {
  const myState = useSelector((state: stateType) => {
    return state
  })
  const history = useHistory()
  const dispatch = useDispatch()
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
    }}>
      <h1 style={{ textAlign: 'center' }}>Informations</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {
          myState.getDataReducer.map((ele: any, index: number) => {
            return (<> <Card style={{ margin: '10px' }} sx={{
              maxWidth: 345
            }} key={index}><CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={ele.flag}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5"
                    component="div">
                    Capital:{ele.capital}
                  </Typography>
                  <Typography gutterBottom variant="h5"
                    component="div">
                    Population:{ele.population}
                  </Typography>
                  <Typography gutterBottom variant="h5"
                    component="div">
                    latlng: {ele.latlng}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={() => {
                  const fetchData = async () => {
                    const res: any = await
                      axios.get(`http://api.weatherstack.com/current?access_key=a8816be90374b1c50b1db57
0c92fc22b&query=${ele.capital}`)
                    dispatch(modal(true))
                    dispatch(getWeatherData(res.data.current))
                    console.log(res)
                  }
                  fetchData()
                }}>
                  Capital Weather
                </Button><br />
              </CardActions>
            </Card>
              <Weather />
            </>)
          })
        }
      </div>
      <button style={{ width: '40%', margin: '20px', textDecoration: 'none' }}
        onClick={() => {
          history.push('/')
        }}><Router><Link to='/'
          style={{ textDecoration: 'none' }}>Back</Link></Router></button>
    </div>
  )
}
export default Info
Weather.tsx
import React from 'react'
import Modal from 'react-modal'
import { useSelector, useDispatch } from 'react-redux'
import modal from '../redux/actions/modal'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
type stateType = {
  getDataReducer: any
  modalreducer: boolean
  getWeatherDataReducer: any
}
const Weather = () => {
  const myState = useSelector((state: stateType) => {
    return state
  })
  const dispatch = useDispatch()
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Modal isOpen={myState.modalreducer}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={myState.getWeatherDataReducer.weather_icons}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Temperature:{myState.getWeatherDataReducer.temperature}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">Wind Speed:{myState.getWeatherDataReducer.wind_speed}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Precip:{myState.getWeatherDataReducer.precip}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() =>
              dispatch(modal(false))}>
              Back
            </Button>
          </CardActions>
        </Card>
      </Modal>
    </div>
  )
}
export default Weather
redux: -actions
getData.tsx
const getData = (data: any) => {
  return {
    type: 'getData',
    payload: data
  }
}
export default getDatagetWeatherData.tsx
const getWeatherData = (res: any) => {
  return {
    type: 'getWeatherData',
    payload: res
  }
}
export default getWeatherData
modal.tsx
const modal = (payload: boolean) => {
  return {
    type: 'modal',
    payload: payload
  }
}
export default modal
reducers
getDataReducer.tsx
type Action = {
  type: string,
  payload: any
}
const initialState: any = []
const getDataReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'getData': return action.payload
    default: return state
  }
}
export default getDataReducer
getWeatherDataReducer.tsx
type Action = {
  type: string,
  payload: any
}
const initialState: any = []
const getWeatherDataReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'getWeatherData': return action.payload
    default: return state
  }
}
export default getWeatherDataReducer
modaReducer.tsx
type Action = {
  type: string,
  payload: boolean
}
const initialState = false
const modalreducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'modal': return action.payload
    default: return state
  }
}export default modalreducer
rootReducer.tsx
import { combineReducers } from "redux";
import getDataReducer from "./getDataReducer";
import modalreducer from "./modalreducer";
import getWeatherDataReducer from "./getWeatherDataReducer";
const rootReducer = combineReducers({
  getDataReducer: getDataReducer,
  modalreducer: modalreducer,
  getWeatherDataReducer: getWeatherDataReducer
})
export default rootReducer
store.tsx
import { createStore, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose;
const store = createStore(rootReducer, composeEnhancers());
export default store
__test__
actions
getData.test.tsximport getData from "../../redux/actions/getData";
test('getData test', () => {
  const action = getData('India')
  expect(action).toEqual({
    type: 'getData',
    payload: 'India'
  })
})
getWeatherData.test.tsx
import getWeatherData from "../../redux/actions/getWeatherData";
test('getWeatherData test', () => {
  const action = getWeatherData(['abc', 'def'])
  expect(action).toEqual({
    type: 'getWeatherData',
    payload: ['abc', 'def']
  })
})
modal.test.tsx
import modal from "../../redux/actions/modal";
test('modal test', () => {
  const action = modal(true)
  expect(action).toEqual({
    type: 'modal',
    payload: true
  })
})
componentsHome.test.tsx
import Home from '../../components/Home'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import React from 'react'
describe('Home Component tests', () => {
  let container: HTMLDivElement
  beforeEach(() => {
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
    expect(container).toMatchSnapshot()
  })
})
reducersgetDatareducer.test.tsx
import getDataReducer from "../../redux/reducers/getDataReducer";
test('getDataReducer test', () => {
  const reducer = getDataReducer([], {
    type: 'getData',
    payload: ['abc', 'def']
  })
  expect(reducer).toEqual(['abc', 'def'])
})
getWeatherDataReducer.test.tsx
import getWeatherDataReducer from "../../redux/reducers/getWeatherDataReducer";
test('getWeatherDataReducer test', () => {
  const reducer = getWeatherDataReducer([], {
    type: 'getWeatherData',
    payload: ['abc', 'def']
  })
  expect(reducer).toEqual(['abc', 'def'])
})
modalreducer.test.tsx
import modalreducer from "../../redux/reducers/modalreducer";
test('modal Reducer test', () => {
  const reducer = modalreducer(false, {
    type: 'modal',
    payload: true
  })
  expect(reducer).toEqual(true)
})