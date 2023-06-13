import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
  imageHeight: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
};

const Card = ({
  className,
  imageHeight,
  isSmallCard = false,
  isLongForm = false,
}: Props) => {
  return (
    <div className={className}>
      <Link className="basis-full hover:opacity-70" href="/">
        <div className={`relative w-auto mb-3 ${imageHeight}`}>Image</div>
      </Link>
      <div className="basis-full ">
        <Link href="/">
          <h4
            className={`font-bold hover:text-accent-green
      ${isSmallCard ? "text-base" : "text-lg"} 
      ${isSmallCard ? "line-clamp-2" : ""} 
      `}
          >
            title
          </h4>
        </Link>
        <div className={`${isSmallCard ? "my-2" : "flex my-3"}`}>
          <h5 className="font-semi-bold text-xs ">author</h5>
          <h6 className="text-wh-300 text-xs">date</h6>
        </div>
        <p
          className={`text-wh-100 ${
            isLongForm ? "line-clamp-5 " : "line-clamp-3"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          quaerat voluptatibus eaque voluptas saepe enim nihil, molestiae quae
          suscipit laboriosam ex corrupti sapiente ut? Earum veniam a sequi
          mollitia consectetur.Lorem Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Libero consequatur vel autem placeat hic! Laudantium
          facilis doloribus ipsam velit, delectus possimus ipsa recusandae
          maxime modi expedita corporis consequatur ex earum.
        </p>
      </div>
    </div>
  );
};

export default Card;
