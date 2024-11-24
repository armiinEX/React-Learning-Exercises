import { useContext } from "react";
import { TestContext } from "./testContext";

const Item =(props)=>{
    const rangg = useContext(TestContext);
    return(
        <div style={{color: rangg}}>
            {props.children}
        </div>
    )
}
export default Item;