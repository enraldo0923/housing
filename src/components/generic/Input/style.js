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

const Container = styled.input`
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 4px;
 min-width: 120px;
 border: 1px solid black;
 font-size: ${({ fontSize }) => fontSize ? `$ fontSize}px` : `14px`};
 height: ${({ height }) => height ? `$ {height}px` : `44px`};
 outline: none;
 width: ${({ width }) => width ? `$ {width}px` : `130px`};
 
 /* ${getType} */

 
`;

export { Container };
