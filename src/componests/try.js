import styled from "styled-components"

const Button = () => {
    const Inputwrapper = styled.div`
    display: flex;
    justiy-content:center;
    background-color:red;
    `;
    const Inputs = styled.input`
    padding:8px 20px;
    border:none;
    background-color:red;
    `;
    const Buttons = styled.button`
    background-color:green;
    border:none;
    `;
    return (
        <>
            <Inputwrapper>
                <Inputs type="text" placeholder="Write here...." />
                    <Buttons>Click me</Buttons>
            </Inputwrapper>

        </>
    );
}
export default Button