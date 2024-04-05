import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Section from "../../../../components/Section";
import Card from "../../../../components/Card";

const posts = [
  {
    title: "The Illusion of Value: NFTs are a Scam.",
    link: "/post/2",
    labels: ["blockchain"],
  },
  {
    title: "When is a Private Blockchain actually your Best Choice.",
    link: "/post/3",
    labels: ["blockchain"],
  },
  {
    title: "My Favorite Reads of 2023",
    link: "/post/1",
    labels: ["reading"],
  },
  {
    title: "SOLID Principles applied to Python Object Oriented Programming",
    link: "/post/4",
    labels: ["python"],
  },
];

const PostGrid = styled.div`
  margin-top: 10px;
  gap: 10px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 926px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Posts = () => {
  return (
    <Section>
      <Section.Heading>Posts</Section.Heading>
      <PostGrid>
        {posts.map((post, index) => (
          <Link to={post.link}>
            <Card key={index}>
            {post.labels.map((label, labelIndex) => (
              <Card.Label key={labelIndex}>{label}</Card.Label>
              ))}
 
              <Card.Title>{post.title}</Card.Title>
            </Card>
          </Link>
        ))}
      </PostGrid>
    </Section>
  );
};

export default Posts;
