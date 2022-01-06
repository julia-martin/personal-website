import styled from 'styled-components/macro';

const Hint = styled.p`
  display: none;
  margin: 0 auto;
  text-align: center;

  @media (hover: none) {
    display: block;
  }
`;

export default Hint;