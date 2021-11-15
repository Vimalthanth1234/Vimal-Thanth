import isAnswered from "../../redux/actions/isAnswered";
test('isAnswered',()=>{
    const action = isAnswered(1,2,true)
    expect(action).toEqual({
        type:'isAnswered',
        payload:[1,2,true]
    })
})