let IS_PROD = true;

const servers  = IS_PROD ? 
"https://chatgpt-clone-backend-x4cm.onrender.com":
    "http://localhost:5173"
    
export default servers;