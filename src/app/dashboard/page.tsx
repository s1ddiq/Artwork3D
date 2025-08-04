"use client";
import { redirect } from "next/navigation";
import { useClerk } from "@clerk/nextjs";
import { toast } from "sonner";
import MessageList from "@/components/message-list";
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  const { signOut, user } = useClerk();
  const isAdmin = user?.publicMetadata?.role || false;
  if (!isAdmin) {
    toast.error("You do not have permission to access this page.");
    signOut();
    redirect("/");
  }
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-primary-purple">
      Admin Dashboard
      <Button onClick={() => redirect("/")}>Go back to Your Portfolio</Button>
      <MessageList />
    </div>
  );
};

export default DashboardPage;
