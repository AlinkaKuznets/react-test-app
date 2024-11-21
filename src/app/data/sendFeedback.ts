export async function sendFeedback(feedback: Feedback): Promise<Response> {
  const query = `phone=${feedback.phone}&email=${feedback.email}&message=${feedback.message}`
  const response = await fetch(`https://api.test.cyberia.studio/api/v1/feedbacks?${query}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
  })
  return response
}