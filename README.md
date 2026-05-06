# LP — Pós-graduação em Estética Médica · IMS

Landing page da Turma I (2026) construída com **Vite + React 18**.

## Pré-requisitos

- [Node.js](https://nodejs.org) **18 ou superior**
- npm (já vem com o Node)

Verifique a instalação:

```bash
node -v
npm -v
```

## Como rodar localmente

1. Abra a pasta do projeto no VS Code (`File → Open Folder…`)
2. Abra o terminal integrado (`Ctrl + '` ou `View → Terminal`)
3. Instale as dependências:

   ```bash
   npm install
   ```

4. Suba o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse [http://localhost:5173](http://localhost:5173)

O Vite faz **hot-reload**: qualquer alteração nos arquivos `src/` reflete automaticamente no navegador.

## Build de produção

```bash
npm run build      # gera a pasta dist/ otimizada
npm run preview    # serve a build localmente para conferir
```

A pasta `dist/` é o que você sobe para a hospedagem (Vercel, Netlify, S3, etc.).

## Estrutura

```
vite-app/
├── index.html              # entrada do Vite (carrega /src/main.jsx)
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx            # bootstrap do React
    ├── App.jsx             # composição das seções
    ├── styles.css          # design system + componentes
    └── components/
        ├── Topbar.jsx
        ├── Hero.jsx
        ├── Form.jsx        # formulário reutilizável (variant="light"|"dark")
        ├── MidSections.jsx # Dor, Manifesto, Dados
        ├── MainSections.jsx# Formação, Módulos, Docentes, Cronograma
        └── Final.jsx       # FinalForm + FAQ + Footer + Thanks
```

## Editando o conteúdo

- **Textos das seções:** abra o arquivo correspondente em `src/components/`
- **Cores e tipografia:** `src/styles.css` (no topo, dentro de `:root`)
- **Lista de módulos:** `MODULES` e `MODULE_TAGS` em `MainSections.jsx`
- **Cronograma:** array `SCHEDULE` em `MainSections.jsx`
- **FAQ:** array `FAQ` em `Final.jsx`
- **Redirecionamento WhatsApp pós-envio:** descomente o bloco `window.open(...)` em `App.jsx` (`closeThanks`) e troque `SEUNUMERO` pelo número real (formato `5511999999999`).

## Dúvidas comuns

**`npm install` deu erro de permissão** → não rode com `sudo`. Tente:

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Porta 5173 ocupada** → o Vite escolhe a próxima livre automaticamente, basta olhar a URL no terminal.

**Quero TypeScript** → renomeie os arquivos para `.tsx`, instale `typescript` e adicione um `tsconfig.json`. Não é obrigatório.
