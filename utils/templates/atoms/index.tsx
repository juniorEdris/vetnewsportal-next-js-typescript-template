import { DescriptionFace, HeadingFace } from "./atoms";

// Headings
export const Heading = ({ heading, customClass }: HeadingFace) => (
  <h1 className={`${customClass}`}>{heading}</h1>
);

export const SectionHeading = ({ heading, customClass }: HeadingFace) => (
  <h1
    className={`my-2 text-xl font-semibold capitalize border-l-4 border-primary pl-2 text-primary mb-4 ${customClass}`}
  >
    {heading}
  </h1>
);

// Paragraphs
export const Description = ({ content, customClass }: DescriptionFace) => (
  <p className={`${customClass}`}>{content}</p>
);
