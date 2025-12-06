"use client";

import { useState } from "react";
import CryptoJS from "crypto-js";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface EncryptedProjectProps {
    encryptedContent: string;
}

export default function EncryptedProject({ encryptedContent }: EncryptedProjectProps) {
    const [password, setPassword] = useState("");
    const [decryptedContent, setDecryptedContent] = useState<string | null>(null);
    const [error, setError] = useState(false);

    const handleDecrypt = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Logic from legacy mcommon.js
            // var content = CryptoJS.AES.decrypt(document.getElementById("encrypt-blog").innerHTML.trim(), pass);
            // content = content.toString(CryptoJS.enc.Utf8);
            // content = decodeBase64(content);
            // content = unescape(content);

            const decryptedBytes = CryptoJS.AES.decrypt(encryptedContent.trim(), password);
            let content = decryptedBytes.toString(CryptoJS.enc.Utf8);

            if (!content) {
                throw new Error("Decryption failed");
            }

            // decodeBase64 logic: CryptoJS.enc.Base64.parse(content); CryptoJS.enc.Utf8.stringify(content);
            const base64Parsed = CryptoJS.enc.Base64.parse(content);
            content = CryptoJS.enc.Utf8.stringify(base64Parsed);

            // Polyfill for deprecated unescape() function used in legacy code
            // unescape() decodes both %xx sequences and %uxxxx Unicode sequences
            const unescapeContent = (str: string): string => {
                // First, handle %uxxxx Unicode sequences (e.g., %u201C for smart quotes)
                str = str.replace(/%u([0-9A-Fa-f]{4})/g, (match, hex) => {
                    return String.fromCharCode(parseInt(hex, 16));
                });

                // Then, handle %xx sequences (e.g., %20 for space)
                str = str.replace(/%([0-9A-Fa-f]{2})/g, (match, hex) => {
                    return String.fromCharCode(parseInt(hex, 16));
                });

                return str;
            };

            content = unescapeContent(content);

            setDecryptedContent(content);
            setError(false);
        } catch (err) {
            console.error(err);
            setError(true);
        }
    };

    if (decryptedContent) {
        return (
            <article className="prose prose-lg prose-slate max-w-none 
                prose-headings:font-bold prose-headings:text-gray-900
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-700 prose-p:leading-relaxed
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-ul:my-4 prose-li:text-gray-700
                prose-img:rounded-lg prose-img:shadow-md">
                <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        h3: ({ node, ...props }) => <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4" {...props} />,
                        p: ({ node, ...props }) => <p className="text-gray-700 leading-relaxed my-4" {...props} />,
                        ul: ({ node, ...props }) => <ul className="list-disc pl-6 my-4 space-y-2" {...props} />,
                        li: ({ node, ...props }) => <li className="text-gray-700" {...props} />,
                        strong: ({ node, ...props }) => <strong className="font-semibold text-gray-900" {...props} />,
                        a: ({ node, ...props }) => <a className="text-blue-600 hover:underline" {...props} />,
                        img: ({ node, ...props }) => <img className="rounded-lg shadow-md my-6" {...props} />,
                    }}
                >
                    {decryptedContent}
                </ReactMarkdown>
            </article>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center py-20">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md border border-gray-200 text-center">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Please enter the password to read.</h3>
                <form onSubmit={handleDecrypt} className="space-y-4">
                    <div className="relative">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all"
                            placeholder="Password"
                            autoFocus
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium"
                    >
                        Unlock
                    </button>
                </form>
                {error && (
                    <p className="mt-4 text-red-600 text-sm">Incorrect password!</p>
                )}
            </div>
        </div>
    );
}
