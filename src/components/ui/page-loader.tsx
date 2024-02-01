import Spinner from "./spinner";

export default function PageLoader() {
  return (
    <div className="bg-white flex items-center justify-center fixed h-screen z-50 w-full left-0 top-0">
      <Spinner size={70} fill="blue" />
    </div>
  );
}
