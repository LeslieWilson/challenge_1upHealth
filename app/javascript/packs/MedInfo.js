import React, {useState} from 'react'



const MedInfo = (props) =>{
const [info, setInfo] = useState([
  "hi"
])

const dopeFunction = (event)  => {
  event.preventDefault()
  fetch("/api/v1/patient_info", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    })
    .then(response => {
      if (response.ok){
        return response;
      }else{
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body=>{
      setInfo(JSON.stringify(body))
    })
    .catch((error)=> {console.error("error in fetch")
  })
}


  return(
    <div>
    <h1>hello, click me to see some dope information</h1>

    <button onClick ={dopeFunction}>click me</button>
    {info}
    </div>
  )
}

export default MedInfo
