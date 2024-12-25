import CodeBox from "../../components/CodeBox";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Outside = styled.div`
  margin: 0 auto;
  max-width: 1400px;
`;

const Wrapper = styled.div`
  margin: 0 auto 0;
  padding: 15px;
  max-width: 1000px;
`;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    padding: 30px 0;
  }
`;

const Text = styled.p`
  line-height: 2;
  font-weight: 300;
  margin-bottom: 10px;
  font-size: 14px;

  @media screen and (min-width: 650px) {
    font-size: 16px;
  }
`;

const UnorderedList = styled.ul`
  list-style-position: inside;
  padding-left: 20px;
  margin: 10px 0;
  font-size: 14px;
  li {
    line-height: 2;
  }

@media screen and (min-width: 650px) {
  font-size: 16px;
}
`;

const OrderedList = styled.ol`
  list-style-position: inside;
  padding-left: 20px;
  margin: 10px 0;
  font-size: 14px;

  li {
    line-height: 2;
  }

@media screen and (min-width: 650px) {
  font-size: 16px;
}
`;

const PostTitle = styled.h1`
  z-index: 1;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  text-align: center;
  margin: 50px auto;
  font-size: 60px;

  background: -webkit-linear-gradient(#fff, #a5a5a5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 1024px) {
    font-size: 60px;
  }

  @media screen and (max-width: 650px) {
    font-size: 40px;
  }
`;

const Heading = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
  margin-top: 20px;
  @media screen and (min-width: 650px) {
    font-size: 22px;
  }
`;

const SubHeading = styled.h4`
  line-height: 2;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;

  @media screen and (min-width: 650px) {
    font-size: 16px;
  }
`;

const SubSubHeading = styled.h5`
  line-height: 1.8;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8px;

  @media screen and (min-width: 650px) {
    font-size: 14px;
  }
`;


const Post = () => {
  const [post, setPost] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const jsonFiles = require.context("./posts", false, /\.json$/);

    const findJsonWithIdOne = () => {
      const fileNames = jsonFiles.keys();

      const matchingFiles = fileNames.filter((fileName) => {
        const jsonData = jsonFiles(fileName);
        return jsonData.id === id;
      });

      setPost(jsonFiles(matchingFiles));
    };

    findJsonWithIdOne();
  }, [id]);

  useEffect(() => {
    if (post != null) {
      import(`./posts/${post.image}`)
        .then((image) => {
          setImageSrc(image.default);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [post]);

  if (post == null) return null;

  return (
    <Outside>
      <svg
        className="hero-stars"
        xmlns="http://www.w3.org/2000/svg"
        width="1680"
        height="730"
        viewBox="0 0 1680 730"
        fill="none"
        style={{zIndex: -1}}
      >
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.873077 0.487583 -0.78755 0.61625 429.154 175.316)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.994947 -0.100399 0.322552 0.946552 263.797 71.2188)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.994947 -0.100399 0.322552 0.946552 440 282.121)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.994947 -0.100399 0.322552 0.946552 410.404 338.926)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.994947 -0.100399 0.322552 0.946552 576 145.121)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.061383 -0.998114 0.99741 0.07192 961.715 604.32)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.322553 0.946552 -0.994947 0.100399 544.891 280.938)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.322553 0.946552 -0.994947 0.100399 1245.01 314.668)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.322553 0.946552 -0.994947 0.100399 989.111 172.809)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.322553 0.946552 -0.994947 0.100399 974.557 162.211)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.322553 0.946552 -0.994947 0.100399 861.078 260.352)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(-0.322553 -0.946552 0.994947 -0.100399 814.387 514.258)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(-0.322553 -0.946552 0.994947 -0.100399 995.66 552.828)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(-0.322553 -0.946552 0.994947 -0.100399 1154.39 545.258)"
          fill="white"
        ></circle>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 280.908 307.363)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 601.275 539.539)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 250.141 326.566)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1553.78 554.305)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 322.141 513.363)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1504.14 366.363)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1140.55 485.527)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 108.141 433.363)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1285.14 263.363)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1372.09 492.215)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 630.725 434.363)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 696.141 281.363)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1343.31 263.105)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 320.141 360.363)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1086.54 295.914)"
          fill="white"
        ></ellipse>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(-0.958827 0.28399 -0.613701 -0.789538 1308.95 468.746)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(-0.958827 0.28399 -0.613701 -0.789538 1327.66 447.223)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(-0.958827 0.28399 -0.613701 -0.789538 1469.98 192.406)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(-0.958827 0.28399 -0.613701 -0.789538 586.887 448.488)"
          fill="white"
        ></circle>
      </svg>

      <Wrapper>
        <PostTitle>{post.title}</PostTitle>
        <ImageBox>
          <img alt="thumbnail" src={imageSrc} />
        </ImageBox>
        {post.content.map(({ value, id, tag }) => {
          switch (tag) {
            case "Text":
              return <Text key={id}>{value}</Text>;
              case "Heading":
                return <Heading key={id}>{value}</Heading>;            
            case "SubHeading":
                return <SubHeading key={id}>{value}</SubHeading>;
            case "SubSubHeading":
                return <SubSubHeading key={id}>{value}</SubSubHeading>;
            case "CodeBox":
              return <CodeBox key={id}>{value}</CodeBox>;
            case "ol":
              return (
                <OrderedList key={id}>
                  {value.map(({ value, id }) => (
                    <li key={id}>{value}</li>
                  ))}
                </OrderedList>
              );
            case "ul":
              return (
                <UnorderedList key={id}>
                  {value.map(({ value, id }) => (
                    <li key={id}>{value}</li>
                  ))}
                </UnorderedList>
              );
            default:
              const Tag = tag;
              return <Tag key={id}>{value}</Tag>;
          }
        })}
      </Wrapper>
    </Outside>
  );
};

export default Post;
