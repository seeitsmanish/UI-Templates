"use client";
import Appbar from "./Appbar";

const BackgroundColor = {
  primary: "bg-blue-100",
  secondary: "bg-blue-100",
};

const TextColor = {
  primary: "text-black",
  secondary: "text-gray-400",
};

const ButtonColor = {
  primary: "bg-blue-600",
  hover: "bg-blue-800",
  border: "border-blue-600",
};

const appConfig = {
  BackgroundColor,
  TextColor,
  ButtonColor,
};

export default function page() {
  return <Appbar appConfig={appConfig} />;
}
