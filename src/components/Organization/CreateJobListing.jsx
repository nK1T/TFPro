import { useState } from "react";

const CreateJobListing = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requirements: "",
    location: "",
    salary: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full md:max-w-3xl">
        <h1 className="text-3xl font-semibold mb-6 text-center text-white">
          Post a Job Position
        </h1>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-white mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
              placeholder="Enter job title"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-white mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:border-blue-500 h-32 resize-none bg-gray-700 text-white"
              placeholder="Enter job description"
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="requirements"
              className="block text-sm font-medium text-white mb-2"
            >
              Requirements
            </label>
            <textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:border-blue-500 h-32 resize-none bg-gray-700 text-white"
              placeholder="Enter job requirements"
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-white mb-2"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
              placeholder="Enter job location"
              required
            />
          </div>
          <div>
            <label
              htmlFor="salary"
              className="block text-sm font-medium text-white mb-2"
            >
              Salary
            </label>
            <input
              type="text"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
              placeholder="Enter job salary"
              required
            />
          </div>
          <div>
            <label
              htmlFor="deadline"
              className="block text-sm font-medium text-white mb-2"
            >
              Application Deadline
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
              required
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Post Job Position
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJobListing;
