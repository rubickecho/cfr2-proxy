import { AwsClient } from "aws4fetch";
import { Env } from "worker-configuration";

export default {
  async fetch(request, env: Env) {
    if (request.method !== "PUT") {
        return new Response("Hello, World!", { status: 200 });
    }

    const client = new AwsClient({
      accessKeyId: env.access_key_id,
      secretAccessKey: env.secret_access_key
    });
    // get bucketName, objectName from request path
    // e.g /my-bucket/my-object
    const url = new URL(request.url);
    const bucketName = url.pathname.split('/')[1];
    const objectName = url.pathname.split('/').slice(2).join('/');
    if (!bucketName || !objectName) {
        return new Response("Invalid request", { status: 400 });
    }

    if (request.method === 'PUT') {
        const objectURL = `https://${env.account_id}.r2.cloudflarestorage.com/${bucketName}/${objectName}`;
        const signedRequest = await client.sign(objectURL, {
          method: 'PUT',
          headers: {
            ...request.headers,
            'User-Agent': undefined
          },
          body: request.body
        });
        const response = await fetch(signedRequest);

        if (response.ok) {
            return new Response('Upload successful', { status: 200 });
        } else {
            const errorText = await response.text();
            return new Response(`Upload failed: ${errorText}`, { status: response.status });
        }
    }
  }
} satisfies ExportedHandler;
