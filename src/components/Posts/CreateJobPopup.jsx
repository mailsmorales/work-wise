import React, { useState } from "react";

export const CreateJobPopup = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(null);
  const [skills, setSkills] = useState([]);
  const [price, setPrice] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [job, setJob] = useState({
    title: "",
    category: "",
    skills: "",
    price: "",
    time: "",
    description: "",
  });

  const handleChange = (event) => {
    setJob((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(job);
  };

  return (
    <div className="post-popup job_post">
      <div className="post-project">
        <h3>Post a job</h3>
        <div className="post-project-fields">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-12">
                <input
                  onChange={handleChange}
                  type="text"
                  name="title"
                  placeholder="Title"
                />
              </div>
              <div className="col-lg-12">
                <div className="inp-field">
                  <select onChange={handleChange} name="category">
                    <option>Category</option>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12">
                <input
                  onChange={handleChange}
                  type="text"
                  name="skills"
                  placeholder="Skills"
                />
              </div>
              <div className="col-lg-6">
                <div className="price-br">
                  <input
                    onChange={handleChange}
                    type="text"
                    name="price"
                    placeholder="Price"
                  />
                  <i className="la la-dollar"></i>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inp-field">
                  <select onChange={handleChange} name="time">
                    <option>Full Time</option>
                    <option>Half time</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12">
                <textarea
                  onChange={handleChange}
                  name="description"
                  placeholder="Description"
                ></textarea>
              </div>
              <div className="col-lg-12">
                <ul>
                  <li>
                    <button className="active" type="submit" value="post">
                      Post
                    </button>
                  </li>
                  <li>
                    <a href="#" title="">
                      Cancel
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
        <a href="#" title="">
          <i className="la la-times-circle-o"></i>
        </a>
      </div>
    </div>
  );
};
