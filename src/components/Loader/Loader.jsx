import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots
      height="60"
      width="60"
      radius="9"
      color="#bbb"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName="Loader"
      visible={true}
    />
  );
};
