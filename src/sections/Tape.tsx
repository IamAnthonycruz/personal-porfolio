import StarIcon from "@/assets/icons/star.svg";
const words = [
  "perfomant",
  "accessible",
  "secure",
  "interactive",
  "scalable",
  "user friendly",
  "maintainable",
  "search optimized",
  "usable",
  "reliable",
];
export const TapeSection = () => {
  return (
    <div className="py-16">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip">
        <div className="flex">
          <div className="flex flex-none gap-4">
            {words.map((word) => (
              <div key={word} className="inline-flex gap-4">
                <span className="text-gray-900 uppercase font-extrabold text-sm ">
                  {word}
                </span>
                <StarIcon className="size-6 " />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
