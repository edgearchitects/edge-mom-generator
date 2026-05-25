const https = require('https');

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: { message: 'API key not configured. Add ANTHROPIC_API_KEY to Netlify environment variables.' } })
    };
  }

  try {
    const body = JSON.parse(event.body);
    body.model = 'claude-sonnet-4-5';
    // Keep max_tokens low to ensure response fits within timeout
    body.max_tokens = 4000;

    const result = await new Promise((resolve, reject) => {
      const postData = JSON.stringify(body);
      const options = {
        hostname: 'api.anthropic.com',
        path: '/v1/messages',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData),
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01'
        },
        timeout: 25000
      };

      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve({ status: res.statusCode, body: data }));
      });

      req.on('timeout', () => {
        req.destroy();
        reject(new Error('Request timed out — please use the Read.ai Summary tab instead of the full transcript for faster results.'));
      });
      req.on('error', reject);
      req.write(postData);
      req.end();
    });

    return {
      statusCode: result.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: result.body
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: { message: err.message } })
    };
  }
};
