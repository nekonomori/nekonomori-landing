import { useState } from "react";

export default function NekonomoriOfficial() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-2xl bg-[#0f2a4d]" />
            <div className="flex flex-col leading-tight">
              <span className="font-semibold tracking-wide">株式会社ねこの杜</span>
              <span className="text-[11px] text-gray-500">Nekonomori Inc.</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:opacity-80">技術概要</a>
            <a href="#benefits" className="hover:opacity-80">社会的意義</a>
            <a href="#usecases" className="hover:opacity-80">導入領域</a>
            <a href="#patent" className="hover:opacity-80">出願情報</a>
            <a href="#contact" className="hover:opacity-80">お問い合わせ</a>
          </nav>
          <a href="#contact" className="rounded-2xl border px-3 py-1.5 text-sm hover:bg-[#0f2a4d] hover:text-white transition">資料請求</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-[#e8eef7]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              監視に依らない、<br className="hidden md:block"/>安全の公共基盤。
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-700">抑止型安全管理システム — プライバシーを侵さず、安全を実装する。<br/>Privacy‑Preserving Safety Infrastructure.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-xl bg-[#0f2a4d] text-white px-5 py-3 text-sm hover:opacity-90">行政向け資料を請求</a>
              <a href="#patent" className="rounded-xl border px-5 py-3 text-sm hover:bg-gray-50">出願情報を見る</a>
            </div>
            <div className="mt-5 text-xs text-gray-500">想定：教育・医療・防災・交通安全／公共空間等</div>
          </div>
          <div className="rounded-3xl border p-2 shadow-sm bg-white">
            <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 grid place-items-center text-gray-500">
              システム概略図（ダミー）
            </div>
            <div className="p-4 text-sm text-gray-600">
              非保存設計／三系統トリガ（AI・人的・外部設備）／アクティブセーフ（光・音）／公的証拠保全
            </div>
          </div>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 text-sm text-gray-600 flex flex-wrap items-center gap-x-6 gap-y-2">
          <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#0f2a4d]"/>出願番号：特願2025-185952</div>
          <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#0f2a4d]"/>出願日：2025年11月4日</div>
          <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#0f2a4d]"/>発明名：抑止型安全管理システム ほか</div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 border-t">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">技術概要</h2>
            <p className="leading-7 text-gray-700">
              本システムは、平常時の記録保存を行わない<strong>非保存設計</strong>を採用し、異常検知時のみ短期記録・暗号化・第三者保全を行うことで、プライバシー保護と安全の両立を図ります。作動は<strong>三系統トリガ</strong>（AI解析／人的操作／外部設備信号）の一致で制御し、誤作動を抑制します。
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-sm">
              <li className="rounded-xl border p-3">匿名化処理（輪郭抽出・モザイク・スケルトン化）</li>
              <li className="rounded-xl border p-3">アクティブセーフ：光・音で抑止通知</li>
              <li className="rounded-xl border p-3">多重通信：LoRa／5G 等</li>
              <li className="rounded-xl border p-3">TTL削除・アクセスログ管理</li>
            </ul>
          </div>
          <div className="rounded-3xl border p-6">
            <h3 className="font-semibold mb-3">導入プロセス</h3>
            <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700">
              <li>要件ヒアリング（利用環境・個人情報配慮の確認）</li>
              <li>PoC（試験導入）：小規模エリアでの有効性検証</li>
              <li>本導入：スマートポール／施設機器と連携</li>
              <li>運用：月次レポート（保存なし統計／異常時のみ証拠保全）</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Social benefit */}
      <section id="benefits" className="py-16 border-t bg-[#f7f9fc]">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold">社会的意義</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {title:"プライバシーと安全の両立",desc:"常時録画せず、必要時のみ暗号化・保全。"},
              {title:"未然防止",desc:"心理的抑止と段階制御で発生前にブレーキ。"},
              {title:"公共実装の適合性",desc:"教育・医療・防災・交通安全等に適合。"},
            ].map((b,i)=> (
              <div key={i} className="rounded-2xl border p-5 shadow-sm bg-white">
                <div className="text-lg font-semibold">{b.title}</div>
                <div className="mt-2 text-sm text-gray-700">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section id="usecases" className="py-16 border-t">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold">導入領域</h2>
          <div className="mt-6 grid md:grid-cols-4 gap-4 text-sm">
            {["教育（教室・スクールバス）","医療・介護（転倒・徘徊）","文化財・観光地","プライバシー空間（更衣室 等）","交通安全（横断・視覚支援）","公共交通・駅・バス停","自治体の防犯・防災DX","住宅：盗撮・盗聴の抑止"].map((t,i)=> (
              <div key={i} className="rounded-xl border p-4">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Patent info */}
      <section id="patent" className="py-16 border-t">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold">出願情報</h2>
            <div className="mt-4 text-sm space-y-1">
              <div>出願番号：特願2025-185952</div>
              <div>出願日　：2025年11月4日</div>
              <div>発明の名称：抑止型安全管理システム、その記録媒体及びそれを利用したスマートポール</div>
              <div className="text-gray-600">出願公開予定：2027年5月（出願後1年6ヶ月）</div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a className="rounded-xl border px-4 py-2" href="#">出願概要PDF（準備中）</a>
              <a className="rounded-xl border px-4 py-2" href="#">技術ハンドアウト（準備中）</a>
            </div>
          </div>
          <div className="rounded-3xl border p-6">
            <h3 className="font-semibold">キーハイライト</h3>
            <ul className="mt-3 space-y-2 text-sm list-disc pl-5 text-gray-700">
              <li>平常時は非保存、異常時のみ短期暗号化・公的証拠保管</li>
              <li>AI・人的・外部設備の三系統トリガで信頼性を確保</li>
              <li>教育・医療・防災・交通安全に適用可能</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 border-t">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold">お問い合わせ / Contact</h2>
          <p className="mt-2 text-sm text-gray-700">行政・助成金・実証（PoC）に関するお問い合わせ・資料請求はこちらから。</p>
          {!sent ? (
            <form className="mt-6 grid md:grid-cols-2 gap-4" onSubmit={(e)=>{e.preventDefault(); setSent(true);}}>
              <input required placeholder="ご担当者名 / Name" className="rounded-xl border px-4 py-3 outline-none" />
              <input required placeholder="所属・自治体名 / Organization" className="rounded-xl border px-4 py-3 outline-none" />
              <input required type="email" placeholder="メールアドレス / Email" className="rounded-xl border px-4 py-3 outline-none md:col-span-2" />
              <textarea required placeholder="お問い合わせ内容 / Message" rows={5} className="rounded-xl border px-4 py-3 outline-none md:col-span-2" />
              <div className="md:col-span-2 flex items-center justify-between">
                <label className="text-xs text-gray-600 flex items-center gap-2">
                  <input type="checkbox" required className="accent-[#0f2a4d]" /> 個人情報の取扱いに同意します / I agree to the privacy policy
                </label>
                <button className="rounded-xl bg-[#0f2a4d] text-white px-6 py-3 text-sm hover:opacity-90">送信 / Send</button>
              </div>
            </form>
          ) : (
            <div className="mt-6 rounded-2xl border p-6 bg-gray-50">送信ありがとうございました。担当よりご連絡いたします。/ Thank you for your message.</div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-gray-500 flex flex-wrap items-center gap-3 justify-between">
          <div>© {new Date().getFullYear()} 株式会社ねこの杜 / Nekonomori Inc.</div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:opacity-80">プライバシーポリシー（準備中）</a>
            <span>・</span>
            <a href="#contact" className="hover:opacity-80">お問い合わせ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
