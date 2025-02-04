import React from "react";
import { Wrapper, BottomWrapper } from "./QuestionCard.styled";
import { AnswerObject } from "../App/App";
type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <Wrapper>
      <p>
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div className="">
        {answers.map((answer) => (
          <BottomWrapper
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}>
            <button
              className="btn btn-options"
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </BottomWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
