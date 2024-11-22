import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import {useCallback, useMemo, useState} from "react";
import {createTodo} from "../../../store/todoSlice.ts";

const TodoForm = () => {
    const [textValue, setTextValue] = useState('');
    const dispatch = useDispatch();
    const trimmedValue = useMemo(() => textValue.trim(), [textValue]);

    const addTodoHandler = useCallback(() => {
        if (trimmedValue) {
            dispatch(createTodo(textValue));
            setTextValue('');
        }
    }, [dispatch, textValue]);

    const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTextValue(e.target.value);
    }, []);

    const onKeyDownEnterHandler = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTodoHandler();
        }
    }, [addTodoHandler]);

    return (
        <Box
            gap={1}
            display="flex"
            alignItems='center'
            justifyContent='start'
            sx={{ width: 500, maxWidth: '100%' }}
        >
            <TextField
                error={!trimmedValue}
                fullWidth={true}
                onChange={onChangeHandler}
                value={textValue}
                label='Add todo'
                variant="standard"
                size="small"
                onKeyDown={onKeyDownEnterHandler}
            />
            <Button
                disabled={!trimmedValue}
                onClick={addTodoHandler}
                variant='outlined'
                color="success"
            >
                ok
            </Button>
        </Box>
    );
};

export default TodoForm;
