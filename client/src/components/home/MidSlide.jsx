import { Box,styled } from '@mui/material';
import logImage from '../../images/spaceship.jpg';
 import Slide from  './Slide';
 
 const Component = styled(Box)`
     display: flex;
 `
 const LeftComponent = styled(Box)(({ theme}) => ({
     width: '83%',
     [theme.breakpoints.down('md')]: {
         width: '100%'
     }
 }))
 
 const RightComponent = styled(Box)(({ theme}) => ({
     marginTop: 10,
     background: '#FFFFFF',
     width: '17%',
     marginLeft: 10,
     padding: 5,
     textAlign: 'center',
     [theme.breakpoints.down('md')]: {
         display: 'none'
     }
 }));
 
 
 const MidSlide = ({ products, title, timer}) => {
     const adURL = logImage;
 
     return (
         <Component>
             <LeftComponent>
                 <Slide 
                     products={products} 
                     title={title} 
                     timer={timer}
                 />
             </LeftComponent>
             <RightComponent>
                 <img src={adURL} alt="Advertisement" style={{width: 217}}/>
             </RightComponent>
         </Component>
     )
 }
 
 export default MidSlide;