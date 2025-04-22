
import { styled } from '@mui/material/styles';

const StyledButton = () => {
    const StyledButtonComponent = styled("button")(() => ({
        backgroundColor: "transparent",
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%"
    }));

    return (
        <>
            <StyledButtonComponent>texto</StyledButtonComponent>
        </>
    );
};

export default StyledButton;
  