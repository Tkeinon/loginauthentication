import {useField} from "formik";
import styled from 'styled-components';

const Container = styled.div`
  display: block;
  margin-bottom: 10px;
`;

const ErrorMsg = styled.p`
  color: red;
`;

const TextInput = ( {label, ...props} ) => {
    // useField returns props to spread on input, meta for errors
    const [field, meta] = useField(props);

    return (
        <Container>
            <label htmlFor={props.name}>{label}</label> <br/>
            <input {...field} {...props} />
            {meta.touched && meta.error ? (
                <ErrorMsg>{meta.error}</ErrorMsg>
            ) : null }
        </Container>
    )
}

export default TextInput;