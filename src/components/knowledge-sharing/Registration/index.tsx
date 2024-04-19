"use client";
import {
  ComponentPricingPricing,
  RegistrationEafsEntity,
  UpcomingEafsEntity,
} from "@/gql/graphql";
import {
  StyledContent,
  StyledDescription,
  StyledForm,
  StyledFormItem,
  StyledLogo,
  StyledPayment,
  StyledPoint,
  StyledPoints,
  StyledPrice,
  StyledReceipt,
  StyledRegistration,
  StyledUpload,
} from "./styles";
import Image from "next/image";
import { MainText } from "@/components/shared/MainText";
import { Interweave } from "interweave";
import { HTMLInputTypeAttribute, useEffect, useRef, useState } from "react";
import { moneyFormat } from "@/utils/money.format";
import UploadIcon from "@/assets/icons/upload.svg";
import CheckIcon from "@/assets/icons/check.svg";
import Dropzone from "react-dropzone";
import { Button } from "@/components/shared/buttons/Button";
import { previewImage } from "@/utils/preview.image";
import { upload } from "@/utils/upload";
import { showLoadingMessage, showSuccessMessage } from "@/utils/show.message";
import KSPService from "@/services/ksp.service";
import { useRouter } from "next/navigation";
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
    size: 1,
    price:
      registration.attributes?.pricing?.find((price) => price?.size === 1)
        ?.price ?? 5000,
  });
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const toastId = useRef<any>(null);
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const createParticipant = async () => {
    setBusy(true);
    toastId.current = showLoadingMessage("Please wait...");
    const result: any = await upload(receiptFile!);
    await KSPService.createParticipant({
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      organization: form.organization,
      position: form.position,
      size: form.size,
      price: form.price,
      reason: upcoming.attributes?.content?.title,
      receipt: result[0].id,
    });
    toast.dismiss(toastId.current);

    setTimeout(() => {
      showSuccessMessage("Registration successful!");
      router.push(
        "/knowledge-sharing/east-africa-finance-summit/previous-summits/",
      );
    }, 1000);
  };

  return (
    <StyledRegistration>
      <StyledLogo>
        <Image
          src={`${registration.attributes?.logo?.data?.attributes?.url}`}
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
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
          createParticipant();
        }}
      >
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
          <span />
          <Payment
            size={form.size}
            setSize={(value: number): void => {
              setForm({
                ...form,
                size: value,
                price:
                  registration.attributes?.pricing?.find(
                    (price) => price?.size === value,
                  )?.price ?? 5000,
              });
            }}
            receiptFile={receiptFile}
            setReceiptFile={setReceiptFile}
            pricing={registration.attributes!.pricing!.map((price) => price!)}
          />
          <StyledPoints>
            {registration.attributes?.points?.map((point, index) => (
              <StyledPoint key={index}>
                <CheckIcon />
                <p>{point?.content}</p>
              </StyledPoint>
            ))}
          </StyledPoints>
        </StyledContent>
        <Button disabled={busy} label={"Submit"} onClick={(): void => {}} />
      </StyledForm>
    </StyledRegistration>
  );
};

const Payment = ({
  size,
  setSize,
  pricing,
  receiptFile,
  setReceiptFile,
}: {
  size: number;
  setSize: (size: number) => void;
  pricing: ComponentPricingPricing[];
  receiptFile: File | null;
  setReceiptFile: (file: File) => void;
}) => {
  const [image, setImage] = useState("");
  useEffect(() => {
    if (receiptFile) {
      previewImage(receiptFile, setImage);
    }
  }, [receiptFile]);

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
            "ETB",
          )}{" "}
          / person
        </h5>
      </StyledPrice>
      <Dropzone
        accept={{
          "image/png": [".png"],
          "image/jpeg": [".jpeg"],
        }}
        onDrop={(acceptedFiles) => {
          if (acceptedFiles && acceptedFiles.length > 0) {
            setReceiptFile(acceptedFiles.shift()!);
          }
          return console.log(acceptedFiles);
        }}
      >
        {({ getRootProps, getInputProps }) =>
          image ? (
            <StyledReceipt {...getRootProps()}>
              <Image src={image} alt={""} fill={true} />
              <input {...getInputProps()} />
            </StyledReceipt>
          ) : (
            <StyledUpload {...getRootProps()}>
              <UploadIcon />
              <p>Upload receipt</p>
              <input {...getInputProps()} required />
            </StyledUpload>
          )
        }
      </Dropzone>
    </StyledPayment>
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
    <StyledFormItem>
      <p>
        {label} <span>{required && "*"}</span>
      </p>
      <input
        value={value}
        type={type}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        required={required}
      />
    </StyledFormItem>
  );
};
