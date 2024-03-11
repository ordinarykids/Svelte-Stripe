// api/validate-pin.js
export async function POST(request) {
  const { userpin } = await request.json();

  // Simulate looking up the user PIN
  const isValidPin = await validateUserPin(userpin);

  if (isValidPin) {
    return {
      status: 200,
      body: {
        result: "Your email has been sent.",
      },
    };
  } else {
    return {
      status: 401,
      body: {
        result: "Your email has been not been sent.",
      },
    };
  }
}

// Simulated function to validate the user PIN
async function validateUserPin(userpin) {
  // Replace this with your actual PIN validation logic
  // For example, you can check against a database or any other validation method
  return userpin === "121212";
}
