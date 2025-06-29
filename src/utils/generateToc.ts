export type TocItem = {
  id: string;
  text: string;
  level: number;
};

export function generateTocFromHtml(html: string): TocItem[] {
  const temp = document.createElement('div');
  temp.innerHTML = html;

  const headings = temp.querySelectorAll('h2, h3');
  const toc: TocItem[] = [];

  headings.forEach((el) => {
    const id = el.getAttribute('id');
    const text = el.textContent?.trim() || '';
    const level = el.tagName === 'H2' ? 2 : 3;

    if (id) {
      toc.push({ id, text, level });
    }
  });

  return toc;
}
