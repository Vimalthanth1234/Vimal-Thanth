import React from 'react'
type Action = {
    type:string,
    payload:any
}
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
    },
    {
        'Question Number':2,
        'question':'3*8 = ?',
        'type':'MCQ',
        'options':['11','24','0','76'],
        'Answer':['24'],
        'Answered':false,
        'correct':false,
        'lang':'0',
        'selectedAns':[]
    },
    {
        'Question Number':3,
        'question':'1>2',
        'type':'True Or False',
        'options':['true','false'],
        'Answer':['false'],
        'Answered':false,
        'correct':false,
        'lang':'0',
        'selectedAns':[]
    },
    {
        'Question Number':4,
        'question':[['a:1+2','b:3*9','c:4/2','d:9-8'],['a:1','b:3','c:27','d:2']],
        'type':'Match The Following',
        'options':['a->b,b->c,c->d,d->a','a->c,b->a,c->d,d->b','a->d,b->c,c->b,d->a','a->a,b->c,c->b,d->d'],
        'Answer':['a->b,b->c,c->d,d->a'],
        'Answered':false,
        'correct':false,
        'lang':'0',
        'selectedAns':[]
    },
    {
        'Question Number':5,
        'question':'Select True options',
        'type':'Multi Select',
        'options':['1>2','5>=3','1=0','9<11'],
        'Answer':['5>=3','9<11'],
        'Answered':false,
        'correct':false,
        'lang':'0',
        'selectedAns':[]
    },],
    [{
        'Question Number':'१',
        'question':'२+२=___',
        'type':'Fill In The Blanks',
        'options':['१','२','३','४'],
        'Answer':['४'],
        'Answered':false,
        'correct':false,
        'lang':'1',
        'selectedAns':[]
    },
    {
        'Question Number':'२',
        'question':'३*८ = ?',
        'type':'MCQ',
        'options':['११','२४','0','७६'],
        'Answer':['२४'],
        'Answered':false,
        'correct':false,
        'lang':'1',
        'selectedAns':[]
    },
    {
        'Question Number':'३',
        'question':'१>२',
        'type':'True Or False',
        'options':['सही','गलत'],
        'Answer':['गलत'],
        'Answered':false,
        'correct':false,
        'lang':'1',
        'selectedAns':[]
    },
    {
        'Question Number':'४',
        'question':[['a:१+२','b:३*९','c:४/२','d:९-८'],['a:१','b:३','c:२७','d:२']],
        'type':'Match The Following',
        'options':['a->b,b->c,c->d,d->a','a->c,b->a,c->d,d->b','a->d,b->c,c->b,d->a','a->a,b->c,c->b,d->d'],
        'Answer':['a->b,b->c,c->d,d->a'],
        'Answered':false,
        'correct':false,
        'lang':'1',
        'selectedAns':[]
    },
    {
        'Question Number':'५',
        'question':'सही विकल्प चुनें',
        'type':'Multi Select',
        'options':['१>२','५>=३','१=0','९<११'],
        'Answer':['५>=३','९<११'],
        'Answered':false,
        'correct':false,
        'lang':'1',
        'selectedAns':[]
    },],
]
const allQuestionsReducer = (state=initialState,acion:Action) => {
    switch(acion.type){
        case 'isAnswered':{
            const [priIndex,secIndex,val] = acion.payload
            state[priIndex][secIndex].Answered=val
            return state
        }
        case 'selectedAnswer':{
            const [priIndex,secIndex,val] = acion.payload
            state[priIndex][secIndex].selectedAns=val
            return state
        }
        default :return state
    }
}
export default allQuestionsReducer
