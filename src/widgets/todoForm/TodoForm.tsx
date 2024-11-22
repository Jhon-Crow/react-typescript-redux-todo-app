import Box from "@mui/material/Box";
import TextField from "../../shared/TextField/TextField.tsx";
import Button from "../../shared/Button/Button.tsx";
import {useDispatch} from "react-redux";
import {useCallback, useState} from "react";
import {createTodo} from "../../store/todoSlice.ts";

const TodoForm = () => {
    const [textValue, setTextValue] = useState('');
    const dispatch = useDispatch();
    const isEmpty = !(textValue.trim());
    const inputLength = 52;

    const addTodoHandler = useCallback(() => {
        if (!isEmpty) {
            dispatch(createTodo(textValue));
            setTextValue('');
        }
    }, [dispatch, textValue]);

    const onChangeHandler = useCallback((value: string) => {
        setTextValue(value);
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
                error={isEmpty || inputLength === textValue.length}
                maxLengthNum={inputLength}
                fullWidth={true}
                onChange={onChangeHandler}
                value={textValue}
                label='Add todo'
                variant="standard"
                size="small"
                onKeyDown={onKeyDownEnterHandler}
            />
            <Button
                disabled={isEmpty}
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
