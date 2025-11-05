export const metadata = {
  title: "株式会社ねこの杜｜抑止型安全管理システム",
  description: "監視しないで守る。AI×IoT×暗号化通信を統合した非保存設計の抑止型安全管理システム。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
