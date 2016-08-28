var mat4 = require('gl-mat4')

function drawCommon (regl, flipY) {
  return regl({
    context: {
      view: (context, { tick }) => {
        const t = tick * 0.05
        return mat4.lookAt([],
          [30 * Math.cos(t), 2.5, 30 * Math.sin(t)],
          [0, 2.5, 0],
          [0, 1, 0])
      }
    },
    frag: `
      precision mediump float;
      uniform samplerCube envmap;
      varying vec3 reflectDir;
      void main () {
        gl_FragColor = textureCube(envmap, reflectDir);
      }`,
    uniforms: {
      envmap: regl.prop('cube'),
      view: regl.context('view'),
      projection: ({viewportWidth, viewportHeight}) =>
        mat4.perspective([],
          (flipY ? -1 : 1) * (Math.PI / 4),
          (flipY ? -1 : 1) * (viewportWidth / viewportHeight),
          0.01,
          1000),
      invView: ({view}) => mat4.invert([], view)
    }
  })
}

module.exports = drawCommon