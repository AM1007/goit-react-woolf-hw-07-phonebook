import styled from 'styled-components';

export const FormWrapper = styled.div`
  background-color: transparent;
`;

export const ContactForm = styled.form`
  margin: 0 auto;
  padding: 2em;
  border: solid #00008b;
  border-width: 3px 3px 5px 5px;
  border-radius: 4% 95% 6% 95%/95% 4% 92% 5%;
  transform: rotate(-1deg);
  width: 485px;
`;

export const FormInput = styled.input`
  display: block;
  font-family: 'Caveat', cursive;
  font-optical-sizing: auto;
  font-size: 1.5em;
  line-height: 1.5;
  font-weight: 400;
  padding-left: 0.5em;
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

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1em;
  font-family: 'Slackside One', cursive;
  font-size: 1.5em;
  color: #00008b;
  margin-bottom: 1.3em;
`;

export const FormTitle = styled.h2`
  text-align: center;
  margin-top: 0;
  margin-bottom: 50px;
  font-family: 'Slackside One', cursive;
  font-weight: 400;
  font-size: 4em;
  color: #00008b;
`;

export const FormButton = styled.button`
  padding: 8px 16px;
  font-family: 'Caveat', cursive;
  font-size: 1.5em;
  color: #fff;
  border: solid #00008b;
  border-width: 3px 3px 5px 5px;
  border-radius: 4% 95% 6% 95%/95% 4% 92% 5%;
  transform: rotate(1deg);
  background-color: #00008b;
  cursor: pointer;
  transition: border-color 500ms ease-in-out, background-color 500ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #1529bd;
    border-color: #1529bd;
  }
`;
