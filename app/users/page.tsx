import { use } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //     cache: "no-store",
  //   });
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users List</h1>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
