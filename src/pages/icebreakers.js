import { c, icebreakers } from "../utils";

export default function Icebreakers() {
  function getIcebreaker() {
    if (icebreakers?.length > 0) {
      return icebreakers[Math.floor(Math.random() * icebreakers.length)];
    } else {
      return "uh oh, no icebreakers found";
    }
  }

  return (
    <div
      className={c(
        "max-w-7xl",
        "md:min-h-screen",
        "mx-auto",
        "px-4",
        "sm:px-6",
        "lg:px-8",
      )}
    >
      <div
        className={c(
          "p-5",
          "mx-auto",
          "max-w-2xl",
          "flex",
          "flex-col",
          "justify-center",
          "text-center",
        )}
      >
        {getIcebreaker()}
      </div>
    </div>
  );
}
