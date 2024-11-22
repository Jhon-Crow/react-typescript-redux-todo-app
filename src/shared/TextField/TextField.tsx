import TextFieldMT, {type TextFieldProps as MTextFieldProps} from '@mui/material/TextField';
import {ChangeEvent, memo, useCallback} from "react";

interface TextFieldProps extends Omit<MTextFieldProps<'standard'>, 'onChange' | 'variant'>{
    onChange: (arg: string) => void;
    variant?: 'standard' | 'filled';
}

const TextField = memo((props: TextFieldProps) => {
    const {onChange, ...otherProps} = props;

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }, [onChange]);

    return (
        <TextFieldMT
            {...otherProps}
            onChange={onChangeHandler}
        />
    );
});

export default TextField;