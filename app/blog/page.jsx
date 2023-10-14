import Posts from "../components/Blog/Posts";
import AllCategories from "../components/Category/AllCategories";

export const dynamic = "force-dynamic";

export default function Blog() {
  return (
    <>
    <AllCategories />

    <Posts />
    </>
  )
  
  
}

