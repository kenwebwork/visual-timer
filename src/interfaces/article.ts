export interface Article {
  id: string;
  title: string;
  lead: string;
  body: string;
  thumbnail?: {
    url: string;
    height: number;
    width: number;
  };
}