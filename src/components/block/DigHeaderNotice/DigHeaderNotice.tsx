import r2wc from "@r2wc/react-to-web-component"

export default function DigHeaderNotice(){
  return (
    <div>
      <h1>重要</h1>
      <h1>2021年3月31日（水）月額チャンネル終了のお知らせ</h1>
      <p>お知らせ詳細</p>
    </div>
  )
}

const WebDigHeaderNotice = r2wc(DigHeaderNotice)

customElements.define("web-dig-header-notice", WebDigHeaderNotice)