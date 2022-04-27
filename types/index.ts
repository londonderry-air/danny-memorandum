import { BlancElement } from "./$element";

export type Post = {
  id: string;
  title: string;
  slug: string;
  elements: BlancElement[];
  created: Date;
  updated: Date;
  from: Date;
  to: Date | null;
  metaTitle: string | null;
  metaDescription: string | null;
  metaOgType: string | null;
  metaOgImageId: string | null;
  metaTwitterCardType: string | null;
  item: Item | null;
  category: Category | null;
};

export type Item = {
  id: string;
  name: string;
  created: Date;
  updated: Date;
  public: boolean;
  from: Date;
  to: Date | null;
  data: any;
  thumbnail: BlancFile | null;
};

export type Category = {
  id: string;
  name: string;
};

export type BlancFile = {
  id: string;
  name: string;
  url: string | null;
  size: number;
  width: number;
  height: number;
  created: Date;
  updated: Date;
};

export type Theme = {
  background: string;
  text: string;
  border: string;
  highlight: string;
  grayText: string;
  cell: string;
  cellText: string;
  cellGrayText: string;
};
