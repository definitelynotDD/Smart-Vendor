import {Box,Button,Typography,styled} from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';

const Wrapper=styled(Box)`
display:flex;
margin:0px 3% 0px auto;
font-size:16px;
align-items:center;
&>button,&>p,&>div{
margin-right:40px;}`;

const Container=styled(Box)`
display:flex;`;

const LoginButton=styled(Button)`
 color:black;
 padding: 5px 40px;
 box-shadow:none;
 font-weight:600;
 background:#FFFFFF;
 height:32px;
 border-radius:18px;
 text-transform:none ;`;

const CustomButton=()=>{
    return(
        <Wrapper>
            <LoginButton variant="contained">login</LoginButton>
            <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
            <Typography style={{marginTop:3}}>More</Typography>
            <Container>
                <ShoppingCart/>
                <Typography>Cart</Typography>
            </Container>
        </Wrapper>
    )
}
export default CustomButton