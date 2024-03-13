import styled from 'styled-components';

export const FilterInput = styled.input`
  display: block;
  font-family: 'Caveat', cursive;
  font-optical-sizing: auto;
  font-size: 1.5em;
  line-height: 1.5;
  font-weight: 400;
  padding-left: 0.25em;
  border: solid #00008b;
  border-width: 3px 3px 5px 5px;
  border-radius: 4% 95% 6% 95%/95% 4% 92% 5%;
  transform: rotate(1deg);
  background-color: transparent;
  background-clip: padding-box;
  transition: border-color 500ms ease-in-out;
  &:hover,
  &:focus {
    border-color: #1529bd;
  }
  &::placeholder {
    color: #b0b0fa;
    padding-left: 0.5em;
  }
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 1.3em;
  margin-bottom: 1.3em;
  font-family: 'Slackside One', cursive;
  font-size: 1.5em;
  color: #00008b;
`;
