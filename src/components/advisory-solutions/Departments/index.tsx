"use client";
import Image from "next/image";
import {
  StyledCheckItem,
  StyledCheckList,
  StyledDepartment,
  StyledDepartmentImage,
  StyledDepartments,
} from "./styles";
import CheckIcon from "@/assets/icons/check.alt.svg";
import { AdvisorySolutionsEntity } from "@/gql/graphql";
export const Departments = ({ as }: { as: AdvisorySolutionsEntity }) => {
  return (
    <StyledDepartments>
      {as.attributes?.solution?.map((solution) => (
        <Department
          key={solution?.id}
          image={`${process.env.NEXT_PUBLIC_DATA}${solution?.icon?.data?.attributes?.url}`}
          title={`${solution?.title}`}
          items={solution!.SolutionPoint!.map((point) => point?.point ?? "")}
        />
      ))}
    </StyledDepartments>
  );
};

const Department = ({
  image,
  title,
  items,
}: {
  image: string;
  title: string;
  items: string[];
}) => {
  return (
    <StyledDepartment>
      <StyledDepartmentImage>
        <Image src={image} alt={""} fill={true} />
      </StyledDepartmentImage>
      <h3>{title}</h3>
      <StyledCheckList>
        {items.map((item, index) => (
          <CheckItem key={item} text={item} />
        ))}
      </StyledCheckList>
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
