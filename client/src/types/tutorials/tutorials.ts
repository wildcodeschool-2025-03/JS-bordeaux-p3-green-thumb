export type Tutorials = {
  id: number;
  title: string;
  url: string;
  description: string;
  author: string;
  duration: number;
  category: string;
};

export type PreviewTutorialProps = {
  title: string;
  tutorials: Tutorials[];
  onSelect: (Tutorial: Tutorials) => void;
};

export type TutorialsVideoProps = {
  tutorial: Tutorials;
  onClose: () => void;
};
