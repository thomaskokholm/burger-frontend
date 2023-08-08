import { ArrowPathIcon } from "@heroicons/react/24/outline";
export default function LoadingIndicator() {
  return (
    <div className="h-6 w-fit flex flex-row justify-center items-center">
      <ArrowPathIcon className="animate-spin w-6 h-6 inline-block" />
      <span className="font-normal text-xl ml-1 leading-none">Loading</span>
    </div>
  );
}
