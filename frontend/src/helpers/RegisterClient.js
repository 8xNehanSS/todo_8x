const RegisterClient = async (username, password, accessLogin) => {
  try {
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.status === 400) {
      alert("Invalid username or password");
    } else {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      accessLogin();
    }
  } catch (error) {
    console.log(error);
  }
};

export default RegisterClient;
