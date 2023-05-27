import {useState} from 'react'
export default function PollDisplay(){
    const question = {

        "question": "What is your favorite programming language?",
      
        "choices": [
      
          { "id": 1, "label": "JavaScript", "votes": 0 },
      
          { "id": 2, "label": "Python", "votes": 0 },
      
          { "id": 3, "label": "Java", "votes": 0 },
      
          { "id": 4, "label": "C#", "votes": 0 }
      
      
        ]}

        function handelSubmit(){
            
        }
    return(
        <>
        <form>
            <label> {question.question}</label>
            <ul >
              {
                  question.choices.map(choice =>{
                    return <li>{choice.label}- Votes: {choice.votes}</li>
                  })
              }
            </ul>
            <button onClick={handelSubmit}>Sumbit vote</button>

        </form>
        </>
    );
}