import { Outlet } from "react-router-dom";

function ArticleLayout(){
  return (
    <>
      <section className="p-4 rounded-md bg-slate-100">
        <Outlet />
      </section>
      <style jsx>{`
        section {
          h1 {
            margin-bottom: 1rem;
          }
          h1, h2 {
            font-weight: bold;
          }
          h1, h2, p, li {
            line-height: 1.6;
            color: #555;
          }
          h1 {
            font-size: 1.6rem;
          }
          h2 {
            font-size: 1.3rem;
          }
          p, ul {
            margin-bottom: 1.5rem;
          }
          p:last-child {
            margin-bottom: .8rem;
          }
          li::before {
            content: '- ';
            margin-left: 1rem;
          }
          a {
            color: #00f;
            text-decoration: underline;
          }
        }
      `}</style>
    </>
  );
};

export default ArticleLayout;