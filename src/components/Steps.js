import {useState,useContext} from "react"
import "./steps.css"
import {StepsContext }from "./../context"

import Step from "./Step";

const Steps = () => {
  
    const [steps,setSteps]=useContext(StepsContext)

    return(
                <div className="col-4 steps me-4">    
                    <div className="side-content">
                        <div className="bs-vertical-wizard">
                            {
                                steps.map( (item ,index)=> (
                                    <Step
                                        key={item.id}
                                        id={item.id}
                                        label={item.title}
                                        chronology={item.chronology}
                                        status={item.completed}
                                    />
                                ))
                            }
                        </div>
                    </div>

                    <div className="col-sm-8 col-md-9">
                    </div>

                </div>

    )
}

export  default Steps