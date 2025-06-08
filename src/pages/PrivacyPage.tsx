import React from "react";
import Title from "../layout/Title";
import parse, { DOMNode, domToReact, Element, HTMLReactParserOptions } from 'html-react-parser';
import { useSingleArticle } from "../utils/useSingleArticle";
import { Link } from "react-router-dom";

const PrivacyPage: React.FC = () => {
  const { article, loading } = useSingleArticle("policy");

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

  if (loading) {return <p>Preparing...</p>}
  return (
    <>
    <Title pageName='Privacy Policy' />
    <h1>{article?.title}</h1>
    <div>{article?.body ? parse(article.body, options) : <p>Preparing...</p>}</div>
    </>
  );
};

export default PrivacyPage;