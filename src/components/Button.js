import styled from 'styled-components'

export const ButtonContainer = styled.button`
font-size : 1.5rem;
background : transparent;
border : 0.05rem solid #ffffff ;
color :  white;
border-radius : 1rem;
padding : 0.2rem 0.5rem;
margin : 0.2rem 0.5rem 0.2rem 0;
cursor : pointer;
transition : all 0.5sec ease-in-out;
&:hover {
    background : #2a2a72;
    color :  yellow;
}
&:focus {
    outline : none;
}
`;