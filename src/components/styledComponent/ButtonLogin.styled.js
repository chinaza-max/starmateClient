import styled  from "styled-components";
const Button=styled.div`
    width:96px;
    height:30px;
    display: inline-block;
    border: 1px solid #FFFFFF;
    background-color:${({buttonColorp})=>buttonColorp?"#FFFFFF":"transparent"} ;
    color:${({buttonColorp})=>buttonColorp?"#181818":"#FFFFFF"};
    text-align:center;
    border-radius:10px;
    >h5{
        line-height:29px;
        font-size:16px;
    }
    &:hover{
        background-color:#FFFFFF ;
        color: #181818;
        cursor:pointer
    }
    @media (max-width:768px) {
        width:80px;
        height:28px;
        border-radius:0px;
        h5{
            line-height:30px;
            font-size:14px;
        }
    }
    @media (max-width:480px) {
        width:70px;
        height:22px;
        border-radius:0px;
        h5{
            line-height:20px;
            font-size:13px;
        }
    }

`

export default Button;