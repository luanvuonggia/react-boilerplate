<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Vscode extensions.](#vscode-extensions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Vscode extensions.

- `Auto Import`
- `Auto Rename Tag`
- `EditorConfig for VS Code`
- `ES7 React/Redux/GraphQL/React-Native snippets`
- `Eslint`
- `GitLens`
- `npm Intellisense`
- `Path Autocomplete`
- `Path Intellisense`
- `Prettier`
- `SCSS Everywhere`
- `SCSS intellisense`

`settings.json`

```json
{
  "gitlens.advanced.messages": {
    "suppressGitMissingWarning": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "prettier.singleQuote": true,
  "terminal.integrated.profiles.windows": {
    "PowerShell": {
      "source": "PowerShell",
      "icon": "terminal-powershell"
    },
    "Command Prompt": {
      "path": [
        "${env:windir}\\Sysnative\\cmd.exe",
        "${env:windir}\\System32\\cmd.exe"
      ],
      "args": [],
      "icon": "terminal-cmd"
    },
    "Git Bash": {
      "path": ["C:\\Program Files\\Git\\bin\\bash.exe"],
      "source": "Git Bash",
      "icon": "terminal-bash"
    }
  },
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "terminal.external.windowsExec": "C:\\Program Files\\Git\\bin\\bash.exe",
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  "html-css-class-completion.includeGlobPattern": "**/*.{css,scss,jsx,html}",
  "html-css-class-completion.excludeGlobPattern": "{node_modules,doc,docs,.bundle,vendor,build,dist}/**",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "scss.scannerExclude": [
    "**/.git",
    "**/node_modules",
    "**/bower_components",
    "node_modules/**"
  ],
  "path-autocomplete.pathMappings": {
    "styles": "${folder}/src/styles"
  }
}
```
