import React, { useEffect, useState } from "react";

 function QuoteWidget() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://api.allorigins.win/raw?url=https://favqs.com/api/qotd")
      .then((res) => res.json())
      .then((data) => setQuote(data.quote));
  }, []);

  if (!quote) return <div>Loading quote...</div>;

  return (
    <div className="widget-card">
      <h3>💭 Thought of the Day</h3>
      <p>"{quote.body}"</p>
      <p style={{ textAlign: "right", fontStyle: "italic" }}>— {quote.author}</p>
    </div>
  );
}
export default QuoteWidget