import { BookRecommendation, BookRequest } from "@/app/interface/book.request.interface";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

 const fetchHandler = async (req : any, res : any) => {
  try {
    const booksNames: BookRequest = req.body.booksNames;

    if (!booksNames || !booksNames.titles || booksNames.titles.length === 0) {
      return res.status(400).json({ error: "Please provide at least one book title." });
    }

    const titlesString = booksNames.titles.join(", ");

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `You are an AI book recommender. Given books ${titlesString} that the user likes, recommend 3 more books to the user. Give thoughtful recommendations not just famous books. Provide a RFC8259 compliant JSON array response with exactly 3 book recommendations following this format without deviation - {"book":"book name","author":"author of the book","rating":"Goodreads rating of the book up to one decimal point","description":"One sentence describing the book and also one sentence that explains why this book was chosen for the user based on the books they like."}`,
        },
      ],
      temperature: 0.3,
    });

    if(response.choices?.[0]?.message?.content === null) {
        return res.status(500).json({ error: "Failed to get a valid response from the AI." });
    }

    const content = response.choices?.[0]?.message.content

    if (!content) {
      return res.status(500).json({ error: "Failed to get a valid response from the AI." });
    }

    const recommendations: BookRecommendation[] = JSON.parse(content);

    return res.status(200).json(recommendations);  } catch (error) {
    console.error("Error fetching book recommendations:", error);
    return res.status(500).json({ error: "Failed to fetch book recommendations." });
  }
};


export default fetchHandler;