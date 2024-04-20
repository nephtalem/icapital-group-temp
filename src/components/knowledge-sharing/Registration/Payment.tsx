"use client";
import { ComponentPricingPricing } from "@/gql/graphql";
import {
  StyledPayment, StyledPrice,
  StyledReceipt, StyledUpload
} from "./styles";
import Image from "next/image";
import { useEffect, useState } from "react";
import { moneyFormat } from "@/utils/money.format";
import UploadIcon from "@/assets/icons/upload.svg";
import Dropzone from "react-dropzone";
import { previewImage } from "@/utils/preview.image";

const Payment = ({
  size, setSize, pricing, receiptFile, setReceiptFile,
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
            "ETB"
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
        {({ getRootProps, getInputProps }) => image ? (
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
        )}
      </Dropzone>
    </StyledPayment>
  );
};
