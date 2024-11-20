import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {createTodo} from "../../../store/todoSlice.ts";

const TodoForm = () => {
    const [textValue, setTextValue] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (textValue.trim()) {
            dispatch(createTodo(textValue));
            setTextValue('');
        }
    };

    return (
        <div>
            <TextField
                onChange={(e) => setTextValue(e.target.value)}
                value={textValue}
                label='Add todo'
                multiline
                variant="standard"
                size="small"
            />
            <Button onClick={handleAddTodo} variant='outlined' color="success">ok</Button>
        </div>
    );
};

export default TodoForm;
