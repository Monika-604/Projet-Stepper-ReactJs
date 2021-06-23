import { useState, useContext, useEffect } from "react"
import {StepsContext,CurrentContext,SelectedContext }from "./../context"

const  Frame = () => {

    
    const [steps,setSteps]=useContext(StepsContext)
    const [selectedStep,setSelectedStep]=useContext(SelectedContext)
    const [currentStep,setCurrntStep]=useContext(CurrentContext)
    const [setpFrame,setStepFrame]=useState("")

    const completedHandler =()=>{
        
        const newSteps= steps.map(item=>{
                if(item.id == currentStep){
                    const targetStep={
                        ...item,
                        completed:true
                    }
                    return targetStep
                }
                return item
            })
        setSteps(newSteps)
        
           console.log(newSteps);
           
    }

    useEffect(() => {
        steps.map((item,index)=>{
            if(item.id===selectedStep){
                if(item.completed){
                    setStepFrame("Completed")
                }else if(item.id == currentStep){
                    setStepFrame("Current")
                }
                else{
                    setStepFrame("Forbidden")
                }
            }
        })
    },)

        return(
            <div className=" ms-3 col-7 d-flex flex-column justify-content-center rounded frame">
                {
                    setpFrame==="Completed"
                    ? <h3 className="h-25 text-center text-dark">You have done this step already.</h3>
                    : setpFrame==="Current"
                    ? <button className="btn btn-success align-self-center px-3 py-2" onClick={completedHandler}>complete</button>
                    : <div className="d-flex flex-column justify-content-center ">
                            <h3 className=" text-center text-secondary">Please do the previous Steps!</h3>
                            <button className="btn btn-success align-self-center mt-5  px-3 py-2" disabled>complete</button>
                     </div>
                }
            </div>
        )
    
   
       

}
export  default Frame