import styled from "styled-components";

const getType = ({ type }) => {
  switch (type)
  {
    case 'dark': return {
      background: "transparent", border: '1px solod white',
      color: 'white'
    };
    case 'light': return {
      background: "#ffff", border: '1px solod #E6E9EC',
      color: '#0d263b'
    };

    case "primary ": return { background: '#0061DF', border: 'none', color: 'white' };

    default: return { background: '#0061DF', border: 'none', color: 'white' }
  }
}

const Container = styled.button`
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 2px;
 min-width: 120px;
 font-size: 14px;
 cursor: pointer;
 height: ${({ height }) => height ? `$ {height}px` : `44px`};
 width: ${({ width }) => width ? `$ {width}px` : `130px`};
 :active {
  opacity:0.7;
 }
 ${getType}

 
`;

export { Container };
