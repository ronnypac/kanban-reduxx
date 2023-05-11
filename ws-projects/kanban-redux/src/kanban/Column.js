import {connect} from "react-redux";
import Task from "./Task";

function Column(props) {



    return (

        <div className="col">
            <h3>{props.status}</h3>
            {props.tasks
                .filter((elem) => elem.status === props.status)
                .map((task) => <Task key={task.id} task={task} /> )
            }
        </div>

    )


}

const mapStateToProps = (state) => ({
    tasks: state.tasks

})
export default connect(mapStateToProps)(Column);