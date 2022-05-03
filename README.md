1. set up git origin
2. set up npmrc
3. add in `package.json`

```json
"repository": {
  "url": "D:/Work/git_server/semantic.git"
},
"publishConfig": {
  "registry": "http://localhost:4873"
},
"release": {
  "branches": [
    "master"
  ],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git"
  ]
}
```
