import allQuestionsReducer from "../../redux/reducers/allQuestionsReducer";

const initialState = [
    [{
        'Question Number':1,
        'question':'2+2=___',
        'type':'Fill In The Blanks',
        'options':['1','2','3','4'],
        'Answer':['4'],
        'Answered':false,
        'correct':false,
        'lang':'0',
        'selectedAns':[]
    }]]

test('allQuestionsreducer',()=>{
    const reducer = allQuestionsReducer(initialState,{
        type:'isAnswered',
        payload:['0','0',true]
    })
    expect(reducer).toEqual([
        [{
            'Question Number':1,
            'question':'2+2=___',
            'type':'Fill In The Blanks',
            'options':['1','2','3','4'],
            'Answer':['4'],
            'Answered':true,
            'correct':false,
            'lang':'0',
            'selectedAns':[]
        }]])
})

test('Selected Answer test',()=>{
    const reducer = allQuestionsReducer(initialState,{
        type:'selectedAnswer',
        payload:['0','0',['1']]
    })
    expect(reducer).toEqual([
        [{
            'Question Number':1,
            'question':'2+2=___',
            'type':'Fill In The Blanks',
            'options':['1','2','3','4'],
            'Answer':['4'],
            'Answered':true,
            'correct':false,
            'lang':'0',
            'selectedAns':['1']
        }]])
})