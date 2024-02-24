import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/setting.css'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { Button } from "reactstrap";


export default function Settings(){
    const [theme, setTheme] = useState("light")
    const primaryColors = [
        "var(--primary-color)",
        "rgb(255, 0, 86)",
        "rgb(33, 150, 243)",
        "rgb(255, 193, 7)",
        "rgb(0, 200, 83)",
        "rgb(156, 39, 176)",
    ]
    const fontSizes = [
        {
            title: "Small",
            value: "12px"
        },
        {
            title: "Medium",
            value: "16px"
        },
        {
            title: "Large",
            value: "20px"
        }
    ]

    const animationSpeeds = [
        {
            title: "Slow",
            value: 2
        },
        {
            title: "Medium",
            value: 1
        },
        {
            title: "Fast",
            value: .5
        }
    ]
    const [primaryColor, setPrimaryColor] = useState(0) 
    const [fontSize, setFontSize] = useState(1)
    
    return (
        <div>
            <div className="section d-block">
            <h2>Primary color</h2>
            <div className="options-container">
                <div className="option light">
                    { theme === "light" && (
                        <div className="check">
                        <FontAwesomeIcon icon={faCheck}/>
                    </div> 
                    )}
                </div>
                <div className="option dark">
                { theme === "dark" && (
                        <div className="check">
                        <FontAwesomeIcon icon={faCheck}/>
                    </div> 
                    )}
                </div>
            </div>
        </div>

         <div className="section d-block">
            <h2>Preferred theme</h2>
             <div className="options-container">
                
                { primaryColors.map((color, index) => (
                      <div className="option light" style={{backgroundColor: color}}>
                      { primaryColor === index && (
                          <div className="check">
                          <FontAwesomeIcon icon={faCheck}/>
                      </div> 
                 
                )}
                </div>
                ))}
               
             </div> 

             
        </div>
        
        <div className="section d-block">
            <h2>Font size</h2>
             <div className="options-container">
                
                { fontSizes.map((size, index) => (
               
                <button className="btn" style={{backgroundColor : "var(--primary-color)"}}>
                    {size.title}
                
                { fontSize === index && <span><FontAwesomeIcon icon={faCheck}/></span>
                }
                </button>
                ))}
               
             </div> 

             
        </div>

        <div className="section d-block">
            <h2>Animation speed</h2>
             <div className="options-container">
                
                { animationSpeeds.map((speed, index) => (
               
                <button className="btn" style={{backgroundColor : "var(--primary-color)"}}>
                    {speed.title}
                
                { animationSpeeds === index && <span><FontAwesomeIcon icon={faCheck}/></span>
                }
                </button>
                ))}
               
             </div> 

             
        </div>

    </div>
    )
}