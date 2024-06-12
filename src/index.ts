import { AwsClient } from "aws4fetch";
import { Env } from "worker-configuration";

/**
 * wrapper Response, return json response
 * @param data
 * @param status
 * @returns {Response}
 */
const wrapperResponse = (data: any, status: number = 200) => {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json"
    }
  });
}

async function handleGetRequest(request: Request, env: Env, client: any, options: { bucketName: string, objectName: string }): Promise<Response> {
  const objectURL = `https://${env.account_id}.r2.cloudflarestorage.com/${options.bucketName}/${options.objectName}`;
  const signedRequest = await client.sign(objectURL, {
      method: 'GET',
      headers: {
          ...request.headers,
          'User-Agent': undefined
      }
  });
  const response = await fetch(signedRequest);
  if (response.ok) {
      return new Response(response.body, {
          status: response.status,
          headers: response.headers
      });
  } else {
      const errorText = await response.text();
      return wrapperResponse({ msg: `Download failed: ${errorText}` }, response.status);
  }
}

async function handlePutRequest(request: Request, env: Env, client: any, options: { bucketName: string, objectName: string }): Promise<Response> {
  const objectURL = `https://${env.account_id}.r2.cloudflarestorage.com/${options.bucketName}/${options.objectName}`;
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
      return wrapperResponse({ msg: 'Upload successful', data: options.objectName });
  } else {
      const errorText = await response.text();
      return wrapperResponse({ msg: `Upload failed: ${errorText}`, data: options.objectName }, response.status);
  }
}

export default {
  async fetch(request, env: Env) {
    if (request.method !== "PUT" && request.method !== "GET") {
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

    // get object from bucket
    if (request.method === 'GET') {
      return handleGetRequest(request, env, client, { objectName, bucketName });
    }

    if (request.method === 'PUT') {
      return handlePutRequest(request, env, client, { objectName, bucketName });
    }
  }
} satisfies ExportedHandler;
