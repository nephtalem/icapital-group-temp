import Image from "next/image";
import {
  StyledCheckItem,
  StyledCheckList,
  StyledDepartment,
  StyledDepartmentImage,
  StyledDepartments,
} from "./styles";
import CheckIcon from "@/assets/icons/check.alt.svg";
export const Departments = () => {
  return (
    <StyledDepartments>
      <Department
        image={"/images/ot.png"}
        title={"Organizational Transformation"}
        items={[
          "Corporate Strategy Design",
          "Organizational Structure",
          "Organizational Culture Design",
          "Salary & Benefits",
          "Job Family",
        ]}
      />
      <Department
        image={"/images/hrt.png"}
        title={"Human Resource Transformation"}
        items={[
          "S -OJT Implementation",
          "HR Skill Audit",
          "Job Analysis (Using DACUM Technique)",
          "Corporate Policies & Manuals Design",
          "Knowledge Management System Design",
        ]}
      />
      <Department
        image={"/images/wfs.png"}
        title={"Work Force Solution"}
        items={[
          "Corporate Strategy Design",
          "Organizational Structure",
          "Organizational Culture Design",
          "Salary & Benefits",
          "Job Family",
        ]}
      />
      <Department
        image={"/images/de.png"}
        title={"Data and Evidence"}
        items={[
          "Corporate Strategy Design",
          "Organizational Structure",
          "Organizational Culture Design",
          "Salary & Benefits",
          "Job Family",
        ]}
      />
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
