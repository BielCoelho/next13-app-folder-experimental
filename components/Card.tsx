import clsx from "clsx";
import { ReactNode } from "react";

interface ICardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ className, children }: ICardProps) => {
  return (
    <div
      className={clsx(
        "rounded-3xl px-10 py-4 drop-shadow-xl bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
