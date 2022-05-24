import { useEffect, useState } from "react";
import styled, { StyledComponent } from "styled-components";

const DefaultStyled = styled.h1`
  color: black;
`;

interface Props {
  children: string;
  className: string;
  textStyled?: StyledComponent<"h1", any, any>;
}

/**
 * return a interval with children strings separate for spaces
 * , the component returned will change with each word
 * @param children string with words separate for spaces ' '
 * @param textStyled styled-components element
 * @returns JSX component
 */
const TextWrite = ({ children, className, textStyled }: Props) => {
  const wordsList = children.split(" ");
  const Text = textStyled || DefaultStyled;
  // console.log(wordsList);
  const [textShowed, setTextShowed] = useState({
    word: "",
    nextWordIndex: 0,
    nextLetterIndex: 1,
    senseToWriting: true,
  });

  useEffect(() => {
    const lastestLetterInWord =
      textShowed.nextLetterIndex !==
      wordsList[textShowed.nextWordIndex].length + 1;

    const textPortion = wordsList[textShowed.nextWordIndex].slice(
      0,
      textShowed.nextLetterIndex
    );

    const lastestWordInList = textShowed.nextWordIndex === wordsList.length - 1;

    if (lastestLetterInWord && textShowed.senseToWriting === true) {
      const writeInterval = setInterval(() => {
        setTextShowed({
          ...textShowed,
          word: textPortion,
          nextLetterIndex: ++textShowed.nextLetterIndex,
          senseToWriting: true,
        });
      }, 200);

      return () => clearInterval(writeInterval);
    } else if (textShowed.nextLetterIndex !== 0) {
      const deleteInterval = setInterval(() => {
        setTextShowed({
          ...textShowed,
          word: textShowed.nextLetterIndex === 1 ? "" : textPortion,
          nextLetterIndex: --textShowed.nextLetterIndex,
          senseToWriting: false,
        });
      }, 100);

      return () => clearInterval(deleteInterval);
    } else if (
      textShowed.nextLetterIndex === 0 &&
      textShowed.senseToWriting === false
    ) {
      setTimeout(() => {
        setTextShowed({
          ...textShowed,
          word: "",
          nextWordIndex: lastestWordInList ? 0 : ++textShowed.nextWordIndex,
          senseToWriting: true,
        });
      }, 1000);
    }
  }, [textShowed, wordsList]);

  return <Text className={className}>{textShowed.word}</Text>;
};

export default TextWrite;
