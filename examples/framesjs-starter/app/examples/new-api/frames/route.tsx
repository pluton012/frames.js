/* eslint-disable react/jsx-key */
import { Button } from "@frames.js/next";
import { frames } from "./frames";

const handleRequest = frames(async ({ clickedButton, message }) => {
  return {
    image: (
      <span>
        Hello there: {clickedButton ? "✅" : "❌"}
        {message?.inputText ? `, Typed: ${message?.inputText}` : ""}
      </span>
    ),
    buttons: [
      <Button action="post">Click me</Button>,
      <Button action="post" target="/next">
        Next frame
      </Button>,
    ],
    textInput: "Type something!",
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
