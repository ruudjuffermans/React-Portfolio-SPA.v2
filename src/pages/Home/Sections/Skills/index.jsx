import React from "react";
import Section from "../../../../components/Section";

import styled from "styled-components";

const SkillsList = styled.div`
  margin-top: 10px;
  gap: 6px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 650px) {
    gap: 8px;
  }
`;

const Skill = styled.span`
  padding: 5px;
  border-radius: 2px;
  border: 1px solid #333333;
  background-color: #232323;
  box-shadow: 0 2px 3px #0000003d;
  font-size: 12px;

  @media screen and (min-width: 650px) {
    padding: 6px;
    font-size: 14px;
  }
`;

const skillNames = [
  "SQL",
  "Python",
  "Data Warehousing",
  "Apache Hadoop",
  "Apache Spark",
  "Data Modeling",
  "Extract, Transform, Load",
  "Data Pipeline Design",
  "Cloud Computing Services",
  "NoSQL Databases",
  "Stream Processing",
  "Machine Learning Basics",
  "Big Data",
  "Data Governance",
  "Performance and Optimization",
];

const Skills = () => {
  return (
    <Section>
      <Section.Heading>Skills</Section.Heading>
      <SkillsList>
        {skillNames.map((skill) => (
          <Skill key={skill}>{skill}</Skill>
        ))}
      </SkillsList>
    </Section>
  );
};

export default Skills;
