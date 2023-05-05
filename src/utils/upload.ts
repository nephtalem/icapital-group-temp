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
        "Bearer 47ceb2558a781f72bae0cc4362c52b4b37eb266568df9678f7e80ebc3dc3c6dc1dec158f56456ac51644eb569a7f1b6569bae03084dd4fd9ae61a03cfa50eaa728c603450fb37b7d7217df394c9461abf6a8bbf707935533ed3756a0cb81fc79b98f2f9827eed6f3613d70e7a834578b16841fbd7a8a55814cea44801e4529a4",
    },
  };
  let fd = new FormData();
  fd.append("files", data, data.name);
  return (
    await Axios.post(`${process.env.NEXT_PUBLIC_DATA}/api/upload`, fd, config)
  ).data;
};
