import React, { useState } from 'react'
import { Article } from '../../interfaces/article'
import { Link } from 'react-router-dom'
import { htmlToPlainText } from '../../utils/htmlToPlainText';
import LoadingCircle from '../../layout/LoadingCircle'

interface ArtilceItemsProps {
  article: Article;
}

const ArticleItems:React.FC<ArtilceItemsProps> = ({ article }) => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const sliceIndex: number = 150;
  const getSnippet = (html: string | undefined) => {
    const plainText = html ? htmlToPlainText(html) : "preparing ...";
    return plainText.length > sliceIndex ? plainText.slice(0, sliceIndex) + ' ...' : plainText;
  }

  return (
    <Link to={`/focus-tips/${article.id}`} className='block mb-[50px] text-[#555] cursor-pointer'>
      <div className='max-w-[480px] mx-auto mb-5 bg-gray-300 rounded-md'>
        {!isImageLoaded && <LoadingCircle />}
        {article.thumbnail && (
          <img
            src={article.thumbnail?.url}
            alt={article.title}
            className='mb-0'
            loading="lazy"
            onLoad={() => setIsImageLoaded(true)}
            onError={() => setIsImageLoaded(true)}
          />
        )}
      </div>
      <div className='text-xl font-bold'>{article.title}</div>
      {getSnippet(article.body)}
    </Link>
  )
}

export default ArticleItems