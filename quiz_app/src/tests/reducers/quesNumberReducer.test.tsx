import quesNumReducer from "../../redux/reducers/quesNumReducer";

const initialState = 0

test('question number reducer',()=>{
    const reducer = quesNumReducer(initialState,{
        type:'quesNumber',
        payload:2
    })

    expect(reducer).toEqual(2)
})

test('next',()=>{
    const reducer = quesNumReducer(initialState,{
        type:'next',
        payload:2
    })
    expect(reducer).toEqual(1)
})

test('previous',()=>{
    const reducer = quesNumReducer(initialState,{
        type:'previous',
        payload:2
    })
    expect(reducer).toEqual(0)
})