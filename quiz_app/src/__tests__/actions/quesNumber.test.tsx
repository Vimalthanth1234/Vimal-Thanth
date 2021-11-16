import quesNumber from "../../redux/actions/quesNumber";

test('Question Number',()=>{
    const action = quesNumber(5)
    expect(action).toEqual({
        type:'quesNumber',
        payload:5
    })
})