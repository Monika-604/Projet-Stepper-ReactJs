
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Steps from "./components/Steps"
import Frame from "./components/Frame"

import stepsApi from "./Api/stepsApi"
import {StepsContext ,CurrentContext, SelectedContext} from './context';



export default function App () {

    const [steps,setSteps] = useState(stepsApi.steps)
    const [selectedStep,setSelectedStep] = useState(steps[0].id)
    const [currentStep ,setCurrentStep]= useState("")
    
    useEffect(() => {
        steps.map((item,index)=>{
            if(item.completed===false && steps[index-1].completed===true){
                setCurrentStep(item.id)
            }
        })
    }, [steps])
  


    return(
        <StepsContext.Provider 
                value={[steps,setSteps]}>
             <SelectedContext.Provider
                    value={[selectedStep,setSelectedStep]}> 
                <CurrentContext.Provider
                    value={[currentStep ,setCurrentStep]}>  
                    <div>
                        <div className="container ">
                            <div className="row ">
                                <Steps />
                                <Frame />
                            </div>
                        </div>
                    </div>
                </CurrentContext.Provider>
            </SelectedContext.Provider>
        </StepsContext.Provider>
    )
}




