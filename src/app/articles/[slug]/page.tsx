import TestComponent from "./copy";
import Header from "@/app/components/header";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <main
      className={`bg-gradient-to-br from-green-800 to-green-900 min-h-screen text-white`}
    >
      <Header />
      <div>
        <TestComponent text={"test"} />
        {slug}
      </div>
    </main>
  );
}
