import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {connect} from "react-redux";
import {useEffect, useState} from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function ModalWindow(props) {

    const [inputCheck, setInputCheck] = useState("")

    const handleYesButton = () => {
        props.confirmDeleteTask(props.task.id)
        props.closeModal()
    }

    useEffect(() => {
        setInputCheck("")
    }, [props.task])

    if (props.mode === "Delete") {


        return (
            <Modal
                open={props.isOpen}
                // onClose={}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Are you sure you want to delete this task?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        Repeat <b> {props.task?.name}</b> to delete
                        <input value={inputCheck} onChange={event => setInputCheck(event.target.value)}/>
                    </Typography>
                    <Button disabled={inputCheck !== props.task?.name} onClick={handleYesButton}>Yes, I'm sure</Button>
                    <Button onClick={() => props.closeModal()}>Cancel</Button>
                </Box>
            </Modal>
        );
    }
    if (props.mode === "Update") {
        return (
            <Modal
                open={props.isOpen}
                // onClose={}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <h3>Update Task</h3>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        Repeat <b> {props.task?.name}</b> to delete
                        <input value={inputCheck} onChange={event => setInputCheck(event.target.value)}/>
                    </Typography>
                    <Button disabled={inputCheck !== props.task?.name} onClick={handleYesButton}>Yes, I'm sure</Button>
                    <Button onClick={() => props.closeModal()}>Cancel</Button>
                </Box>
            </Modal>
        )
    }
}
    const mapStateToProps = (state) => ({
        isOpen: state.modalWindowData.isOpen,
        mode: state.modalWindowData.mode,
        task: state.modalWindowData.task,
    })

    const mapDispatchToProps = (dispatch) => ({
        closeModal: () => dispatch({type: "TOGGLE_MODAL", payload: {}}),
        confirmDeleteTask: (id) => dispatch({type: "DELETE_TASK", payload: id})
    })

    export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);