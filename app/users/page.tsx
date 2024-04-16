import { use } from "react";
import UserTable from "./UserTable";
interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //     cache: "no-store",
  //   });

  return (
    <>
      <h1 className="p-5">Users List</h1>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
