import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt } = body;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

    const result = await model.generateContent(prompt);

    const response = result.response.text();

    return Response.json({
      success: true,
      response,
    });
  } catch (error) {
    console.log(error);

    return Response.json({
      success: false,
      error: "Something went wrong",
    });
  }
}