import styled from 'styled-components';
import { Field } from 'formik';

export const InputFormBox = styled.div`
display: flex;
padding: 20px;
margin: 20px;
max-width: 1120px;
border: 3px solid steelblue;
border-radius: 10px;
background-color: white;
color: steelblue;
justify-content: center

`
export const InputItem = styled(Field)`

flex-direction: column;
margin-bottom: 10px;
font-size: 24px;
height: 25px;
max-width: 350px;
margin-left: auto;

:invalid {
  border: 2px solid white;
  border-radius: 3px;

}
:invalid:required {
  
  background-image: linear-gradient(to right, white, steelblue);
}
`
export const FormDecoration = styled.div`

margin-left: 100px;

`
export const Label = styled.label`
display: flex;
font-size: 16px;
font-weight: bold;
margin-bottom: 8px;
`

export const Button = styled.button`
width: 360px;
font-size: 16px;
height: 30px;
font-weight: bold;
color: white;
background-color: steelblue;
border: 0;
border-radius: 3px;
`