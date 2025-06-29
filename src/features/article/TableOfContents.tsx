// components/TableOfContents.t
import { TocItem } from '../../utils/generateToc';

type Props = {
  toc: TocItem[];
};

const TableOfContents: React.FC<Props> = ({ toc }) => {
  return (
    <nav className="my-8 p-4 bg-[#ededed]">
      <p className="text-xl font-bold mb-2">Table of Contents</p>
      <ul className="text-md space-y-1">
        {toc.map((item) => (
          <li key={item.id} className={item.level === 3 ? "ml-4" : "ml-0"}>
            <a href={`#${item.id}`} className="hover:underline font-semibold text-[#555]">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
