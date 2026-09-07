// ドキュメント（HTML）が完全に読み込まれたら実行
document.addEventListener('DOMContentLoaded', () => {
    
    // お問い合わせフォームの送信イベントをキャッチ
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // 本来のページリロード（送信動作）を一時的に止める
            event.preventDefault();
            
            // 入力された値を取得
            const school = document.getElementById('school').value;
            const name = document.getElementById('name').value;
            
            // 送信完了のアラートを表示（擬似的なもの）
            alert(`ありがとうございます！\n${school} の ${name} 様のお問い合わせを受け付けました。\n`);
            
            // フォームを空にする
            contactForm.reset();
        });
    }
});