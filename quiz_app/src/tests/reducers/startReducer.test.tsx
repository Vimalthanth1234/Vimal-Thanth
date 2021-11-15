import startReducer from "../../redux/reducers/startReducer";

test('start reducer test',()=>{
    const reducer = startReducer('0',{
        type:'startHandler',
        payload:'0'
    })
    expect(reducer).toEqual('0')
})