import styled from 'styled-components';

export const ContactTitle = styled.h2`
  text-align: center;
  margin-top: 0;
  margin-bottom: 50px;
  font-family: 'Slackside One', cursive;
  font-weight: 400;
  font-size: 4em;
  color: #00008b;
`;

export const CotactList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  gap: 10px;
  padding: 3em;
  margin: 0 auto;
  border: solid #00008b;
  border-width: 3px 3px 5px 5px;
  border-radius: 4% 95% 6% 95%/95% 4% 92% 5%;
  transform: rotate(-1deg);
  width: 768px;
`;

export const ContactName = styled.p`
  font-family: 'Caveat', cursive;
  font-size: 2em;
  margin: 0;
  justify-items: start;
  font-weight: 700;
  color: #00008b;
`;
export const ContactNumber = styled.p`
  font-family: 'Caveat', cursive;
  font-size: 2.5em;
  line-height: 2;
  margin: 0 auto;
  font-weight: lighter;
  color: #001380;
`;

export const ContactButton = styled.button`
  display: block;
  font-family: 'Caveat', cursive;
  font-size: 1.5em;
  width: 110px;
  height: 45px;
  margin-top: 15px;
  margin-left: 40%;
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

export const ContactItem = styled.li`
  grid-template-columns: repeat(3, 33%);
  display: grid;
  grid-column-gap: 16px;
  justify-items: start;
  align-items: center;
  list-style: none;
  padding: 5px;
  width: 100%;

  border-bottom: 1px solid #00008b;
`;

export const EmptyField = styled.p`
  font-family: 'Caveat', cursive;
  font-optical-sizing: auto;
  margin-top: 260px;
  font-size: 4em;
  color: #00008b;
  border: none;
  text-align: center;
`;

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
