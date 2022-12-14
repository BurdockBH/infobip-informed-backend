const DATE = new Date();
const TIME =
  +" " +
  DATE.getDate() +
  "-" +
  (DATE.getMonth() + 1) +
  "-" +
  DATE.getFullYear() +
  "  " +
  DATE.toLocaleTimeString("en-UK");

export const categories = ["Technology", "Sports"];

// Using DUMMY_HEADER for now

export const COMMENT: Comment = {
  id: "0",
  content: "Some comment that is a definitely a legit comment",
  currentTime: TIME,
};
export interface Comment {
  id: string;
  content: string;
  currentTime: string;
}

const DUMMY_TEXT =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

export const DUMMY_HEADER = {
  id: "head",
  title: "Lorem ipsum dolor sit amet THIS IS HEAD",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  text: DUMMY_TEXT,
  comments: [COMMENT],
};
