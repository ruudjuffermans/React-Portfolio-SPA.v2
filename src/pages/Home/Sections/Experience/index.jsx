
import React from 'react'
import styled from "styled-components";
import Section from '../../../../components/Section';

const ExperienceTitle = styled.h2`
    font-size: 17px;
    margin-bottom: 5px;
    font-weight: 500;

`;


const ExperienceDate = styled.div`
    font-size: 12px;
    line-height: 1.5;
    width: 225px;
    padding-right: 5px;
    font-style: italic;
    margin-bottom: 5px;
    @media screen and (min-width: 970px){
min-width: 200px;
}
    `;

const ExperienceItem = styled.div`
margin-bottom: 10px;
margin-top: 10px;

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

const experiences = [
  {
    "date": "Mar 2024 - Present",
    "title": "Nederlands Lucht- en Ruimtevaartcentrum",
    "description": "Contributing to multiple cutting-edge projects at the intersection of cybersecurity, IoT, and blockchain technologies. Key responsibilities include designing and developing robust data systems tailored for advanced use cases, with a focus on secure and scalable solutions. Collaborated closely with multidisciplinary teams to deliver impactful digital tools and simulations.",
    "technologies": ["Digital Product Passports", "Databases", "Hyperledger Fabric", "Full-Stack Applications", "Digital Twin Simulations"]
  },
  {
    date: "Sep 2019 - Dec 2023",
    title: "Dealblock Labs - Blockchain Developer",
    description: "Involved in the development and deployment of blockchain solutions. My responsibilities included smart contract development, blockchain architecture design, and integration of blockchain with existing systems. Utilized Solidity for smart contracts and worked with Ethereum and Binance Smart Chain networks. Played a key role in developing decentralized applications (DApps) that offer transparency and security.",
    technologies: ["Blockchain", "Solidity", "Ethereum", "Binance Smart Chain", "DApps"]
  },
  {
    date: "Sep 2023 - Feb 2024",
    title: "Boval Assurantien B.V. - Data Engineer",
    description: "Worked on developing chatbot solutions to help digitize societies around the world, using AI technologies such as ChatGPT to enhance services in cities. I focused on creating user interfaces and backend APIs, utilizing a range of technologies with the goal of contributing to global digital transformation. To ensure our platforms were strong and worked well, I implemented comprehensive testing with Cypress. I also used Insomnia for effective API testing, which helped make our development process smoother and our products more reliable. Experienced in Scrum, I effectively managed tasks and collaborated with the team to meet our goals.",
    technologies: ["AI", "ChatGPT", "Cypress", "Insomnia", "Scrum"]
  }
];

const Experience = () => {
  return (
    <Section>
      <Section.Heading>Experience</Section.Heading>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index}>
          <ExperienceDate>{exp.date}</ExperienceDate>
          <div>
            <ExperienceTitle>{exp.title}</ExperienceTitle>
            <TextBlock>
              <Section.Text>{exp.description}</Section.Text>
            </TextBlock>
            <ExperienceTechnologies>
              {exp.technologies.map((tech, techIndex) => (
                <ExperienceTechnology key={techIndex}>{tech}</ExperienceTechnology>
              ))}
            </ExperienceTechnologies>
          </div>
        </ExperienceItem>
      ))}
    </Section>
  );
}

export default Experience