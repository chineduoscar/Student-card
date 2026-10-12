import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { students } from "../data/data";

const Student = () => {
  const param = useParams();

  const studentID = param.id;

  const student = students.find((element) => {
    return element.id === Number(studentID);
  });

  return (
    <section className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-300 mx-auto">
        <div className="">
          <h2 className="text-xl font-bold text-gray-800">{student.name}</h2>

          <p className="text-gray-500 mt-2">
            Age:
            <span className="font-semibold text-gray-700">{student.age}</span>
          </p>

          <p className="text-gray-700 mt-2">{student.description}</p>

          <Link to={"/"}>
            <button className="mt-6 w-full border border-gray-500 text-gray-500 font-medium py-3 rounded-xl cursor-pointer">
              Back Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Student;
