import styled from "styled-components";

export const HomeContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:100vh;
`

export const Content = styled.div`
width:100vw;
display:flex;
align-items:center;
justify-content: center;
`
export const Title = styled.h1`
    text-align:center;
    font-size: 3rem;
    font-family: sans-serif;
    color:#333;
`
export const Paragraph = styled.p`
    text-align:center;
    font-size: 1rem;
    font-family: sans-serif;
    color:#333;
`

export const Input = styled.input`
border:1px solid #ddd;
height: 1.5rem;
padding:0 .5rem;
border-radius:.25rem 0 0 .25rem;

&:focus,
&:active{
    outline:none;
    box-shadow:none;
}
`;

export const Button = styled.button`
border:1px solid #000;
background:#000;
color:#fff;
height: 1.5rem;
border-radius:0 .25rem .25rem 0;

&:focus,
&:active{
    outline:none;
    box-shadow:none;
}
`
export const ErrorMsg = styled.span`
    display:block;
    font-size:0.65rem;
    font-weight:600;
    color:red;
    margin-top: 1rem
`