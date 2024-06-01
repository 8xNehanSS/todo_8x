const GetUserTasks = async (userId, setTasks) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:3000/tasks/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (response.status === 400) {
      alert("Invalid credentials");
    } else {
      const data = await response.json();
      console.log(data);
      setTasks(data);
    }
  } catch (error) {
    console.log(error);
  }
};

export default GetUserTasks;
