import React from "react";
import { usersData } from "../jsonData/users";
import { useNavigate } from "react-router-dom";

export interface userData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  phone: string;
  roleId: number;
  managerId: string;
  address: null | string;
  postalCode: null | string;
  city: null | string;
  country: null | string;
  subDepartment: null | string;
  manager: {
    id: string;
    firstName: string;
    lastName: string;
    archivedAt: null | string;
    email: string;
    phone: string;
    position: string;
    avatar: null | string;
  };
  avatar: {
    link: string;
  };
  department: {
    id: string;
    title: string;
    managerId: string;
  };
  group: null | string;
  division: null | string;
}

function UserList() {
  const navigate = useNavigate();

  const onHandleOpen = (id: string) => {
    navigate(`/time-sheet/${id}`);
  };

  return (
    <>
      <div className="container p-4">
        <h5>Employee Data</h5>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">S.no.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Position</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">PostalCode</th>
              <th scope="col">City</th>
              <th scope="col">Country</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {usersData?.map((user, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{user.firstName + " " + user.lastName || "-"}</td>
                <td>{user.email || "-"}</td>
                <td>{user.position || "-"}</td>
                <td>{user.phone || "-"}</td>
                <td>{user.address || "-"}</td>
                <td>{user.postalCode || "-"}</td>
                <td>{user.city || "-"}</td>
                <td>{user.country || "-"}</td>
                <td>
                  <span
                    role="button"
                    className="text-primary"
                    onClick={() => {
                      onHandleOpen(user.id);
                    }}
                  >
                    Time sheet
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserList;
