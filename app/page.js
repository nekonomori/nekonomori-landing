'use client';
import { useState } from "react";

export default function Page() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-2xl bg-black" />
            <div className="font-semibold">株式会社ねこの杜</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:opacity-80">技術概要</a>
            <a href="#benefits" className="hover:opacity-80">社会的意義</a>
            <a href="#usecases" className="hover:opacity-80">導入領域</a>
            <a href="#patent" className="hover:opacity-80">出願情報</a>
            <a href="#contact" className="hover:opacity-80">お問い合わせ</a>
          </nav>
          <a href="#contact" className="rounded-2xl border px-3 py-1.5 text-sm hover:bg-black hover:text-white transition">資料請求</a>
        </div>
      </header>

      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              見ないことで、守る。<br />
              <span className="text-gray-600">抑止型安全管理システム</span>
            </h1>
            <p className="mt-5 text-lg leading-8 text-gray-700">
              監視や常時録画に依存しない、AI×IoT×暗号化通信の統合システム。<br />
              平常時は非保存。異常時のみ短期暗号化・証拠保全。プライバシーと安全を両立します。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-xl bg-black text-white px-5 py-3 text-sm hover:opacity-90">行政向け資料を請求</a>
              <a href="#patent" className="rounded-xl border px-5 py-3 text-sm hover:bg-gray-50">出願情報を見る</a>
            </div>
            <div className="mt-4 text-xs text-gray-500">※ 教育・医療・防災・交通安全等での社会実装を想定</div>
          </div>
          <div className="rounded-3xl border p-2 shadow-sm">
            <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 grid place-items-center text-gray-500">
              システム概略図（ダミー）
            </div>
            <div className="p-4 text-sm text-gray-600">
              非保存設計／三系統トリガ（AI・人的・外部設備）／アクティブセーフ（光・音警告）／公的証拠保管
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 border-t">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">技術概要</h2>
            <p className="leading-7 text-gray-700">
              本システムは、監視のための映像・音声を平常時に保存しない<strong>非保存設計</strong>を採用。異常検知時のみ短期記録・暗号化し、第三者機関での<strong>証拠保全</strong>を行います。作動は<strong>三系統トリガ</strong>（AI解析／人的操作／外部設備信号）の一致で制御し、誤作動を抑制します。
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-sm">
              <li className="rounded-xl border p-3">匿名化処理（輪郭抽出・モザイク・スケルトン化）</li>
              <li className="rounded-xl border p-3">アクティブセーフ：光・音で抑止通知</li>
              <li className="rounded-xl border p-3">通信：LoRa／5G 等で多重送信</li>
              <li className="rounded-xl border p-3">TTL削除・アクセスログ管理</li>
            </ul>
          </div>
          <div className="rounded-3xl border p-6">
            <h3 className="font-semibold mb-3">導入に向けた基本パッケージ</h3>
            <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700">
              <li>要件ヒアリング（利用環境・個人情報配慮の確認）</li>
              <li>PoC（試験導入）：小規模エリアでの有効性検証</li>
              <li>本導入：スマートポール／施設機器と連携</li>
              <li>運用：月次レポート（保存なし統計／異常時のみ証拠保全）</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-16 border-t">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold">社会的意義</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {title:"プライバシーと安全の両立",desc:"常時録画せず、必要時のみ暗号化。"},
              {title:"未然防止",desc:"心理的抑止と段階制御で発生前にブレーキ。"},
              {title:"公共実装の適合性",desc:"教育・医療・防災・交通安全に適合。"},
            ].map((b,i)=> (
              <div key={i} className="rounded-2xl border p-5 shadow-sm">
                <div className="text-lg font-semibold">{b.title}</div>
                <div className="mt-2 text-sm text-gray-700">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section id="contact" className="py-20 border-t">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold">お問い合わせ</h2>
          <p className="mt-2 text-sm text-gray-700">行政・助成金・実証（PoC）に関するお問い合わせ・資料請求はこちらから。</p>
          {!sent ? (
            <form className="mt-6 grid md:grid-cols-2 gap-4" onSubmit={(e)=>{e.preventDefault(); setSent(true);}}>
              <input required placeholder="ご担当者名" className="rounded-xl border px-4 py-3 outline-none" />
              <input required placeholder="所属・自治体名" className="rounded-xl border px-4 py-3 outline-none" />
              <input required type="email" placeholder="メールアドレス" className="rounded-xl border px-4 py-3 outline-none md:col-span-2" />
              <textarea required placeholder="お問い合わせ内容" rows={5} className="rounded-xl border px-4 py-3 outline-none md:col-span-2" />
              <div className="md:col-span-2 flex items-center justify-between">
                <label className="text-xs text-gray-600 flex items-center gap-2">
                  <input type="checkbox" required className="accent-black" /> 個人情報の取扱いに同意します
                </label>
                <button className="rounded-xl bg-black text-white px-6 py-3 text-sm hover:opacity-90">送信</button>
              </div>
            </form>
          ) : (
            <div className="mt-6 rounded-2xl border p-6 bg-gray-50">送信ありがとうございました。担当よりご連絡いたします。</div>
          )}
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-gray-500 flex flex-wrap items-center gap-3 justify-between">
          <div>© {new Date().getFullYear()} 株式会社ねこの杜</div>
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
