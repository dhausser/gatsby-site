/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core"
import styled from "@emotion/styled"

const GlobalStyles = () => (
  <Global styles={css`
    html,
    body {
      margin: 0;
      padding: 0;
    }
    * {
      margin-top: 0
    }
    body.light {
      --primary-color: #381696;
      --primary-text-color: #fff;
      --featured-bg: #493b8a;
      --featured-text: #fff;
      --secondary-color: #10072b;
      --background: #fff;
      --site-header: var(--background);
      --card-bg: #fff;
      --card-bdr: #eee;
      --card-shadow: #d5d5d5;
      --btn-bg: var(--background);
      --btn-bdr: #d3d6e7;
      --btn-text-color: #868892;
      --btn-hover-bg: var(--btn-bdr);
      --btn-hover-text-color: #00062b;
      --contact-bg: #f7f8fe;
      --contact-bdr: #d3d6e7;
      --input-bg: var(--background);
    }
    body.dark {
      --primary-color: #9984d5;
      --primary-text-color: #fff;
      --featured-bg: #66578d;
      --featured-text: #fff;
      --secondary-color: #66578d;
      --background: #0A041A;
      --text-color: rgba(255,255,255,0.88);
      --text-secondary-color: rgba(255,255,255,0.66);
      --site-header: var(--background);
      --card-bg: #181326;
      --card-bdr: #181326;
      --card-shadow: #020204;
      --btn-bg: var(--background);
      --btn-bdr: #d3d6e7;
      --btn-text-color: #868892;
      --btn-hover-bg: var(--btn-bdr);
      --btn-hover-text-color: #00062b;
      --contact-bg: var(--card-shadow);
      --contact-bdr: var(--card-bg);
      --input-bg: var(--card-bg);
    }
    /* System Fonts as used by Medium and WordPress */
    body {
      border-top: 10px solid var(--primary-color);
      background-color: var(--background);
      color: var(--text-color);
    }
    a {
      color: var(--primary-color);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  `} />
)

const Wrapper = styled("div")`
  padding: 32px;
  max-width: 1140px;
  margin: 0 auto;
  img {
    max-width: 100%;
  }
`;

const Navigation = styled("nav")`
  display: flex;
  align-items: center;
  font-weight: 300;
  a {
    color: #888;
    text-decoration: none;
    margin: 0 8px 0;
    &[aria-current] {
      color: var(--primary-color);
      font-weight: 700;
    }
    &:hover {
      color: var(--primary-color);
    }
    &:last-child {
      margin-right: 0;
    }
  }
`

const Header = styled("header")`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  background: var(--site-header);
  margin-bottom: 32px;
  align-items: center;
`;

const Title = styled("div")`
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 900;
  text-transform: uppercase;
`;

const Footer = styled("footer")`
  text-align: center;
  margin: 90px 0 16px;
  color: #666;
  a {
    font-weight: 700;
  }
`;

const Grid = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin-top: 32px;
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const TwoGrids = styled("div")`
  display: grid;
  grid-gap: 32px;
  &.-contact {
    .post-thumbnail {
      min-height: 240px !important;
    }
  }
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 64px;
  }
`

const Card = styled("article")`
  display: grid;
  background-color: var(--card-bg);
  border-radius: 9px;
  border: 1px solid var(--card-bdr);
  box-shadow: 0 0 30px var(--card-shadow);
  overflow: hidden;
  line-height: 1.5;
  &:hover .post-link {
    color: var(--primary-color);
  }
  > a img {
    display: block;
  }
  > header {
    padding: 24px;
  }
  > h2:first-child {
    margin: 0 0 0.5rem 0;
  }
  .post-title {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }
  .post-meta {
    font-weight: 100;
    margin-bottom: 0;
  }
  .post-link {
    color: var(--text-color);
    text-decoration: none;
  }
`

const PostMeta = styled("div")`
  font-size: 0.8rem;
  color: var(--text - secondary - color);
`

const PostThumbnail = styled("div")`
  text-align: center;
  min-height: 380px;
  background-color: var(--featured-bg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 18px;
  margin-bottom: 36px;
  color: var(--featured-text);
  display: grid;
  align-content: center;
  position: relative;
  padding: 18px;
  overflow: hidden;
  &:before {
    content: "";
    background: rgba(0,0,0,0.4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  > * {
    position: relative;
    z-index: 2;
  }
  .post-meta {
    color: rgba(255,255,255,0.8);
    margin-bottom: 0;
  }
`

