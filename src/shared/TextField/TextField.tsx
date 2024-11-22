import TextFieldMT, {type TextFieldProps as MTextFieldProps} from '@mui/material/TextField';
import {ChangeEvent, memo, useCallback} from "react";

interface TextFieldProps extends Omit<MTextFieldProps<'standard'>, 'onChange' | 'variant'>{
    onChange: (arg: string) => void;
    variant?: 'standard' | 'filled';
    maxLengthNum?: number;
}

const TextField = memo((props: TextFieldProps) => {
    const {onChange, maxLengthNum = 10, ...otherProps} = props;

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }, [onChange]);

    return (
        <TextFieldMT
            {...otherProps}
            inputProps={{ maxLength: maxLengthNum }}
            onChange={onChangeHandler}
        />
    );
});

export default TextField;