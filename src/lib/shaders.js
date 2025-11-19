export const vertexShader = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

export const fragmentShader = `
    uniform sampler2D uTexture;
    uniform vec2 uResolution;
    uniform vec2 uTextureSize;
    uniform vec2 uMouse;
    uniform float uParallaxStrength;
    uniform float uDistortionMultiplier;
    uniform float uGlassStrength;
    uniform float uStripesFrequency;
    uniform float uGlassSmoothness;
    uniform float uEdgePadding;

    varying vec2 vUv;

    vec2 getCoverUV(vec2 uv, vec2 textureSize) {
        vec2 s = uResolution / textureSize;
        float scale = max(s.x, s.y);
        vec2 scaledSize = textureSize * scale;
        vec2 offset = (uResolution - scaledSize) * 0.5;
        return (uv * uResolution - offset) / scaledSize;
    }

    float displacement(float x, float num_stripes, float strength) {
        float modulus = 1.0 / num_stripes;
        return mod(x, modulus) * strength;
    }

    float fractalGlass(float x) {
        float d = 0.0;
        for (int i = -5; i <= 5; i++) {
            d += displacement(x + float(i) * uGlassSmoothness, uStripesFrequency, uGlassStrength);
        }
        return x + d / 11.0;
    }

    float smoothEdge(float x, float padding) {
        float edge = padding;
        if (x < edge) return smoothstep(0.0, edge, x);
        if (x > 1.0 - edge) return smoothstep(1.0, 1.0 - edge, x);
        return 1.0;
    }

    void main() {
        vec2 uv = vUv;
        float originalX = uv.x;
        float edgeFactor = smoothEdge(originalX, uEdgePadding);
        float distortedX = fractalGlass(originalX);

        uv.x = mix(originalX, distortedX, edgeFactor);
        float distortionFactor = uv.x - originalX;

        float parallaxDirection = -sign(0.5 - uMouse.x);
        vec2 parallaxOffset = vec2(
            parallaxDirection * abs(uMouse.x - 0.5) * uParallaxStrength * (1.0 + abs(distortionFactor) * uDistortionMultiplier),
            0.0
        );
        parallaxOffset *= edgeFactor;

        uv += parallaxOffset;
        vec2 coverUV = clamp(getCoverUV(uv, uTextureSize), 0.0, 1.0);

        gl_FragColor = texture2D(uTexture, coverUV);
    }
`;
