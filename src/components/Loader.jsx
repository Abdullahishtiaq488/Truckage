
import { Puff } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="Data">
      <Puff
        height="110"
        width="110"
        radius="10"
        color="midnightblue"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};
