import React from "react";
import Title from "../layout/Title";
import parse, { DOMNode, domToReact, Element, HTMLReactParserOptions } from 'html-react-parser';
import { useSingleArticle } from "../utils/useSingleArticle";
import { Link } from "react-router-dom";
import LoadingCircle from "./LoadingCircle";

interface SinglePageProps {
  id: string;
  title: string;
}

const SinglePage: React.FC<SinglePageProps> = ({ id, title }) => {
  const { article, loading } = useSingleArticle(id);

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (
        domNode instanceof Element &&
        domNode.name === 'a' &&
        domNode.attribs &&
        domNode.attribs.href &&
        domNode.attribs.href.startsWith('/')
      ) {
        return (
          <Link to={domNode.attribs.href}>
            {domToReact(domNode.children as DOMNode[], options)}
          </Link>
        );
      }
    },
  };

  if (loading) {return <LoadingCircle />}

  return (
    <>
      <Title pageName={title} />
      <h1>{article?.title}</h1>
      <section>{article?.body ? parse(article.body, options) : <p>Preparing...</p>}</section>
    </>
  );
}

export default SinglePage