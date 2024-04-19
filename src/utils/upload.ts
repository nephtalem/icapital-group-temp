import Axios from "axios";
import { compressImage } from "./compress.image";

export const upload = async (data: File) => {
  let file;
  console.log(data);
  if (data.type.toString().search("image") !== -1) {
    file = await compressImage(data);
  } else {
    file = data;
  }
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization:
        "Bearer a3dded575632da2dbb1ef2c636e73617c21598a2d61c088df71baaf31cd1faf5fcd3ef665345ec8d1b9ba49eea9a559d43c08b025f098ff33e68413fbeff392f3cfc78ba51c3e08a6f969f0ef939a4e0564f68fdec72c482880dde5dbaa7f8987f3ed01d204505b65d2741a6f3341d8479d18bbf38f5b1cc7bf3a7bb4c3a0e93",
    },
  };
  let fd = new FormData();
  fd.append("files", data, data.name);
  return (
    await Axios.post(`/api/upload`, fd, config)
  ).data;
};
