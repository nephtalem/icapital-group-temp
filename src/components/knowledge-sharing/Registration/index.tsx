import { ComponentPricingPricing, RegistrationEafsEntity } from "@/gql/graphql";
import {
  StyledContent,
  StyledDescription,
  StyledForm,
  StyledFormItem,
  StyledLogo,
  StyledPayment,
  StyledPrice,
  StyledRegistration,
  StyledUpload,
} from "./styles";
import Image from "next/image";
import { MainText } from "@/components/shared/MainText";
import { Interweave } from "interweave";
import { useState } from "react";
import { moneyFormat } from "@/utils/money.format";
import UploadIcon from "@/assets/icons/upload.svg";
export const Registration = ({
  registration,
}: {
  registration: RegistrationEafsEntity;
}) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    position: "",
    participate: "",
    size: 1,
    price: registration.attributes?.pricing?.find((price) => price?.size === 1),
  });
  return (
    <StyledRegistration>
      <StyledLogo>
        <Image
          src={`${process.env.NEXT_PUBLIC_DATA}${registration.attributes?.logo?.data?.attributes?.url}`}
          alt={""}
          fill={true}
          quality={100}
          priority
        />
      </StyledLogo>
      <h2>{registration.attributes?.name}</h2>
      <MainText title={`${registration.attributes?.title}`} />
      <StyledDescription>
        <Interweave content={registration!.attributes!.description!} />
      </StyledDescription>
      <StyledForm>
        <h3>Participant Form</h3>
        <StyledContent>
          <FormItem
            value={form.fullName}
            placeholder={"Enter your full name"}
            label={"Full Name"}
            setValue={(value: string): void => {
              setForm({ ...form, fullName: value });
            }}
            required={true}
          />
          <FormItem
            value={form.email}
            placeholder={"Enter your email address"}
            label={"Email"}
            setValue={(value: string): void => {
              setForm({ ...form, email: value });
            }}
            required={true}
          />

          <FormItem
            value={form.phone}
            placeholder={"Enter your phone number"}
            label={"Phone Number"}
            setValue={(value: string): void => {
              setForm({ ...form, phone: value });
            }}
            required={true}
          />
          <FormItem
            value={form.organization}
            placeholder={"Enter your organization (optional)"}
            label={"Organization"}
            setValue={(value: string): void => {
              setForm({ ...form, organization: value });
            }}
            required={true}
          />
          <FormItem
            value={form.position}
            placeholder={"Enter your position (optional)"}
            label={"Position"}
            setValue={(value: string): void => {
              setForm({ ...form, position: value });
            }}
            required={true}
          />
          <span />
          <Payment
            size={form.size}
            setSize={(value: number): void => {
              setForm({ ...form, size: value });
            }}
            pricing={registration.attributes!.pricing!.map((price) => price!)}
          />
        </StyledContent>
      </StyledForm>
    </StyledRegistration>
  );
};

const Payment = ({
  size,
  setSize,
  pricing,
}: {
  size: number;
  setSize: (size: number) => void;
  pricing: ComponentPricingPricing[];
}) => {
  const max = pricing[0].price! * size;
  const current = pricing.find((price) => price.size === size)!.price! * size;
  return (
    <StyledPayment>
      <h4>Payment Details *</h4>
      <select value={size} onChange={(e) => setSize(Number(e.target.value))}>
        {pricing.map((price, index) => (
          <option value={price!.size!} key={price.size}>
            {price.size}{" "}
            {price.size === 1
              ? "person"
              : pricing.length - 1 === index
              ? "persons & above"
              : "persons"}
          </option>
        ))}
      </select>
      <StyledPrice>
        {max === current ? (
          <></>
        ) : (
          <p>{moneyFormat((max - current) / size, "ETB")} / person</p>
        )}
        <h5>
          {moneyFormat(
            pricing.find((price) => price.size === size)!.price!,
            "ETB"
          )}{" "}
          / person
        </h5>
      </StyledPrice>
      <StyledUpload>
        <UploadIcon />
        <p>Upload receipt</p>
      </StyledUpload>
    </StyledPayment>
  );
};

const FormItem = ({
  label,
  value,
  placeholder,
  required,
  setValue,
}: {
  value: string;
  placeholder: string;
  label: string;
  required: boolean;
  setValue: (value: string) => void;
}) => {
  return (
    <StyledFormItem>
      <p>
        {label} <span>{required && "*"}</span>
      </p>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </StyledFormItem>
  );
};
