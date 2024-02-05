import { redirect } from "next/navigation";

async function Page() {
  redirect("/feed");
}

export default Page;
