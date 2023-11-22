import Link from "next/link";
import { MainText } from "../MainText";
import {
  StyledPartner,
  StyledPartnerList,
  StyledPartners,
  StyledPartnersTitle,
} from "./styles";
import Image from "next/image";

export const Partners = ({
  partner,
  partnerIntro,
  title,
}: {
  title: string;
  partnerIntro: string;
  partner: { image: string; to: string }[];
}) => {
  return (
    <StyledPartners>
      <StyledPartnersTitle>
        <MainText title={title} />
        <p>{partnerIntro}</p>
      </StyledPartnersTitle>
      <StyledPartnerList>
        {partner!.map((partner, index) => (
          <Partner
            key={index}
            to={partner!.to!}
            image={`${process.env.NEXT_PUBLIC_DATA}${partner.image}`}
          />
        ))}
      </StyledPartnerList>
    </StyledPartners>
  );
};

const Partner = ({ image, to }: { image: string; to: string }) => {
  return (
    <Link href={to ?? "/"} target={"_blank"}>
      <StyledPartner>
        <Image src={image} alt={""} fill={true} />
      </StyledPartner>
    </Link>
  );
};
