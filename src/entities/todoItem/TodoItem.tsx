import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import {pink} from "@mui/material/colors";
import {memo, useCallback, useState} from "react";
import {toggleTodo, updateTodo} from "../../store/todoSlice.ts";
import {useDispatch} from "react-redux";
import Button from "../../shared/Button/Button.tsx";
import TextField from "../../shared/TextField/TextField.tsx";

interface TodoItemProps {
    id: string;
    text: string;
    checked: boolean;
    handleDeleteClick: (id: string) => void;
}

const TodoItem = memo((props: TodoItemProps) => {
    const { id, text, checked, handleDeleteClick } = props;
    const [textValue, setTextValue] = useState(text);
    const dispatch = useDispatch();
    const isEmpty = !(textValue.trim());


    const handleUpdateTodo = useCallback(() => {
        if (!isEmpty) {
            dispatch(updateTodo({ id, text: textValue }));
        }
    }, [dispatch, id, textValue]);

    const checkboxToggle = useCallback(() => {
        dispatch(toggleTodo({ id, checked }));
    }, [dispatch, id, checked]);

    const deleteHandler = () => {
        handleDeleteClick(id);
    };

    const onChangeHandler = useCallback((value: string) => {
        setTextValue(value);
    }, []);

    return (
        <Box
            gap={1}
            display="flex"
            alignItems='center'
            justifyContent='start'
            sx={{ width: 580, maxWidth: '100%' }}
        >
            <Checkbox
                sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                        color: pink[600],
                    }
                }}
                size='medium'
                onClick={checkboxToggle}
                checked={checked} />
            <TextField
                label={isEmpty ? 'ENTER TEXT!' : null}
                error={isEmpty}
                fullWidth={true}
                onBlur={handleUpdateTodo}
                onChange={onChangeHandler}
                value={textValue}
                size="small" />
            <Button
                variant="contained"
                color={"error"}
                onClick={deleteHandler}
            >delete</Button>
        </Box>
    );
});

export default TodoItem;
