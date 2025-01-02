import React, { useState } from "react";    

const CreateTask = () => {
  const [ taskData, setTaskData ] = useState({
    taskTitle: "",
    taskDescription: "",
    taskDate: "",
    taskAsignTo: "",
    taskCategory: "",

  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTaskData((prevTaskData) => {
      return {
        ...prevTaskData,
        active:false,
        newTask: true,
        completed: false,
        failed: true,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  console.log(taskData);
     const data = JSON.parse(localStorage.getItem('employees'));    
    //  console.log(data);
         if(!data || !data.forEach){
             console.error("No employees found");
             return;
         }
        data.forEach(element => {
        if(element.firstName ==  taskData.taskAsignTo){
             
        }
        });
     

    setTaskData({
      taskTitle: "",
      taskDescription: "",
      taskDate: "",
      taskAsignTo: "",
      taskCategory: "",
    });
  };
  return (
    <>
      <div className=" p-5 mt-12 bg-[#1c1c1c] rounded">
        <form
          onSubmit={submitHandler}
          className="flex w-full flex-wrap items-start justify-between "
        >
          <div className="w-1/2">
            <div className="flex flex-col">
              <label htmlFor="title" className="text-sm text-gray-300 mb-0.5">
                Task Title
              </label>
              <input
                onChange={onChangeHandler}
                name="taskTitle"
                value={taskData.taskTitle}
                id="title"
                className="p-1 text-sm w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                placeholder="Make a Ui design "
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="date" className="text-sm text-gray-300 mb-0.5">
                Date
              </label>
              <input
                onChange={onChangeHandler}
                name="taskDate"
                value={taskData.taskDate}

                id="date"
                className="p-1 text-sm w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="date"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="assignto"
                className="text-sm text-gray-300 mb-0.5"
              >
                Asign To
              </label>
              <input
                onChange={onChangeHandler}
                name="taskAsignTo"
                value={taskData.taskAsignTo}
                id="assignto"
                className="p-1 text-sm w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="employee name"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="category"
                className="text-sm text-gray-300 mb-0.5"
              >
                Category
              </label>
              <input
                onChange={onChangeHandler}
                name="taskCategory"
                value={taskData.taskCategory}
                id="category"
                className="p-1 text-sm w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="design, dev, etc"
              />
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-start">
            <label htmlFor="desc" className="text-sm text-gray-300 mb-0.5">Description</label>
            <textarea
              onChange={onChangeHandler}
              name="taskDescription"
              value={taskData.taskDescription}
              className="w-full h-44 py-4 rounded outline-none bg-transparent border-[1px] border-gray-400 text-gray-300 mb-0.5"
              id="desc"
              cols="30"
              rows="10"
            ></textarea>
            <button className="w-full mt-4 text-sm rounded px-5 hover:bg-emerald-600 py-3 bg-emerald-400 ">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
