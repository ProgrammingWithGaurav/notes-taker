import React, { useState } from 'react';
import context from "./Context";

const State = (props) => {
    const [noteId, setNoteId] = useState(null);
    return (
        <context.Provider value={{ noteId, setNoteId }}>
            {props.children}
        </context.Provider>
    )
}

export default State