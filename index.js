export const sum = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => (b === 0 ? "Cannot divide by 0" : a / b);
export const remaining = (a, b) => a % b;

export const fetchData = async (url) => {
  const raw = await fetch(`${url}`);
  const response = await raw.json();

  return response;
};

export const postData = async (url, data) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const postData = await fetch(`${url}`, options);
    const response = await postData.json();
    return response;
  } catch (error) {
    return error;
  }
};
