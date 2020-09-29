exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
  }) => {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.less$/,
            use: [
              loaders.miniCssExtract(),
              loaders.css({ importLoaders: 1 }),
              loaders.postcss(),
              `less-loader`,
            ],
          },
        ],
        loaders: [
            { test: /\.css$/, loader: 'typings-for-css-modules-loader?modules' },
            { test: /\.scss$/, loader: 'typings-for-css-modules-loader?modules&sass' }
        ]
      },
      plugins: [
        plugins.define({
          __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
        }),
        new webpack.WatchIgnorePlugin([
            /css\.d\.ts$/
        ])
      ],
    })
  }