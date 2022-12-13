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

export const DUMMY = [
  {
    id: 0,
    title: "Lorem ipsum dolor sit amet THIS IS ID 0",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    category: "Technology",
    img_url:
      "https://res.cloudinary.com/etf/image/upload/v1651674959/Elektrotehnicki_fakultet_abpipq_5294d8c983.jpg",
    text: DUMMY_TEXT,
    comments: [COMMENT],
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet THIS IS ID 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    category: "Technology",
    img_url:
      "https://upload.wikimedia.org/wikipedia/commons/4/48/Prirodno_matemati%C4%8Dki_fakultet%2C_Sarajevo.jpg",
    text: DUMMY_TEXT,
    comments: [COMMENT],
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet THIS IS ID 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    category: "Technology",
    img_url:
      "https://upload.wikimedia.org/wikipedia/commons/9/98/BBI_Shopping_and_Business_Center.jpg",
    text: DUMMY_TEXT,
    comments: [COMMENT],
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet THIS IS ID 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    category: "Sports",
    img_url:
      "https://cdn.nba.com/manage/2022/12/GettyImages-1245571186-scaled.jpg",
    text: DUMMY_TEXT,
    comments: [COMMENT],
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet THIS IS ID 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    category: "Sports",
    img_url:
      "https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju",
    text: DUMMY_TEXT,
    comments: [COMMENT],
  },
];

export const DUMMY_HEADER = {
  id: "head",
  title: "Lorem ipsum dolor sit amet THIS IS HEAD",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  text: DUMMY_TEXT,
  comments: [COMMENT],
};