const Post = styled("article")`
  padding: 0;
  background:var(--background);
  color: var(--text-color);
  line-height: 1.5;
  > .blog-post-content {
    max-width: 768px;
    margin: 0 auto;
  }
  > .blog-post-content *:last-child,
  > *:last-child {
    margin-bottom: 0;
  }
  .post-title {
    text-align: center;
    margin: 0 0 0.5rem;
    line-height: 1.3;
    font-size: 2rem;
  }
  .post-meta {
    margin-bottom: 32px;
    text-align: center;
  }
`

const PostTitle = styled("h1")`
  text-align: center;
  margin: 0 0 0.5rem;
  line-height: 1.3;
  font-size: 2rem;
`

const FormContainer = styled("form")`
  background-color: var(--contact-bg);
  padding: 32px;
  border: 1px solid var(--contact-bdr);
  border-radius: 9px;
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text-secondary-color);
  }
  input[type=text],
  input[type=email],
  textarea {
    appearance: none;
    border: 1px solid var(--card-shadow);
    color: var(--text-secondary-color);
    border-radius: 6px;
    line-height: 32px;
    padding: 6px 12px;
    width: calc(100% - 24px);
    margin-bottom: 1.5rem;
    background-color: var(--input-bg);
  }
  textarea {
    margin-bottom: 2rem;
    height: 150px;
  }
`

const Button = styled("div")`
  padding: 18px 27px;
  display: inline-block;
  background: var(--btn-bg);
  border: 1px solid var(--btn-bdr);
  border-radius: 9px;
  text-decoration: none;
  color: var(--btn-text-color);
  font-size: 16px;
  font-weight: 400;
  margin: 0 20px 0 0;
  transition: background-color .3s linear;
  &.-primary {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    color: var(--primary-text-color);
    &:hover {
      background-color: var(--secondary-color);
      color: var(--primary-text-color);
      text-decoration: none;
    }
  }
  &:hover {
    background-color: var(--btn-hover-bg);
    color: var(--btn-hover-text-color);
  }
`

const ThemeChanger = styled("input")`
  display: none;
  body.dark {
    .gg-moon {
      display: none;
    }
  }
  body.light {
    .gg-sun {
      display: none;
    }
  }
  .mode-container {
    width: 24px;
    height: 24px;
    margin-left: 20px;
  }
  .gg-sun {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 24px;
    height: 24px;
    background:
      linear-gradient(to bottom,
          currentColor 4px,transparent 0)
          no-repeat 5px -6px/2px 6px,
      linear-gradient(to bottom,
          currentColor 4px,transparent 0)
          no-repeat 5px 14px/2px 6px,
      linear-gradient(to bottom,
          currentColor 4px,transparent 0)
          no-repeat -8px 5px/6px 2px,
      linear-gradient(to bottom,
          currentColor 4px,transparent 0)
          no-repeat 14px 5px/6px 2px;
    border-radius: 100px;
    box-shadow: inset 0 0 0 2px;
    border: 6px solid transparent
  }
  .gg-sun::after,
  .gg-sun::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 24px;
    height: 2px;
    border-right: 4px solid;
    border-left: 4px solid;
    left: -6px;
    top: 5px
  }
  .gg-sun::before {
    transform: rotate(-45deg)
  }
  .gg-sun::after {
    transform: rotate(45deg)
  }
  .gg-moon,
  .gg-moon::after {
      display: block;
      box-sizing: border-box;
      border-radius: 50%
  }
  .gg-moon {
      overflow: hidden;
      position: relative;
      transform: rotate(-135deg) scale(var(--ggs,1));
      width: 20px;
      height: 20px;
      border: 2px solid;
      border-bottom-color: transparent
  }
  .gg-moon::after {
      content: "";
      position: absolute;
      width: 12px;
      height: 18px;
      border: 2px solid transparent;
      box-shadow: 0 0 0 2px;
      top: 8px;
      left: 2px
  }
`

export {
  GlobalStyles,
  Wrapper,
  Navigation,
  Header,
  Title,
  Footer,
  Grid,
  TwoGrids,
  Card,
  Post,
  PostMeta,
  PostThumbnail,
  PostTitle,
  FormContainer,
  Button,
  ThemeChanger
}