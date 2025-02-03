import Image from "next/image";
import Header from "./header";
const https = require('https');

export const  NODE_TLS_REJECT_UNAUTHORIZED=0

const agent = new https.Agent({
  rejectUnauthorized: false,
});
export default async function Postspage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?limit=5",{agent});
  const data = await response.json();
  return (
    <div>
      <Header />
    </div>
  );
}
