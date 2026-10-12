import { students } from "../data/data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-300 mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Students</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((element) => (
            <div
              key={element.id}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-800">
                {element.name}
              </h2>

              <p className="text-gray-500 mt-2">
                Age:
                <span className="font-semibold text-gray-700">
                  {element.age}
                </span>
              </p>

              <Link to={`/student/${element.id}`}>
                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl cursor-pointer">
                  Read more about {element.name}→
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
