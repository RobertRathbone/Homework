import {useState} from 'react';

const Box = ({box, index, deleteBox, updateBox}) => {
    return (
           <span
            style={{
                    backgroundColor: 'grey',
                    height: '100px',
                    width: '300px',
                    display: "block",
                    verticalAlign: "top",
                    marginLeft: "auto",
                    marginRight: "auto",
                    textDecoration: box.status ? "line-through" : ""
                    }}>
                        Task: {box.task}
                <p>Mark as completed<input
                                        type="checkbox"
                                        checked={box.status}
                                        onChange={e => updateBox(index)}/>
                </p>
                <button onClick={(e) => deleteBox(index)}>Delete</button>
            </span>
    )
}

export default Box;