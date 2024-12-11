import { Button } from "@/components/ui/button"; // Assuming Button is a ShadCN component
import Link from "next/link";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";

const ItemPagination = (props:{ prevLink:string, nextLink:string }) => {
  return (
    <div className="flex justify-between items-center">
      {/* Previous Button */}
      {props.prevLink ? (
        <Link href={props.prevLink}>
          <Button className="flex items-center bg-transparent text-txtlight hover:text-black">
          <GrLinkPrevious />
            Prev
          </Button>
        </Link>
      ) : (
        <div />
      )}

      {/* Next Button */}
      {props.nextLink ? (
        <Link href={props.nextLink}>
          <Button variant="default" className="flex items-center bg-transparent text-txtlight hover:text-black">
            Next
            <GrLinkNext />
          </Button>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
};

export default ItemPagination;
