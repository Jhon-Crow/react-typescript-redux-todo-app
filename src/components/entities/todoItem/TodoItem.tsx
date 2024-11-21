import Button from '@mui/material/Button';
import {Box, Checkbox, TextField} from "@mui/material";
import {pink} from "@mui/material/colors";
import {memo, useCallback, useState} from "react";
import {toggleTodo, updateTodo} from "../../../store/todoSlice.ts";
import {useDispatch} from "react-redux";

interface TodoItemProps {
    id: string;
    key: string;
    text: string;
    checked: boolean;
    handleDeleteClick: (id: string) => void;
}

const TodoItem = memo((props: TodoItemProps) => {
    const { key, id, text, checked, handleDeleteClick } = props;
    const [textValue, setTextValue] = useState(text);
    const dispatch = useDispatch();

    const handleUpdateTodo = useCallback(() => {
        if (textValue.trim()) {
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
            key={key}
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
