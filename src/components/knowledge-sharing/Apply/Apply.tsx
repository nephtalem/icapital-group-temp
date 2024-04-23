"use client";
import { Html } from "@/components/shared/Html/Html";
import { MainText } from "@/components/shared/MainText";
import { Button } from "@/components/shared/buttons/Button";
import {
  ApplyEafsEntity,
  Enum_Sponsorexhibitor_Type,
  UpcomingEafsEntity
} from "@/gql/graphql";
import KSPService from "@/services/ksp.service";
import { showLoadingMessage, showSuccessMessage } from "@/utils/show.message";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HTMLInputTypeAttribute, useRef, useState } from "react";
import { toast } from "sonner";
export const Apply = ({
  apply,
  upcoming,
}: {
  apply: ApplyEafsEntity;
  upcoming: UpcomingEafsEntity;
}) => {
  const [form, setForm] = useState({
    email: "",
    organizationName: "",
    phone: "",
    type: "",
  });
  const toastId = useRef<any>(null);
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const createParticipant = async () => {
    setBusy(true);
    toastId.current = showLoadingMessage("Please wait...");
    await KSPService.createSponsorExhibitor({
      email: form.email,
      organizationName: form.organizationName,
      phone: form.phone,
      type: form.type as Enum_Sponsorexhibitor_Type,
    });
    toast.dismiss(toastId.current);
    showSuccessMessage("Registration successful!");

    setTimeout(() => {
      router.push(
        "/knowledge-sharing/east-africa-finance-summit/previous-summits/",
      );
    }, 1000);
  };

  return (
    <div className="grid w-full justify-items-center justify-self-center p-6 md:max-w-[50vw] md:p-12">
      <div className="relative grid h-20 w-20 md:h-40 md:w-40">
        <Image
          src={`${apply.attributes?.logo?.data?.attributes?.url}`}
          alt={""}
          fill={true}
          quality={100}
          priority
          className="object-contain"
        />
      </div>
      {upcoming.attributes?.content?.title ? (
        <h2 className="text-xl font-bold md:my-12">
          {upcoming.attributes?.content?.title}
        </h2>
      ) : (
        <div className="h-8" />
      )}
      <MainText title={`${apply.attributes?.title}`} />
      <div className="mt-8 grid text-justify text-lg font-medium text-text">
        <Html content={apply!.attributes!.description!} />
      </div>
      <form
        className="mt-12 grid w-full auto-rows-max justify-items-center rounded-2xl border border-border p-5 md:p-10"
        onSubmit={(e) => {
          e.preventDefault();
          createParticipant();
        }}
      >
        <h3 className="mb-10 text-3xl font-bold text-text">Application Form</h3>
        <div className="mb-16 grid w-full grid-cols-1 gap-10">
          <div className="grid auto-rows-max items-start gap-6">
            <FormItem
              value={form.organizationName!}
              placeholder={"Enter your organization name"}
              label={"Organization Name"}
              setValue={(value: string): void => {
                setForm({ ...form, organizationName: value });
              }}
              required={true}
              type="text"
            />
            <FormItem
              value={form.email!}
              placeholder={"Enter your email address"}
              label={"Email"}
              setValue={(value: string): void => {
                setForm({ ...form, email: value });
              }}
              required={true}
              type="email"
            />

            <FormItem
              value={form.phone!}
              placeholder={"Enter your phone number"}
              label={"Phone Number"}
              setValue={(value: string): void => {
                setForm({ ...form, phone: value });
              }}
              required={true}
              type="tel"
            />
            <FormSelect
              value={form.type!}
              placeholder={"Select participation type"}
              label={"Type of Participation"}
              setValue={(value: string): void => {
                setForm({ ...form, type: value });
              }}
              required={true}
              options={[
                Enum_Sponsorexhibitor_Type.Sponsorship,
                Enum_Sponsorexhibitor_Type.Exhibition,
              ]}
            />

            <Button
              className="mt-5 w-1/2 justify-self-center"
              disabled={busy}
              label={"Submit"}
              onClick={(): void => {}}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

const FormItem = ({
  label,
  value,
  placeholder,
  required,
  type,
  setValue,
}: {
  value: string;
  placeholder: string;
  label: string;
  required: boolean;
  type: HTMLInputTypeAttribute;
  setValue: (value: string) => void;
}) => {
  return (
    <div className="grid w-full gap-4">
      <p className="text-base font-medium text-text">
        {label} <span className="text-accent">{required && "*"}</span>
      </p>
      <input
        value={value}
        type={type}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-border bg-backgroundAlt p-4 outline-accent  placeholder:text-text6"
      />
    </div>
  );
};

const FormSelect = ({
  label,
  value,
  placeholder,
  required,
  setValue,
  options,
}: {
  value: string;
  placeholder: string;
  label: string;
  required: boolean;
  setValue: (value: string) => void;
  options: string[];
}) => {
  return (
    <div className="grid w-full gap-4">
      <p className="text-base font-medium text-text">
        {label} <span className="text-accent">{required && "*"}</span>
      </p>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
        className="w-full rounded-lg border border-border bg-backgroundAlt p-4 outline-accent  placeholder:text-text6"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
