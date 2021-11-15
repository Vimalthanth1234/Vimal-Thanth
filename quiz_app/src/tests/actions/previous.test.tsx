import previous from "../../redux/actions/previous";

test('previous',()=>{
    const action = previous()
    expect(action).toEqual({
        type:'previous'
    })
})