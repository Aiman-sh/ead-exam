import {useState,useEffect} from 'react'
export default function PollDisplay(){
    const [ques,setQues] = useState({

        "question": "What is your favorite programming language?",
      
        "choices": [
      
          { "id": 1, "label": "JavaScript", "votes": 0 },
      
          { "id": 2, "label": "Python", "votes": 0 },
      
          { "id": 3, "label": "Java", "votes": 0 },
      
          { "id": 4, "label": "C#", "votes": 0 }
      
      
        ]})
    
         useEffect(()=>{
            const optionSelector = document.querySelector('option')
            optionSelector.addEventListener('select',function(event){
                alert(event.target.textContent)
            })
        },[]) 

       
    return(
        <>
       
            <label> {ques.question}</label>
           { <ul >
              {
                  ques.choices.map(choice =>{
                    return <li>{choice.label}- Votes: {choice.votes}</li>
                  })
                  
              }
            </ul>}
           
           
    
        
        </>
    );
}