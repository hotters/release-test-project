module.exports = {
  disableEmoji: false,
  format: "{type}: {emoji}{subject}",
  list: ["fix", "feat", "breaking", "docs"],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ["type", "subject"],
  scopes: [],
  types: {
    fix: {
      description: "A bug fix",
      emoji: "🐛",
      value: "fix",
    },
    feat: {
      description: "A new feature",
      emoji: "🎸",
      value: "feat",
    },
    breaking: {
      description: "A code change that improves performance",
      emoji: "⚡️",
      value: "breaking",
    },
    docs: {
      description: "Documentation only changes",
      emoji: "📖",
      value: "docs",
    },
    messages: {
      type: "Select the type of change that you're committing:",
      subject: "Write a short, imperative mood description of the change:\n",
      confirmCommit: "The packages that this commit has affected\n",
    },
  },
};
