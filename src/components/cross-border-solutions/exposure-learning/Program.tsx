import { ComponentExposureProgramExposureProgram } from "@/gql/graphql";
import { CheckItem } from "./CheckItem";

export const Program = ({
  program,
}: {
  program: ComponentExposureProgramExposureProgram;
}) => {
  return (
    <div className="grid gap-8 self-start rounded-2xl bg-white p-10 shadow">
      <h3 className="text-2xl font-bold text-accent">{program.title}</h3>
      <div className="grid gap-6">
        {program.points?.map((point, index) => (
          <CheckItem key={index} text={`${point?.content}`} />
        ))}
      </div>
    </div>
  );
};
