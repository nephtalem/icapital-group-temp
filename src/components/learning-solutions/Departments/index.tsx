"use client";
import CheckIcon from "@/assets/icons/check.alt.svg";
import { LearningSolutionsEntity } from "@/gql/graphql";
import {
  StyledCheckItem,
  StyledCheckList,
  StyledDepartment,
  StyledDepartments,
} from "./styles";
import { useState } from "react";
export const Departments = ({ ls }: { ls: LearningSolutionsEntity }) => {
  return (
    <StyledDepartments>
      {ls.attributes?.solution?.map((solution) => (
        <Department
          key={solution?.id}
          title={`${solution?.title}`}
          items={solution!.SolutionPoint!.map((point) => point?.point ?? "")}
        />
      ))}
    </StyledDepartments>
  );
};

const Department = ({ title, items }: { title: string; items: string[] }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <StyledDepartment>
      <h3>{title}</h3>
      <StyledCheckList>
        {items.slice(0, showMore ? undefined : 5).map((item, index) => (
          <CheckItem key={item} text={item} />
        ))}
      </StyledCheckList>
      {items.length > 5 ? (
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      ) : (
        <></>
      )}
    </StyledDepartment>
  );
};

const CheckItem = ({ text }: { text: string }) => {
  return (
    <StyledCheckItem>
      <CheckIcon />
      <p>{text}</p>
    </StyledCheckItem>
  );
};
