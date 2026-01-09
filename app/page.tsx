import Footer from "@/components/footer";
import Header from "@/components/header";
import { HomeContent } from "@/components/home-content";
import { getAllPosts, getAllCategories, getPostsByCategory } from "@/lib/posts";

export default function Home() {
  const allPosts = getAllPosts();
  const posts = allPosts.slice(0, 3);
  const categories = getAllCategories().map((category) => ({
    category,
    count: getPostsByCategory(category).length,
  }));

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <HomeContent posts={posts} categories={categories} />
      <Footer />
    </div>
  );
}
