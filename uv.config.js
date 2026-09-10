const hostname = window.location.hostname;

// Automatically configures Ultraviolet to route traffic through a public, active proxy node
self.__uv$config = {
    prefix: '/service/',
    bare: 'https://bare.dev', // A free, public backend traffic router
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://jsdelivr.net',
    bundle: 'https://jsdelivr.net',
    config: '/uv.config.js',
    sw: 'https://jsdelivr.net',
};



