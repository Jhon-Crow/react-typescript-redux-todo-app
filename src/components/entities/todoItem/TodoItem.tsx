import Button from '@mui/material/Button';
import {Checkbox, TextField} from "@mui/material";
import {pink} from "@mui/material/colors";
import {useState} from "react";
import {toggleTodo, updateTodo} from "../../../store/todoSlice.ts";
import {useDispatch} from "react-redux";

interface TodoItemProps {
    id: string;
    text: string;
    checked: boolean;
    handleDeleteClick: (id: string) => void;
}

const TodoItem = (props: TodoItemProps) => {
    const {id, text, checked, handleDeleteClick} = props;
    const [textValue, setTextValue] = useState(text);
    const dispatch = useDispatch();

    const handleUpdateTodo = () => {
        if (textValue.trim()) {
            dispatch(updateTodo({id: id , text: textValue}));
        }
    };

    const checkboxToggle = () => {
        dispatch(toggleTodo({id: id, checked: checked}));

    }

    return (
        <li>
            <Checkbox
                sx={{
                color: pink[800],
                '&.Mui-checked': {
                    color: pink[600],
                }}}
                size='medium'
                onClick={checkboxToggle}
                checked={checked}/>
            <TextField
                onBlur={handleUpdateTodo}
                onChange={(e) => setTextValue(e.target.value)}
                value={textValue}
                size="small"/>
            <Button variant="contained" color={"error"} onClick={() => handleDeleteClick(id)}>delete</Button>
        </li>
    );
};

export default TodoItem;