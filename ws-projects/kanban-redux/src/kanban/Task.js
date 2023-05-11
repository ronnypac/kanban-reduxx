import {connect} from "react-redux";

function Task(props) {
    return(
        <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.task.name}</h5>
                    <p className="card-text">{props.task.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <button
                            onClick={() => props.changeStatusPrevious(props.task.id, props.task.status)}
                            disabled={props.task.status === props.statuses[0]}
                        > ← </button>{" "}
                        {props.task.status}
                        {" "}<button
                        onClick={() => props.changeStatusNext(props.task.id, props.task.status)}
                        disabled={props.task.status === props.statuses[props.statuses.length -1]}
                    > → </button>
                    </li>

                    <li className="list-group-item">
                        <button onClick={() => props.upChangePriority(props.task.id)} disabled={props.priorities[props.priorities.length -1] === props.task.priority}> ↑ </button>{" "}
                        {props.task.priority}
                        {" "}<button onClick={() => props.downChangePriority(props.task.id)} disabled={props.priorities[0] === props.task.priority} > ↓ </button>
                    </li>
                </ul>
                <div className="card-body">
                    <button type="button" className="btn btn-primary">Edit</button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => props.openModal(props.task, "Delete")}>Delete</button>
                </div>
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        priorities: state.priorities,
        statuses: state.statuses,
    }
)

const mapDispatchToProps = (dispatch) => ({
    upChangePriority: (id) => dispatch({type: "CHANGE_PRIORITY_UP", payload: id}),
    downChangePriority: (id) => dispatch({type: "CHANGE_PRIORITY_DOWN", payload: id}),
    changeStatusNext: (id, status) => dispatch({type: "CHANGE_STATUS_NEXT", payload: {id, status}}),
    changeStatusPrevious: (id, status) => dispatch({type: "CHANGE_STATUS_PREVIOUS", payload: {id, status}}),
    openModal: (task, mode) => dispatch({type: "TOGGLE_MODAL", payload: {task, mode}}),
})



export default connect(mapStateToProps, mapDispatchToProps)(Task);