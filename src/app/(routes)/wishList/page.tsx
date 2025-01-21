import PageHeader from "@/components/page-header";
import WishListItems from "@/components/wishlist/wishListItems";

const WishList = () => {
  return (
    <div>
      <PageHeader heading="Wish List" title="wish list" />
      <WishListItems />
    </div>
  );
};

export default WishList;
