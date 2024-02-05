import Sidebar from "@/components/custom_ui/Sidebar";

export default function FeedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col-reverse md:flex-row">
      <div className="w-full md:w-24 flex-none lg:w-64 md:border-r">
        <Sidebar />
      </div>
      <div className="flex-grow flex-1 w-full overflow-y-auto  ">
        <div className="w-full max-w-7xl mx-auto">{children}</div>
      </div>
    </div>
  );
}
