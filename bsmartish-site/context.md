# BSMARTISH Website - Context & Session Memory

## Workflow Acordado
- Separação entre tarefas visuais e de desenvolvimento
- Primeiro fazemos todas as tarefas visuais de todas as páginas (do início ao fim)
- Depois voltamos à primeira página para fazer o Dev até à última
- Regra Estrita: Para cada tarefa [Visual], desenha diretamente no Paper usando o MCP e para para validação

## Estado Atual do Projeto
- Next.js 16.2.4 inicializado em `bsmartish-site/`
- Template de demonstração removido (SVGs do Vercel/Next, conteúdo placeholder da page.js, estilos Geist)
- Fontes registadas via `next/font/local` em `app/layout.js`:
  - Radnika Medium → CSS var `--font-radnika` → Tailwind `font-heading`
  - Garet Heavy → CSS var `--font-garet` → Tailwind `font-subheading`
  - Aileron (Regular 400 / SemiBold 600 / Bold 700) → CSS var `--font-aileron` → Tailwind `font-body`
- Cores da marca definidas em `app/globals.css` como CSS vars e tokens Tailwind:
  - Slate Blue `#6b87a4`, Canvas White `#f8f8f8`, Deep Urban `#202831`, Slate Gray `#75797c`
- Build de produção a funcionar sem erros
- Nenhuma página construída ainda

## Próxima Tarefa
- Tarefa 01: Header (Visual)

## Instruções Específicas do Header
- Referências Visuais:
  - Estilo do Menu: ficheiro `public/inspo.templates/referencia.menu`
  - Logotipo: ficheiro `public/images/logo.png`
- Fundo: Cor Slate Blue (#6b87a4)
- Layout: NÃO usar menu hambúrguer — links todos visíveis horizontalmente
- Tipografia: Fonte Aileron em branco para o menu, Radnika para o logotipo
- Links: Home, About Us, Portfolio, Contact
- Estado Ativo: sublinhado elegante no link "Home"
- Nota: Esta estrutura é a base, mas poderão ser feitos ajustes pontuais

## Correções à Interpretação do Spec

### Home - Impact Widget
- NÃO é um contador de apartamentos
- É um widget que mostra: número de projetos já feitos pela empresa + valor total desses projetos + percentagem de clientes satisfeitos

### Portfolio
- NÃO é uma galeria de apartamentos
- É uma galeria de imóveis em geral
- Cada card deve ter uma ligação para a página individual do imóvel

### Páginas Individuais
- São páginas de imóveis, não de apartamentos

### Footer
- Os elementos listados no spec são apenas exemplos
- Manter mente aberta em relação aos elementos a integrar

### Idioma
- O website é inteiramente em inglês

## Regras de Sessão
- No início de cada sessão: lê o spec.md e o context.md antes de fazer qualquer coisa
- No fim de cada sessão: atualiza o context.md com o que foi feito e os próximos passos
