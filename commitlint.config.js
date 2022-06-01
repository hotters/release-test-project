module.exports = {
  // parserPreset: "conventional-changelog-conventionalcommits",
  rules: {
    // "body-leading-blank": [1, "always"],
    // "body-max-line-length": [2, "always", 100],
    // "footer-leading-blank": [1, "always"],
    // "footer-max-line-length": [2, "always", 100],
    // "header-max-length": [2, "always", 100],
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "type-enum": [2, "always", ["fix", "feat", "breaking", "docs"]],
  },
  prompt: {
    questions: {
      type: {
        description: "Select the type of change that you're committing",
        enum: {
          feat: {
            description: "A new feature",
            title: "Features",
            emoji: "✨",
          },
          fix: {
            description: "A bug fix",
            title: "Bug Fixes",
            emoji: "🐛",
          },
          docs: {
            description: "Documentation only changes",
            title: "Documentation",
            emoji: "📖",
          },
          breaking: {
            description: "A code change that improves performance",
            title: "Breaking Change",
            emoji: "⚡️",
          },
        },
      },
      subject: {
        description:
          "Write a short, imperative tense description of the change",
      },
    },
  },
};

const format = require('@commitlint/format').default;

const output = format(
  {
    valid: false,
    errorCount: 1,
    warningCount: 1,
    results: [
      {
        errors: [
          {
            level: 2,
            name: 'subject-empty',
            message: 'Format commit messages: {fix|feat|breaking|docs}: <commit message>  e.g. feat: my awesome feature',
          },
          {
            level: 2,
            name: 'type-empty',
            message: 'Format commit messages: {fix|feat|breaking|docs}: <commit message>  e.g. feat: my awesome feature',
          },
        ],
      },
    ],
  },
  {
    color: false,
  }
);

process.stdout.write(output);