import {useState} from 'react';

const New = ({createBox}) => {

    const [newTask, setNewTask] = useState("");
    const [error, setError] = useState("");

    const submitTask = (event) => {
        event.preventDefault();

        // validations
        let errs = false;

        if(newTask.length < 3){
            setError("Must add a longer color!");
            errs = true;
        }

        // success!
        if(!errs){
            setError(null);
            console.log(newTask);
            createBox({task: newTask});
        }
    }

    return (
        <>
            What the user is typing: {newTask}
            <br/>
            {error}
            <br/>
            <form onSubmit={submitTask}>
                <br/>
                <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)}/>
                <br/>
                <input type="submit" value="Create a task"/>
                <br/>
            </form>
        </>
    )
}

export default New;