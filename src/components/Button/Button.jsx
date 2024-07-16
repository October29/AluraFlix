
import styled from "styled-components"


const StyledButton = styled.button`
  width: 180px;
  height: 54px;
  font-family: sans-serif;
  font-weight: 900;
  color: ${props => props.$active ? '#2271D1' : '#FFFFFF' };
  border-color: ${props => props.$active ? '#2271D1' : '#FFFFFF' };
  border: 3px solid ;
  border-radius: 15px;
  background-color: transparent;
  cursor: pointer;
`;

const Button = ({text, onClick}) => {
  const handleNewVideoClick = () => {
    
    onNewVideoClick(); // Llama a la función para abrir el diálogo
  
};
  return(<>
    <StyledButton type='button' onClick={onClick}>{text}</StyledButton>    
    </>
  )
};

export default Button;