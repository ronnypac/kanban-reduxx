import {connect} from "react-redux";
import Column from "./Column";
import ModalWindow from "./ModalWindow";

const KanbanBoard = (props) => {

    return (
        <div>
            <h1>{props.appName}</h1>
                <button>Create New Task</button>
            <div className="container text-center">
                <div className="row align-items-start">

                    {props.statuses.map(
                        (elem, index) => <Column key={index} status={elem} />
                    )}

                </div>
            </div>
            <ModalWindow />

        </div>
    )
}
const mapStateToProps = (state) => (
    {
        appName: state.appName,
        statuses: state.statuses,
    }
)
export default connect(mapStateToProps)(KanbanBoard);