import { EMAIL_SERVICE_ENDPOINT_URL } from "../config";

export const sendEmailAdress = (emailAdress: string | undefined) => {
  console.log(
    "Deine email-adresse " + emailAdress + " wird in den Newsletter eingetragen"
  );
  const data = { email: emailAdress };

  fetch(EMAIL_SERVICE_ENDPOINT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
