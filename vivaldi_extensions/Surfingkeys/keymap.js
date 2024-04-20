//surfingkeysのキーマップを設定するファイル

api.mapkey('<cm>', 'put title and URL to clipboard', function() {
    const title = document.title;
    const url = location.href;
    const text = `[${title}](${url})`;

    navigator.clipboard.writeText(text).then(() => {
        console.log('success');
    }).catch((err) => {
        console.error(err);
    });
});
