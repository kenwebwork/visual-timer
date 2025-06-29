import React, { useEffect, useState } from "react";
import Title from "../layout/Title";
import parse, { DOMNode, domToReact, Element, HTMLReactParserOptions } from 'html-react-parser';
import { Link, useParams } from "react-router-dom";
import LoadingCircle from "./LoadingCircle";
import { Article } from "../interfaces/article";
import { client } from "../utils/clients";
import { generateTocFromHtml, TocItem } from "../utils/generateToc";
import TableOfContents from "../features/article/TableOfContents";


const SinglePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [toc, setToc] = useState<TocItem[]>([]);

  useEffect(() => {
    const fetchArticle = async () => {
      const article = await client.get({ endpoint: 'articles', contentId: id });
      setArticle(article);
      setToc(generateTocFromHtml(article.body))
    };
    fetchArticle();
  }, [id]);

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

  if (!article) {return <LoadingCircle />}

  return (
    <>
      <Title pageName={article.title} />
      <h1>{article.title}</h1>
      <img src={article.thumbnail?.url} alt={article.title} />
      <div>{article.lead ? parse(article.lead, options) : <p>Preparing...</p>}</div>
      <TableOfContents toc={toc} />
      <article>{article.body ? parse(article.body, options) : <p>Preparing...</p>}</article>
    </>
  );
}

export default SinglePage