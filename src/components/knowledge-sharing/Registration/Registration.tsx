"use client";
import CheckIcon from "@/assets/icons/check.svg";
import { Html } from "@/components/shared/Html/Html";
import { MainText } from "@/components/shared/MainText";
import { Button } from "@/components/shared/buttons/Button";
import { RegistrationEafsEntity, UpcomingEafsEntity } from "@/gql/graphql";
import KSPService from "@/services/ksp.service";
import { showLoadingMessage, showSuccessMessage } from "@/utils/show.message";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HTMLInputTypeAttribute, useRef, useState } from "react";
import { toast } from "sonner";
export const Registration = ({
  registration,
  upcoming,
}: {
  registration: RegistrationEafsEntity;
  upcoming: UpcomingEafsEntity;
}) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    position: "",
    participate: "",
    size: 0,
    price: 0,
  });
  const toastId = useRef<any>(null);
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const createParticipant = async () => {
    setBusy(true);
    toastId.current = showLoadingMessage("Please wait...");
    await KSPService.createParticipant({
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      organization: form.organization,
      position: form.position,
      reason: upcoming.attributes?.content?.title,
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
    <div className="grid w-full justify-items-center justify-self-center p-6 md:max-w-[80vw] md:p-12">
      <div className="relative grid h-20 w-20 md:h-40 md:w-40">
        <Image
          src={`${registration.attributes?.logo?.data?.attributes?.url}`}
          alt={""}
          fill={true}
          quality={100}
          priority
          className="object-contain"
        />
      </div>
      {registration.attributes?.name ? (
        <h2 className="text-xl font-bold md:my-12">
          {registration.attributes?.name}
        </h2>
      ) : (
        <div className="h-8" />
      )}
      <MainText title={`${registration.attributes?.title}`} />
      <div className="mt-8 grid text-justify text-lg font-medium text-text">
        <Html content={registration!.attributes!.description!} />
      </div>
      <form
        className="mt-12 grid w-full auto-rows-max justify-items-center rounded-2xl border border-border p-5 md:p-10"
        onSubmit={(e) => {
          e.preventDefault();
          createParticipant();
        }}
      >
        <h3 className="mb-10 text-3xl font-bold text-text">Participant Form</h3>
        <div className="mb-16 grid w-full grid-cols-1 gap-10 md:grid-cols-2">
          <div className="grid auto-rows-max items-start gap-5">
            {registration.attributes?.points?.map((point, index) => (
              <div
                className="grid grid-cols-[1rem,1fr] items-center gap-5"
                key={index}
              >
                <CheckIcon className={"w-4"} />
                <p className="text-base font-medium text-text">
                  {point?.content}
                </p>
              </div>
            ))}
          </div>
          <div className="grid auto-rows-max items-start gap-6">
            <FormItem
              value={form.fullName}
              placeholder={"Enter your full name"}
              label={"Full Name"}
              setValue={(value: string): void => {
                setForm({ ...form, fullName: value });
              }}
              required={true}
              type="text"
            />
            <FormItem
              value={form.email}
              placeholder={"Enter your email address"}
              label={"Email"}
              setValue={(value: string): void => {
                setForm({ ...form, email: value });
              }}
              required={true}
              type="email"
            />

            <FormItem
              value={form.phone}
              placeholder={"Enter your phone number"}
              label={"Phone Number"}
              setValue={(value: string): void => {
                setForm({ ...form, phone: value });
              }}
              required={true}
              type="tel"
            />
            <FormItem
              value={form.organization}
              placeholder={"Enter your organization (optional)"}
              label={"Organization"}
              setValue={(value: string): void => {
                setForm({ ...form, organization: value });
              }}
              required={false}
              type="text"
            />
            <FormItem
              value={form.position}
              placeholder={"Enter your position (optional)"}
              label={"Position"}
              setValue={(value: string): void => {
                setForm({ ...form, position: value });
              }}
              required={false}
              type="text"
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
        className="bg-backgroundAlt w-full rounded-lg border border-border p-4 outline-accent  placeholder:text-text6"
      />
    </div>
  );
};
