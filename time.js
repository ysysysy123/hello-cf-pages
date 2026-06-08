export async function onRequest(context) {
    const currentTime = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
    
    return new Response(JSON.stringify({
        time: currentTime,
        message: "来自 Cloudflare Functions 的问候！"
    }), {
        headers: { "Content-Type": "application/json" }
    });
}
