import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import {pink} from "@mui/material/colors";
import {memo, useCallback, useMemo, useState} from "react";
import {toggleTodo, updateTodo} from "../../../store/todoSlice.ts";
import {useDispatch} from "react-redux";

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
    const trimmedValue = useMemo(() => textValue.trim(), [textValue]);

    const handleUpdateTodo = useCallback(() => {
        if (trimmedValue) {
            dispatch(updateTodo({ id: id, text: textValue }));
        }
    }, [dispatch, id, textValue]);

    const checkboxToggle = useCallback(() => {
        dispatch(toggleTodo({ id: id, checked: checked }));
    }, [dispatch, id, checked]);

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
                label={!trimmedValue ? 'ENTER TEXT!' : null}
                error={!trimmedValue}
                fullWidth={true}
                onBlur={handleUpdateTodo}
                onChange={(e) => setTextValue(e.target.value)}
                value={textValue}
                size="small" />
            <Button
                variant="contained"
                color={"error"}
                onClick={() => handleDeleteClick(id)}
            >delete</Button>
        </Box>
    );
});

export default TodoItem;
