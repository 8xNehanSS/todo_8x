const AddUserTask = async (username, taskDesc, dueDate) => {
  console.log(username, taskDesc, dueDate);
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:3000/addtask/${username}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ username, taskDesc, dueDate }),
    });
    if (response.status === 400) {
      alert("Invalid credentials");
    } else {
      const data = await response.json();
    }
  } catch (error) {
    console.log(error);
  }
};

export default AddUserTask;
