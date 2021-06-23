import {useContext} from "react"
import {SelectedContext,CurrentContext }from "./../context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck} from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faExclamation} from '@fortawesome/free-solid-svg-icons'

const  Step = ({id,status,label,chronology,current,selected}) => {
   
    const [selectedStep,setSelectedStep]=useContext(SelectedContext)
    const [currentStep,setCurrntStep]=useContext(CurrentContext)

    return(
            <div className={`prev-step step
                                ${status ? "complete" :"" } 
                                ${id== currentStep ? "current" : ""}  
                            `} 
                onClick={()=>setSelectedStep(id)}
            >
                <div>
                
                    <FontAwesomeIcon 
                        icon={status? faCheck : id== currentStep ? faExclamation: faLock} 
                        className={`ico ${status? "ico-green" : id== currentStep ? "ico-yellow": "ico-muted"} `}
                        />
                    <span className={`text-secondary label
                                        ${ (status || id == currentStep ) ? "font-weight-bolder text-dark" :"" }
                                        ${ id==selectedStep ? "shadow" : ""}
                                    `} > 
                    {label}</span>
                </div>
            </div>
        )
}
export  default Step