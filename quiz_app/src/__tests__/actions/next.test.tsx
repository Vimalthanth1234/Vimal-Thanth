import next from "../../redux/actions/next";
test('next',()=>{
    const action = next()
    expect(action).toEqual({
        type:'next'
    })
})