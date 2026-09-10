self.__uv$config = {
    prefix: '/studdy-app/service/',
    bare: 'https://tomp.app',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://jsdelivr.net',
    bundle: 'https://jsdelivr.net',
    config: '/studdy-app/uv.config.js',
    sw: '/studdy-app/uv.sw.js',
};
