import React from "react";
import About from "./Sections/About";
import Hero from "./Sections/Hero";
import Skills from "./Sections/Skills";

import styled from "styled-components";
import Experience from "./Sections/Experience";
import Projects from "./Sections/Projects";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.black};
`;

const Main = styled.div`
  margin: -0px auto 0;
  /* max-width: 1300px; */
  padding: 15px;

  @media screen and (min-width: 1024px) {
    margin-top: -100px;
  }

  @media screen and (min-width: 680px) {
    margin-top: -60px;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <Main>
        <About />
        <Skills />
        <Experience />
        <Projects />
      </Main>
    </Wrapper>
  );
};

export default Home;
