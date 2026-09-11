import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.html(`
    <h1>Hello Hono!</h1>

    <form method="post" action="/hello">
      <input
        type="text"
        name="username"
        placeholder="名前を入力してください"
      />

      <button type="submit">
        送信
      </button>
    </form>
  `)
})

app.post('/hello', async (c) => {
  const body = await c.req.parseBody()
  const rawUsername = body.username
  const username = Array.isArray(rawUsername)
    ? rawUsername[0] ?? ''
    : rawUsername ?? ''

  if (!username.trim()) {
    return c.html(`
      <h1>入力エラー</h1>

      <p>
        名前を入力してください。
      </p>

      <a href="/">
        戻る
      </a>
    `)
  }

  return c.html(`
    <h1>結果</h1>

    <p>
      こんにちは ${username} さん
    </p>

    <a href="/">
      戻る
    </a>
  `)
})

export default app