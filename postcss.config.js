module.exports = {
  plugins: [
    require('postcss-smart-import')({ /* ...options */ }),
    require('precss')({ /* ...options */ }),
    require('autoprefixer')({ /* ...options */ }),
    require('postcss-cssnext')(),
    require('postcss-apply')(),
    require('postcss-responsive-type')()
  ]
}