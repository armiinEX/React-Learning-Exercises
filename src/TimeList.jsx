import Item from "./Item";

const TimeList =(props)=>{
    console.log(props.children)
    return(
        <div className="main_time_list flex justify-center flex-col">

            {props.children.map((t)=>(
                <Item key={Math.random()}>{t}</Item>
                ))}

        </div>
    )
}
export default TimeList;