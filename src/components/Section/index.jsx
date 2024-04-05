import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 40px;

  @media screen and (min-width: 650px) {
    margin-bottom: 50px;
  }
`;

const Text = styled.p`
  line-height: 1.5;
  font-size: 14px;
  font-weight: 300;

  @media screen and (min-width: 650px) {
    font-size: 16px;
  }
`;

const Heading = styled.h1`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 5px;

  @media screen and (min-width: 650px) {
    font-size: 24px;
  }
`;

const Section = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const SectionText = ({ children }) => {
  return <Text>{children}</Text>;
};

const SectionHeading = ({ children }) => {
  return <Heading>{children}</Heading>;
};

Section.Heading = SectionHeading;
Section.Text = SectionText;

export default Section;
