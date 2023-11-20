export const getWidgets = async () => {
  const apiEndpointAddress = "https://jsonplaceholder.typicode.com/todos/1";

  let errorMessage = "";
  try {
    const response = await fetch(apiEndpointAddress, {
      cache: "no-store",
    });
    if (response.ok) {
      const data = await response.json();
      return {
        data: data,
        statusMessage: "ok",
        errorMessage,
      };
    } else {
      errorMessage = `Endpoint ${apiEndpointAddress} Response Status: ${response.status}`;
      console.log(errorMessage);
      return {
        errorMessage: errorMessage,
        statusMessage: "Invalid response from the API",
        data: {},
      };
    }
  } catch (error) {
    errorMessage = `Endpoint ${apiEndpointAddress} Error: ${error}`;
    console.log(errorMessage);
    return {
      errorMessage: errorMessage,
      statusMessage: "Endpoint connection invalid",
      data: {},
    };
  }
};
