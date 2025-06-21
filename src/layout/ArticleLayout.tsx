import React from "react";
import { Outlet } from "react-router-dom";

const ArticleLayout: React.FC = () => {
  return (
    <>
      <section className="p-4 rounded-md bg-slate-100">
        <Outlet />
      </section>
      <style>{`
        section {
          margin: auto;
          max-width: 384px;

          h1 {
            margin-bottom: 1rem;
          }
          h1, h2, h3 {
            font-weight: bold;
          }
          h1, h2, h3, p, li {
            line-height: 1.6;
            color: #555;
          }
          h1 {
            font-size: 1.6rem;
          }
          h2 {
            font-size: 1.3rem;
          }
          h3 {
            margin-right: 1rem;
            margin-bottom: .6rem;
            border-bottom: solid 1px #555;
            font-size: 1rem;
          }
          p, ul, img {
            margin-bottom: 1.5rem;
          }
          p:last-child {
            margin-bottom: .8rem;
          }
          li {
            margin-bottom: 0.4rem;
          }
          li::before {
            content: '';
            display: inline-block;
            width: 7px;
            height: 7px;
            border-top: solid 2px #555;
            border-right: solid 2px #555;
            margin-right: 10px;
            transform: rotate(45deg) translateY(-2px);
          }
          a {
            color: #00f;
            text-decoration: underline;
          }
          img {
            border-radius: 0.375rem;
          }
        }
      `}</style>
    </>
  );
};

export default ArticleLayout;