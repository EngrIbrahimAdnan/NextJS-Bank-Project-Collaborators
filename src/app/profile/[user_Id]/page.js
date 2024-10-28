import UserProfile from "@/components/[userId]/page";
import React from "react";

export default async function page({ params }) {
  const { user_Id } = await params;
  return (
    <div>
      {/* <h1>hello</h1>
      <p>{user_Id}</p> */}
      <UserProfile userId={user_Id} />
    </div>
  );
}