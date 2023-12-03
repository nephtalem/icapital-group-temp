import { MainText } from "@/components/shared/MainText";
import { ExposureLearningProgramsEntity } from "@/gql/graphql";
import { Program } from "./Program";

export const Programs = ({
  programs,
}: {
  programs: ExposureLearningProgramsEntity;
}) => {
  return (
    <div className="mx-[2.5rem] my-[10rem] grid gap-20">
      <MainText title={"Our Exposure Learning Programs"} />
      <div className="grid w-full grid-cols-2 content-start items-start justify-center gap-14 justify-self-center">
        <div className="grid gap-14">
          {programs.attributes?.ExposureProgram?.filter(
            (program, index) => index % 2 === 0,
          )?.map((program, index) => (
            <Program key={index} program={program!} />
          ))}
        </div>
        <div className="grid gap-14">
          {programs.attributes?.ExposureProgram?.filter(
            (program, index) => index % 2 !== 0,
          )?.map((program, index) => (
            <Program key={index} program={program!} />
          ))}
        </div>
      </div>
    </div>
  );
};
