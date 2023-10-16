import styled  from "styled-components";
const Button=styled.div`
    width:fit-content;
    height:24px;
    display: inline-block;
    border: 2px solid ${({borderColorP})=>borderColorP?borderColorP:borderColorP} ;
    background-color:${({buttonColorP})=>buttonColorP?buttonColorP:"transparent"} ;
    color:${({ColorP})=>ColorP?ColorP:"#FFFFFF"};
    text-align:center;
    border-radius:3px;
    padding:3px 15px;
    >h5{
        line-height:22px;
        font-size:15px;
        white-space:nowrap;
    }
    >h5 .icons{
        line-height:0px
    }
    &:hover{
        background-color:#FFFFFF ;
        color: #181818;
        cursor:pointer
    }
   
    }

`

export default Button;

/* @media (max-width:768px) {
        width:100px;
        height:28px;
        border-radius:0px;
        h5{
            line-height:30px;
            font-size:14px;
        }
    }
    @media (max-width:480px) {
        width:100px;
        height:30px;
        border-radius:0px;
        h5{
            line-height:29px;
            font-size:13px;
        } */