import type { Metadata } from "next";
//@ts-ignore
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import DisableDraftMode from "@/components/disableDraftMode";

export const metadata: Metadata = {
  title: "Shoprr - Your One-Stop Online Store",
  description: "Discover a wide range of products at unbeatable prices. Shop now and experience seamless online shopping with fast delivery and excellent customer service.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="en">
        <body>
          {(await draftMode()).isEnabled && (
            <>
              <DisableDraftMode />
              <VisualEditing />
            </>
          )}
          <main>
            <Header />
            {children}
          </main>

          <SanityLive />
        </body>
      </html>
    </ClerkProvider>
  );
}
