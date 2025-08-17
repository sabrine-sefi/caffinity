"use client";

import { tokens } from "../styles/tokens";

export default function TokenTest() {
  return (
    <div
      style={{
        backgroundColor: tokens.dark.bg,
        color: tokens.dark.text,
        padding: "16px",
        borderRadius: "8px",
      }}
    >
      Test Tokens
    </div>
  );
}
