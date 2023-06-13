import Card from "./Card";

type Props = {};

const Other = (props: Props) => {
  return (
    <section className="pt-4 mb-16">
      <hr className="border-1" />
      {/* header */}
      <p className="font-bold text-2xl my-8">Other Trending Posts</p>
      <div className="sm:grid grid-cols-2 gap-16">
        <Card imageHeight="h-80" className="mt-5 sm:mt-0  bg-wh-500" />
        <Card imageHeight="h-80" className="mt-5 sm:mt-0  bg-wh-500" />
        <Card imageHeight="h-80" className="mt-5 sm:mt-0  bg-wh-500" />
        <Card imageHeight="h-80" className="mt-5 sm:mt-0  bg-wh-500" />
      </div>
    </section>
  );
};

export default Other;
