import React, { useState } from "react";

const TaskList = (props) => {
  return (
    <div
      style={{
        border: "0.5px solid lightgrey",
        height: "70px",
        width: "900px",
        display: "flex",
        paddingLeft: "60px",
        alignItems: "center",
        borderRadius: "3px",
      }}
    >
      <input
        type={"checkbox"}
        style={{
          display: "flex",
          alignItems: "center",
          marginRight: "20px",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <p> {props.text}</p>
        <img
          alt="svgImg"
          onClick={() => props.handleDelete(props.id)}
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2U3NGMzYyI+PHBhdGggZD0iTTc1LjI1LDI0LjE4NzVjLTIuOTY5NjksMCAtNS4zNzUsMi40MDUzMSAtNS4zNzUsNS4zNzV2Mi42ODc1aC0zMi4yNWMtMi45NjcsMCAtNS4zNzUsMi40MDggLTUuMzc1LDUuMzc1YzAsMi45NjcgMi40MDgsNS4zNzUgNS4zNzUsNS4zNzVoMi42ODc1djgwLjYyNWMwLDguODkyOTQgNy4yMzIwNiwxNi4xMjUgMTYuMTI1LDE2LjEyNWg1OS4xMjVjOC44OTI5NCwwIDE2LjEyNSwtNy4yMzIwNiAxNi4xMjUsLTE2LjEyNXYtODAuNjI1aDIuNjg3NWMyLjk2NywwIDUuMzc1LC0yLjQwOCA1LjM3NSwtNS4zNzVjMCwtMi45NjcgLTIuNDA4LC01LjM3NSAtNS4zNzUsLTUuMzc1aC0zMi4yNXYtMi42ODc1YzAsLTIuOTY5NjkgLTIuNDA1MzEsLTUuMzc1IC01LjM3NSwtNS4zNzV6TTUxLjA2MjUsNDNoNjkuODc1djgwLjYyNWMwLDIuOTY0MzEgLTIuNDEwNjksNS4zNzUgLTUuMzc1LDUuMzc1aC01OS4xMjVjLTIuOTY0MzEsMCAtNS4zNzUsLTIuNDEwNjkgLTUuMzc1LC01LjM3NXpNNjMuMTU2MjUsNTMuNzVjLTIuMjI1MjUsMCAtNC4wMzEyNSwxLjgwMzMxIC00LjAzMTI1LDQuMDMxMjV2NTYuNDM3NWMwLDIuMjI3OTQgMS44MDYsNC4wMzEyNSA0LjAzMTI1LDQuMDMxMjVjMi4yMjUyNSwwIDQuMDMxMjUsLTEuODAzMzEgNC4wMzEyNSwtNC4wMzEyNXYtNTYuNDM3NWMwLC0yLjIyNzk0IC0xLjgwNiwtNC4wMzEyNSAtNC4wMzEyNSwtNC4wMzEyNXpNODYsNTMuNzVjLTIuOTY3LDAgLTUuMzc1LDIuNDA4IC01LjM3NSw1LjM3NXY1My43NWMwLDIuOTY3IDIuNDA4LDUuMzc1IDUuMzc1LDUuMzc1YzIuOTY3LDAgNS4zNzUsLTIuNDA4IDUuMzc1LC01LjM3NXYtNTMuNzVjMCwtMi45NjcgLTIuNDA4LC01LjM3NSAtNS4zNzUsLTUuMzc1ek0xMDguODQzNzUsNTMuNzVjLTIuMjI1MjUsMCAtNC4wMzEyNSwxLjgwMzMxIC00LjAzMTI1LDQuMDMxMjV2NTYuNDM3NWMwLDIuMjI3OTQgMS44MDYsNC4wMzEyNSA0LjAzMTI1LDQuMDMxMjVjMi4yMjUyNSwwIDQuMDMxMjUsLTEuODAzMzEgNC4wMzEyNSwtNC4wMzEyNXYtNTYuNDM3NWMwLC0yLjIyNzk0IC0xLjgwNiwtNC4wMzEyNSAtNC4wMzEyNSwtNC4wMzEyNXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
        />
      </div>
    </div>
  );
};

function App() {
  const data = [
    { taskName: "dishes", id: 4 },
    { taskName: "vaccume", id: 5 },
    { taskName: "make the bed", id: 6 },
  ];

  // taskList is state is holding task state
  // declare variable named taskList and setTaskList in array, then useState, the default value is data
  const [taskList, setTaskList] = useState(data);

  // declare another variable in an array named inputValue, setInputValue then use useState, default value is ""
  const [inputValue, setInputValue] = useState("");

  //declare a third variable named handle add, that equals string =>   use the setTaskList with a parenthasis
  //and an array, in the array put ...tasklist, then make an object with taskname string, and make a random
  //gen 1 - 100, ...tasklist makes copy of tasklist
  const handleAdd = (string) => {
    setTaskList([
      ...taskList,
      { taskName: string, id: Math.floor(Math.random() * 100) + 1 },
    ]);
  };
  //declare variable named handleDelete, it takes id =>
  //const filteredList, it equals taskList.filter, it takes item, item.id not equal to id
  //next you're gonna add setTaskList, it takes filteredList
  //filteredList is the updated list
  const handleDelete = (id) => {
    const filteredList = taskList.filter((item) => item.id != id);
    setTaskList(filteredList);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{}}>
        <header
          style={{
            backgroundColor: "#222222",
            height: "80px",
            width: "100vw",
            display: "flex",
            position: "absolute",
            marginTop: "20px",
          }}
        >
          {" "}
          <p
            style={{
              color: "grey",
              display: "flex",
              alignItems: "center",
              fontSize: "20px",
              paddingLeft: "40px",
            }}
          >
            ToDo List
          </p>
        </header>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: "30px", marginTop: "150px" }}>ToDo List</p>
          <input
            style={{
              paddingLeft: "13px",
              display: "flex",
              width: "430px",
              height: "27px",
              marginTop: "230px",
              color: "lightgray",
              marginBottom: "50px",
              borderRadius: "5px",
              marginLeft: "-65",
            }}
            //value equals input value
            //oncChange takes e (event) =>
            //setInputvalue takes e.target.value
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            placeholder="New Task"
          />
          <button
            //make an onClick button, it equals to e =>
            //handle add takes inputValue
            onClick={(e) => {
              handleAdd(inputValue);
            }}
            style={{
              backgroundColor: "#007cbc",
              border: "none",
              color: "white",
              height: "30",
              width: "50px",
              marginTop: "230px",
              marginBottom: "50px",
              borderRadius: "5px",
              marginLeft: "20px",
            }}
          >
            Add
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* tasklist.map takes task and returns Tasklist, Tasklist takes text.taskName
          then add handleDelete, it equals to {handleDelete}
          id takes task.id
          */}
          {taskList.map((task) => {
            return (
              <TaskList
                text={task.taskName}
                handleDelete={handleDelete}
                id={task.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

{
}
