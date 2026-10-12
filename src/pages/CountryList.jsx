import axios from "axios";
import { useState, useEffect } from "react";

const CountryList = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const url = "https://jsonplaceholder.typicode.com/users";

      const response = await axios.get(url);
      console.log(response.data);
      setUser(response.data);
    };

    fetchUser();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {user.map((element) => (
        <div
          key={element.id}
          className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
        >
          <h2 className="text-xl font-bold text-gray-800">{element.name}</h2>

          <p className="text-gray-500 mt-2">
            Email:
            <span className="font-semibold text-gray-700">{element.email}</span>
          </p>
        </div>
      ))}
    </div>
  );
};
export default CountryList;
