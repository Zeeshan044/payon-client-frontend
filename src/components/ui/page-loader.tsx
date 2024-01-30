import Spinner from "./spinner";

export default function PageLoader() {
  return (
    <div className="bg-white flex items-center justify-center">
      <Spinner size={70} />
    </div>
  );
}
