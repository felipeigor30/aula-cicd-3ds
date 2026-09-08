# Aula CI/CD - Front-end

Projeto simples para demonstrar uma esteira CI/CD usando GitHub Actions.

## O que acontece quando fazemos push na main?

1. GitHub baixa o código
2. Instala o Node.js
3. Instala as dependências
4. Executa os testes
5. Gera o build
6. Publica no GitHub Pages

## Rodar localmente

```bash
npm install
npm run dev
```

## Testar

```bash
npm test
```

## Gerar build

```bash
npm run build
```

## CI/CD

O arquivo da esteira está em:

`.github/workflows/ci-cd.yml`

## GitHub Pages

No repositório do GitHub:

Settings → Pages → Source → GitHub Actions
