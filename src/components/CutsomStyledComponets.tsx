import styled from 'styled-components';

type testType = {
  fontSize?: string;
  fontWeight?: string;
  bg?: string;
};

export const Input = styled.input.attrs((props) => ({
  type: props.type || 'text',
  size: props.size || '1em',
}))`
font-size:${(props) => (props.fontSize ? props.fontSize : '1em')};
  text-align:${(props) => (props.textAlign ? props.textAlign : 'left')};
  border:  ${(props) => (props.border ? props.border : '0px')} solid;
  border-color:black;
  border-radius: 3px;
  /* here we use the dynamically computed prop */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
  color: ${(props) => (props.color ? props.color : 'black')};
`;

export const Label = styled.label<testType>`
  cursor: pointer;
  color: ${(props) => (props?.color ? props.color : 'black')};
  font-size: ${(props) => (props?.fontSize ? props.fontSize : '1em')};
`;

export const Button = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))`
  /* Adapt the colors based on primary prop */
  background: black;
  cursor: pointer;
  color: ${(props) => (props?.color ? props.color : 'white')};
  font-size: 1.3em;
  margin: 0.01em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 5px;
`;

export const Title = styled.label<testType>`
  color: ${(props) => (props?.color ? props.color : 'black')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.5em')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '700')};
  text-transform: capitalize;
`;

export const Error = styled.label`
  color: red;
  fontsize: 1.5em;
  font-weight: 500;
`;
