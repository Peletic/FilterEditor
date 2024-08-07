import {Metadata} from "next";
import "./globals.css"
import HeadElement from "@/src/components/HeadElement/HeadElement";

export const metadata: Metadata = {
    title: "Filter Editor",
    description: "if ugly met boring",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={"flex h-full w-full flex-col"}>
        <HeadElement/>
        {children}
        </body>
        </html>
    );
}