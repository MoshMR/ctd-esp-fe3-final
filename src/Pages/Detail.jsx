import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../utils/AxiosClient";

const Detail = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const result = await getRequest(`USERS/${id}`);
      setUser(result);
    };
    getUser();
  }, [id]);

  if (!id) {
    return <div>Not Found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h1 className="mb-10">Detail Dentist: {user.name} </h1>
      <table className="w-full text-center">
        <thead className="text-sm text-gray-700 uppercase bg-gray-100 dark:bg-[#dbe1ec]"> 
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Website
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b dark:border-#BBBE17 dark:text-white text-sm">
            <th
              scope="row"
              className="px-6 py-4 font-medium"
            >
              {user.name}
            </th>
            <td className="px-6 py-4">{user.email}</td>
            <td className="px-6 py-4">{user.phone}</td>
            <td className="px-6 py-4">{user.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
