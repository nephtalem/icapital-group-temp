import { ComponentCbsPointCbsPoint } from "@/gql/graphql";

export const ServiceItem = ({
  point,
}: {
  point: ComponentCbsPointCbsPoint;
}) => {
  return (
    <div className="grid auto-rows-max gap-6 rounded-2xl p-10 shadow">
      <h3 className="text-2xl font-bold text-accent">{point.title}</h3>
      <p className="text-base font-medium text-text">{point.description}</p>
    </div>
  );
};
