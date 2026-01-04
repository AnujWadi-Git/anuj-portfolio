import "./globals.css";
import React from "react";

export const metadata = {
  title: "Anuj Wadi",
  description: "Robotics & AI portfolio"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
