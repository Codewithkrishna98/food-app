import Link from "next/link";

export default function Home() {
  return (
    <div className=" w-full flex justify-center gap-3 text-center flex-col ">
      <h1 className=" text-6xl font-extrabold text-gray-800">Recipe App</h1>
      <div className=" justify-center flex p-3 borderrounded-lg ">
        <Link
          className="  text-4xl text-gray-700 cursor-pointer"
          href={"/recipe-route"}
        >
          Go To Recipe
        </Link>
      </div>
    </div>
  );
}
