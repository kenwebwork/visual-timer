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
          max-width: 600px;

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
            font-size:30px;
          }
          h2, h3 {
            margin-top: 45px;
            margin-bottom: 18px;
            font-size: 26px;
          }
          h3 {
            font-size: 22px;
          }
          p{
            margin-bottom: 20px;
          }
          p {
            font-size: 1rem;
          }
          p:last-child {
            margin-bottom: .8rem;
          }
          ul, ol {
            margin-bottom: 30px;
          } 
          li {
            margin-bottom: 0.4rem;
          }
          li:not(.not-icon)::before {
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
          }
          img {
            border-radius: 0.375rem;
            margin-bottom: 35px;
          }
          blockquote {
            padding: 10px;
            margin-bottom: 1rem;
            background-color: #e3e8ee;
            border-left: solid 3px #9fa7ad;
          }
        }
      `}</style>
    </>
  );
};

export default ArticleLayout;