import Image from "next/image";
import {
  StyledCategory,
  StyledDocumentsDetail,
  StyledFile,
  StyledFileIcon,
  StyledTitle,
} from "./styles";
import { ActionButton } from "@/components/shared/Button";
import DownloadIcon from "@/assets/icons/download.svg";
export const DocumentsDetail = () => {
  return (
    <StyledDocumentsDetail>
      <StyledTitle>
        <h1>The 5th Edition East Africa Finance Summit</h1>
        <h3>Documents</h3>
        <span />
      </StyledTitle>
      <Category />
      <Category />
      <Category />
    </StyledDocumentsDetail>
  );
};

const Category = () => {
  return (
    <StyledCategory>
      <h3>Policy, Regulation and Governance for a dynamic Finance Sector</h3>
      <p>12 Files</p>
      <File />
      <File />
      <File />
    </StyledCategory>
  );
};

const File = () => {
  return (
    <StyledFile>
      <StyledFileIcon>
        <Image src={"/images/powerpoint.png"} alt={""} fill={true} />
      </StyledFileIcon>
      <p>
        Global Trends in the Finance Sector_Adrak Mustafina Power Point
        Presentation
      </p>
      <ActionButton
        label={"Download"}
        color={"#F07709"}
        border={"#9F4E03"}
        icon={<DownloadIcon />}
        onClick={(): void => {}}
      />
    </StyledFile>
  );
};
