const Authentication = async (token, accessLogin) => {
  try {
    const response = await fetch("http://localhost:3000/auth", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      console.log(data.user.username);
      accessLogin(data.user.username);
    }
  } catch (error) {
    console.log(error);
  }
};

export default Authentication;
