document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      // 1. 一時的に通常の送信を止める
      event.preventDefault();

      // 2. 入力された値を取得
      const school = document.getElementById('school').value;
      const name = document.getElementById('name').value;

      // 3. アラートを表示（「OK」を押すまでここで一時停止します）
      alert(`ありがとうございます！\n${school} の ${name} 様のお問い合わせを受け付けました。\n`);

      // 4. Formspreeへ実際に送信を実行する（追加）
      contactForm.submit();
    });
  }
});