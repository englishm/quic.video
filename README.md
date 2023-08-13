# Media over QUIC

Media over QUIC (MoQ) is a live media delivery protocol utilizing QUIC streams.
See the [Warp draft](https://datatracker.ietf.org/doc/draft-lcurley-warp/).

This repository is a Typescript library that supports both contribution (ingest) and distribution (playback).
It requires a server, such as [moq-rs](https://github.com/kixelated/moq-rs).

## Setup

### Node

Install dependencies using `npm`:

```
npm install
```

### Certificates

Use [mkcert](https://github.com/FiloSottile/mkcert) to generate a self-signed certificate.
This is merely for convinence to avoid TLS errors when using parcel.

```
npm run cert
```

## Usage

Host a simple demo on `https://localhost:4444`.

```
npm run serve
```

This a requires a [MoQ server](https://github.com/kixelated/moq-rs) running on `https://localhost:4443`.

## License

Licensed under either:

 * Apache License, Version 2.0, ([LICENSE-APACHE](LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
 * MIT license ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)
