import startHandler from "../../redux/actions/startHandler";

test('startHandler action test',()=>{
    const action = startHandler('0')
    expect(action).toEqual({
        type:'startHandler',
        payload:'0'
    })
})