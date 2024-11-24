import { feedbackRoute, postData } from "./client"

export async function sendFeedback(feedback: Feedback): Promise<Response> {
  const query = `phone=${feedback.phone}&email=${feedback.email}&message=${feedback.message}`
  const response = await postData(feedbackRoute, query)
  return response
}