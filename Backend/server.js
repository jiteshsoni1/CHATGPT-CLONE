import  express from "express";
import 'dotenv/config';
import cors from "cors";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
    
});

app.post("/test",async(req,res)=>{
    const option = {
        method:"POST"
    }
    try {
        
    } catch (error) {
        console.log(err);
        
    }
})















// import 'dotenv/config'; // This loads the variables from .env
// import { GoogleGenAI } from "@google/genai";

// // Access the key from process.env
// const ai = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY 
// });

// async function main() {
//   try {
//     const response = await ai.models.generateContent({
//       model: "gemini-3-flash-preview",
//       contents: "define html",
//     });
//     console.log(response.text);
//   } catch (error) {
//     console.error("Error calling Gemini API:", error);
//   }
// }

// await main();