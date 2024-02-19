import "./collapsed.css"

function Collapsed(props){

    return(
        <main>
            <div className="collapsed">
                <h2 onClick={()=>props.moreDetails(props.item.id)}>{props.item.topic}  
                    <div className="collapsingClick">{props.item.isCollapsed?"-":"+"}</div>
                </h2>
                {props.item.isCollapsed && <p>{props.item.data}</p>}

            </div>


        </main>
    )


}

export default Collapsed;