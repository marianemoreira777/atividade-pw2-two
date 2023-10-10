import { useState } from "react";
import Style from "./style.module.css";
import {AiOutlinePlusCircle} from "react-icons/ai";

function Input ({handleText}){
    const [text, setText] = useState("")
    function AddText(){
        handleText(text)
        setText("")
    }
    return (
        <div className={Style.Input}>
            <input type="text" placeholder="Adicione uma nova tecnologia" value={text} onChange={
                (event) => setText(event.target.value)
            }/>
            <button onClick={AddText}>
                Criar <AiOutlinePlusCircle
                style={{fontSize:"1.2em"}}
                />
            </button>
        </div>
    )
};

export default Input;