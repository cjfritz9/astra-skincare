export type ButtonProps = {
  text?: string;
  textColor?: string;
  bgColor?: string;
  size?: {
    h?: string;
    w?: string;
  };
  onClick: Function;
};

export type Gallery3x1Props = {
  heading?: string;
  padding?: {
    x?: string;
    y?: string;
  };
};

export type HeroProps = {
  bgColor: string;
  bgImage: string;
  heading?: string;
  showBtn: boolean;
}

export type ImageWithTextProps = {
  reverse?: boolean;
  image: string;
  heading: string;
  text: string;
};


export type RichTextProps = {
  heading?: string;
  text?: string;
  textColor?: string;
  bgColor?: string;
};
