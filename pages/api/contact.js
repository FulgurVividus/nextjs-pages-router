// These endpoints, they run on the server. Here, we are back to backend development. In the "pages router", we don't have the server actions, here we need to create one API endpoint for each data mutation that we wanna run on the server.

import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Please make a POST request :(" });
  }

  const contactData = {
    fullName: "Test Name",
    email: "test@gmail.com",
    subject: "booking",
    message: "test message",
  };

  const { error } = await supabase.from("contact").insert([contactData]);

  // On Success
  res.status(200).json({ success: true, message: "Thanks for your message!" });

  // On Error
  if (error) {
    return res
      .status(500)
      .json({ success: false, message: "Could not send your message :(" });
  }
}
