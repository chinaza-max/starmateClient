import styled  from "styled-components";
const Button=styled.div`
    width:${({widthP})=>widthP?widthP:"transparent"}px;
    height:${({heightP})=>heightP?heightP:"transparent"}px;
    background-color:#FFFFFF;
    color:black;
    border-radius: 0px 15px;
    font-size:16px;
    line-height:28px;
    text-align:center;
    &:hover{
        cursor:pointer
    }
    @media (max-width:480px) {
        font-size:13px;
    }
`

export default Button;