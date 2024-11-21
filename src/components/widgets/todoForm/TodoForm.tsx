import {Box, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import {useCallback, useState} from "react";
import {createTodo} from "../../../store/todoSlice.ts";

const TodoForm = () => {
    const [textValue, setTextValue] = useState('');
    const dispatch = useDispatch();


    const handleAddTodo = useCallback(() => {
        if (textValue.trim()) {
            dispatch(createTodo(textValue));
            setTextValue('');
        }
    }, [dispatch, textValue]);

    return (
        <Box
            gap={1}
            display="flex"
            alignItems='center'
            justifyContent='start'
            sx={{ width: 500, maxWidth: '100%' }}
        >
            <TextField
                fullWidth={true}
                onChange={(e) => setTextValue(e.target.value)}
                value={textValue}
                label='Add todo'
                multiline
                variant="standard"
                size="small"
            />
            <Button onClick={handleAddTodo} variant='outlined' color="success">ok</Button>
        </Box>
    );
};

export default TodoForm;
