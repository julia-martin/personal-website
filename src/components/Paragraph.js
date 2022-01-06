import styled from 'styled-components/macro';

const Paragraph = styled.div`
    line-height: 2rem;
    max-width: 60ch;
    margin: 20px ${props => props.centered ? "auto" : "0px"};
`;

export default Paragraph;