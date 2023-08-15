import CountUp from "react-countup";
import { StyledWork, StyledWorkItem, StyledWorkList } from "./styles";
import VisibilitySensor from "react-visibility-sensor";

export const Work = () => {
  return (
    <StyledWork>
      <h2>We Have Worked With</h2>
      <StyledWorkList>
        <WorkItem value={6} label={"Sectors"} />
        <WorkItem value={20} label={"International Partners"} />
        <WorkItem value={75} label={"Organizations"} />
        <WorkItem value={15000} label={"Training Participants"} />
      </StyledWorkList>
    </StyledWork>
  );
};

const WorkItem = ({ value, label }: { value: number; label: string }) => {
  return (
    <StyledWorkItem>
      <CountUp start={0} end={value}>
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start}>
            <span ref={countUpRef} />
          </VisibilitySensor>
        )}
      </CountUp>
      <p>{label}</p>
    </StyledWorkItem>
  );
};
