import {useState,useEffect} from 'react'
export default function UserParticipation(){
    const [ques,setQues] = useState({

        "question": "What is your favorite programming language?",
      
        "choices": [
      
          { "id": 1, "label": "JavaScript", "votes": 0 },
      
          { "id": 2, "label": "Python", "votes": 0 },
      
          { "id": 3, "label": "Java", "votes": 0 },
      
          { "id": 4, "label": "C#", "votes": 0 }
      
      
        ]})

        function handelChoice(event){

            console.log(event.target.selectedOption)

        }
        function updateVotes(id){
            setQues(prevState =>({...prevState}))

        }
    return(
        <form>
       
            <label> Choose an Option</label>
           { <select>
              {
                  ques.choices.map(choice =>{
                    return <option value={choice.id}>{choice.label}</option>
                  })
                  
              }
            </select>}
            <button onClick={handelChoice}>Submit Vote</button>
           
          
          
                  

        </form>
    );
}