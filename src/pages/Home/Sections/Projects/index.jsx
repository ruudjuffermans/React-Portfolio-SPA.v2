import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Section from "../../../../components/Section";
import GithubIcon from "../../../../assets/github.svg"
import LinkIcon from "../../../../assets/link.svg"
import Card from "../../../../components/Card";

const projects = [
  {
    title: "Portfolio Website",
    github: "https://github.com/ruudjuffermans/React-Portfolio-SPA.v2",
    website: "https://ruudjuffermans.nl",
    keywords: ["React", "Node.js"],
  },
];

const ProjectGrid = styled.div`
  margin-top: 10px;
  gap: 10px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 926px) {
    gap: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Projects = () => {
  return (
    <Section>
      <Section.Heading>Projects</Section.Heading>
      <ProjectGrid>
        {projects.map((project, index) => (
          <Card key={index}>
            <Card.Actions>
              <a href={project.website}>
                <img src={LinkIcon} alt="" />
              </a>
              <Link to={project.github}>
                <img src={GithubIcon} alt="" />
              </Link>
            </Card.Actions>
            <Card.Title>{project.title}</Card.Title>
            <Card.KeyWords>
              {project.keywords.map((keyword, keywordIndex) => (
                <span key={keywordIndex}>{keyword}</span>
              ))}
            </Card.KeyWords>
          </Card>
        ))}
      </ProjectGrid>
    </Section>
  );
};

export default Projects;
