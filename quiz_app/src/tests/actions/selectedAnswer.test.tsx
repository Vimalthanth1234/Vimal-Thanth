import selectedAnswer from "../../redux/actions/selectedAnswer";

test('selected ansewer action test',()=>{
    const action = selectedAnswer(1,2,['abc'])
    expect(action).toEqual({
        type:'selectedAnswer',
        payload:[1,2,['abc']]
    })
})