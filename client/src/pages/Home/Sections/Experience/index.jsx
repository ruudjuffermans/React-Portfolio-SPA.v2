
import React from 'react'
import styled from "styled-components";
import Section from '../../../../components/Section';

const ExperienceTitle = styled.h2`
    font-size: 16px;
    margin-bottom: 5px;
    font-weight: 700;

`;


const ExperienceDate = styled.div`
    font-size: 12px;
    line-height: 1.5;
    width: 225px;
    padding-right: 5px;
    font-style: italic;
    @media screen and (min-width: 970px){
min-width: 200px;
}
    `;

const ExperienceItem = styled.div`
margin-bottom: 10px;

@media screen and (min-width: 970px){
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
}
`;

const TextBlock = styled.div`
    /* max-width: 1100px; */
    margin-bottom: -5px;
`;
const ExperienceTechnologies = styled.div`
gap: 7px;
display: flex;
align-items: center;
flex-wrap: wrap;
margin-top: 15px;
padding-bottom: 15px;
`;

const ExperienceTechnology = styled.span`
font-size: 12px;
color: ${props => props.theme.colors.primary};
border: 1px solid ${props => props.theme.colors.primary};
padding: 3px 6px;
border-radius: 2px;
background-color: #40cf8f0f;

@media screen and (min-width: 650px) {
    font-size: 13px;
    padding: 5px 6px;
}
`;

const Experience = () => {
  return (
    <Section>

    <Section.Heading>Experience</Section.Heading>
    <ExperienceItem>
      <ExperienceDate>Sep 2023 - Feb 2024</ExperienceDate>
      <div>

      <ExperienceTitle>Boval Assurantien B.V. - Data Engineer</ExperienceTitle>
      <TextBlock>
      <Section.Text>Worked on developing chatbot solutions to help digitize societies around the world, using AI technologies such as ChatGPT to enhance services in cities. I focused on creating user interfaces and backend APIs, utilizing a range of technologies with the goal of contributing to global digital transformation. To ensure our platforms were strong and worked well, I implemented comprehensive testing with Cypress. I also used Insomnia for effective API testing, which helped make our development process smoother and our products more reliable. Experienced in Scrum, I effectively managed tasks and collaborated with the team to meet our goals.</Section.Text>
      </TextBlock>
    <ExperienceTechnologies>
    <ExperienceTechnology>123</ExperienceTechnology>
    <ExperienceTechnology>123</ExperienceTechnology>
    <ExperienceTechnology>123</ExperienceTechnology>
    <ExperienceTechnology>123</ExperienceTechnology>
    <ExperienceTechnology>123</ExperienceTechnology>
    <ExperienceTechnology>123</ExperienceTechnology>
    </ExperienceTechnologies>
      </div>
    </ExperienceItem>
    <ExperienceItem>
    <ExperienceDate>Sep 2023 - Feb 2024</ExperienceDate>
    <div>

      <ExperienceTitle>Dealblock Labs - Blockchain Developer</ExperienceTitle>
      <TextBlock>
      <Section.Text>Worked on developing chatbot solutions to help digitize societies around the world, using AI technologies such as ChatGPT to enhance services in cities. I focused on creating user interfaces and backend APIs, utilizing a range of technologies with the goal of contributing to global digital transformation. To ensure our platforms were strong and worked well, I implemented comprehensive testing with Cypress. I also used Insomnia for effective API testing, which helped make our development process smoother and our products more reliable. Experienced in Scrum, I effectively managed tasks and collaborated with the team to meet our goals.</Section.Text>
      </TextBlock>
    <ExperienceTechnologies>
    <ExperienceTechnology>123</ExperienceTechnology>
    <ExperienceTechnology>123</ExperienceTechnology>
    <ExperienceTechnology>123</ExperienceTechnology>
    <ExperienceTechnology>123</ExperienceTechnology>
    <ExperienceTechnology>123</ExperienceTechnology>
    <ExperienceTechnology>123</ExperienceTechnology>
    </ExperienceTechnologies>
    </div>
    </ExperienceItem>
    </Section>
  )
}

export default Experience