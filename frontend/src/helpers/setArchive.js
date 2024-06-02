const SetArchive = async (username, id) => {
  try {
    const response = await fetch("http://localhost:3000/setarchive", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ username, id }),
    });

    if (response.status === 400) {
      alert("Invalid credentials");
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
};

export default SetArchive;
