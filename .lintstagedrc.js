const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`

module.exports = {
  '{src,pages,styles}/**/*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '{src,pages,styles}/**/*.{css,scss}': 'stylelint --fix',
  '*.{css,scss,js,ts,jsx,tsx,md,yml}': 'prettier --write',
}
