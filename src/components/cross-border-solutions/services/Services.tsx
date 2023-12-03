import { CrossBorderSolutionsEntity } from "@/gql/graphql";
import { ServiceItem } from "./ServiceItem";

export const Services = ({ cbs }: { cbs: CrossBorderSolutionsEntity }) => {
  return (
    <div className="my-[10rem] mx-[2.5rem] grid grid-cols-2 gap-20">
      {cbs.attributes?.CBSPoint?.map((point, index) => (
        <ServiceItem key={index} point={point!} />
      ))}
    </div>
  );
};
