import { ThreeDots } from "react-loader-spinner";

export const Loader = () => (
    <ThreeDots
      height="50"
      width="120"
      radius="9"
      color="#3470FF"
      ariaLabel="three-dots-loading"
      visible={true}
    />
  );