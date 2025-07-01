import React, { useEffect, useState } from 'react'
import Title from '../layout/Title'
import { getArticleList } from '../utils/clients';
import { DOMNode, domToReact, Element, HTMLReactParserOptions } from 'html-react-parser';
import { Link } from 'react-router-dom';
import { Article } from '../interfaces/article';
import ArticleItems from '../features/article/ArticleItems';

const ArticlesPage: React.FC = () => {

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getArticleList();
      setArticles(data);
    };
    fetchBlogs();
  }, []);

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

  return (
    <>
      <Title pageName="Focus Tips" />
      <h1>Focus Tips</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id} className='not-icon'>
            <ArticleItems article={article} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ArticlesPage