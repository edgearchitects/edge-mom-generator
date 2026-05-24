export default async (request, context) => {
  const response = await context.next();
  const key = Deno.env.get("ANTHROPIC_API_KEY") || "";
  if (!key) return response;

  const html = await response.text();
  const injected = html.replace(
    'window.__ANTHROPIC_KEY__ || \'\'',
    `window.__ANTHROPIC_KEY__ || '${key}'`
  );
  return new Response(injected, {
    status: response.status,
    headers: response.headers,
  });
};
