import React, { useEffect, useState } from 'react'
import Title from '../layout/Title'
import { getArticleList } from '../utils/clients';
import { DOMNode, domToReact, Element, HTMLReactParserOptions } from 'html-react-parser';
import { Link } from 'react-router-dom';
import { htmlToPlainText } from '../utils/htmlToPlainText';
import { Article } from '../interfaces/article';

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

  const getSnippet = (html: string) => {
    const plainText = htmlToPlainText(html);
    return plainText.length > 100 ? plainText.slice(0, 100) + ' ...' : plainText;
  }

  return (
    <>
      <Title pageName="Focus Tips" />
      <h1>Focus Tips</h1>
      <div>
        {articles.map((article) => (
          <Link to={`/focus-tips/${article.id}`} className='block mb-[50px] text-[#555] cursor-pointer'>
            <div className='max-w-[480px] mx-auto mb-5 bg-gray-300 rounded-md'>
              <img src={article.thumbnail?.url} alt={article.title} className='mb-0' loading="lazy" />
            </div>
            <div className='text-xl font-bold'>{article.title}</div>
            {getSnippet(article.body)}
          </Link>
        ))}
      </div>
    </>
  )
}

export default ArticlesPage