// https://velog.io/@leehaeun0/craco-%EB%A5%BC-%ED%86%B5%ED%95%B4-tsconfig.json-%EC%97%90-path-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0
const CracoAlias = require('craco-alias');

const emotionPresetOptions = {};

const emotionBabelPreset = require('@emotion/babel-preset-css-prop').default(
    undefined,
    emotionPresetOptions
);

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                baseUrl: './src',
                tsConfigPath: './tsconfig.paths.json',
                debug: false, // true면 실행은 X
            },
        },
    ],
    babel: {
        plugins: [...emotionBabelPreset.plugins],
    },
};
