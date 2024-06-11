# cfr2-proxy

This is a Cloudflare R2 worker project named `cfr2-proxy`.

## Description

This project is designed to proxy requests to Cloudflare R2 storage. It uses AWS signature version 4 for authentication.

## Project Structure

The main entry point of the application is [`src/index.ts`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Ftangliangcheng%2Fworkspace%2Fgithub%2Fcfr2_proxy%2Fsrc%2Findex.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/tangliangcheng/workspace/github/cfr2_proxy/src/index.ts"). The worker's configuration is defined in [`src/worker-configuration.d.ts`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Ftangliangcheng%2Fworkspace%2Fgithub%2Fcfr2_proxy%2Fsrc%2Fworker-configuration.d.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/tangliangcheng/workspace/github/cfr2_proxy/src/worker-configuration.d.ts"). The project configuration is in [`wrangler.toml`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Ftangliangcheng%2Fworkspace%2Fgithub%2Fcfr2_proxy%2Fwrangler.toml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/tangliangcheng/workspace/github/cfr2_proxy/wrangler.toml").

## Features

- Upload files to Cloudflare R2 storage.

## Setup

1. Clone the repository.
2. Install the dependencies with `npm install`.
3. Copy [`wrangler.toml.example`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Ftangliangcheng%2Fworkspace%2Fgithub%2Fcfr2_proxy%2Fwrangler.toml.example%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/tangliangcheng/workspace/github/cfr2_proxy/wrangler.toml.example") to [`wrangler.toml`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Ftangliangcheng%2Fworkspace%2Fgithub%2Fcfr2_proxy%2Fwrangler.toml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/tangliangcheng/workspace/github/cfr2_proxy/wrangler.toml") and fill in your Cloudflare account details and R2 bucket information.

## Development

To start the development server, run `npm run dev`.

## Deployment

To deploy the worker, run `npm run deploy`.

## Configuration

The worker requires the following environment variables:

- [`account_id`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Ftangliangcheng%2Fworkspace%2Fgithub%2Fcfr2_proxy%2Fsrc%2Fworker-configuration.d.ts%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Ftangliangcheng%2Fworkspace%2Fgithub%2Fcfr2_proxy%2Fsrc%2Fworker-configuration.d.ts%22%2C%22path%22%3A%22%2FUsers%2Ftangliangcheng%2Fworkspace%2Fgithub%2Fcfr2_proxy%2Fsrc%2Fworker-configuration.d.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A1%2C%22character%22%3A2%7D%5D "src/worker-configuration.d.ts"): Your Cloudflare account ID.
- [`access_key_id`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Ftangliangcheng%2Fworkspace%2Fgithub%2Fcfr2_proxy%2Fsrc%2Fworker-configuration.d.ts%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Ftangliangcheng%2Fworkspace%2Fgithub%2Fcfr2_proxy%2Fsrc%2Fworker-configuration.d.ts%22%2C%22path%22%3A%22%2FUsers%2Ftangliangcheng%2Fworkspace%2Fgithub%2Fcfr2_proxy%2Fsrc%2Fworker-configuration.d.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A2%2C%22character%22%3A2%7D%5D "src/worker-configuration.d.ts"): Your Cloudflare R2 access key ID.
- [`secret_access_key`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Ftangliangcheng%2Fworkspace%2Fgithub%2Fcfr2_proxy%2Fsrc%2Fworker-configuration.d.ts%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Ftangliangcheng%2Fworkspace%2Fgithub%2Fcfr2_proxy%2Fsrc%2Fworker-configuration.d.ts%22%2C%22path%22%3A%22%2FUsers%2Ftangliangcheng%2Fworkspace%2Fgithub%2Fcfr2_proxy%2Fsrc%2Fworker-configuration.d.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A3%2C%22character%22%3A2%7D%5D "src/worker-configuration.d.ts"): Your Cloudflare R2 secret access key.

These are set in the [`wrangler.toml`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Ftangliangcheng%2Fworkspace%2Fgithub%2Fcfr2_proxy%2Fwrangler.toml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/tangliangcheng/workspace/github/cfr2_proxy/wrangler.toml") file.

## Code Style

This project follows the TypeScript code style. The configuration is in [`.editorconfig`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Ftangliangcheng%2Fworkspace%2Fgithub%2Fcfr2_proxy%2F.editorconfig%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/tangliangcheng/workspace/github/cfr2_proxy/.editorconfig") and [`tsconfig.json`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Ftangliangcheng%2Fworkspace%2Fgithub%2Fcfr2_proxy%2Ftsconfig.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/tangliangcheng/workspace/github/cfr2_proxy/tsconfig.json").

## Testing

Currently, there are no tests specified for this project.

## License

This project is licensed under the ISC license.
