export async function sendFeedback(feedback: String): Promise<Response> {
    const response = await fetch('https://api.test.cyberia.studio/api/v1/feedback', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({feedback: feedback})
    })
    return response
}