
# BSMARTISH Website - Context & Session Memory

## Workflow Acordado
- Separação entre tarefas visuais e de desenvolvimento
- Primeiro fazemos todas as tarefas visuais de todas as páginas (do início ao fim)
- Depois voltamos à primeira página para fazer o Dev até à última
- Regra Estrita: Para cada tarefa [Visual], desenha diretamente no Paper usando o MCP e para para validação

## Estado Atual do Projeto
- Repositório GitHub criado e ligado ao VS Code
- Next.js ainda não inicializado — projeto a começar do zero
- Nenhuma página construída ainda

## Estado das Tarefas
- Tarefa 01 (Header - Visual): ✅ Instruções definidas, MCP do Paper a configurar

## Instruções do Header (para referência futura)
- Referências Visuais:
  - Estilo do Menu: ficheiro `public/inspo.templates/referencia.menu`
  - Logotipo: ficheiro `public/images/logo.png`
- Fundo: Cor Slate Blue (#6b87a4)
- Layout: NÃO usar menu hambúrguer — links todos visíveis horizontalmente
- Tipografia: Fonte Aileron em branco para o menu, Radnika para o logotipo
- Links: Home, About Us, Portfolio, Contact
- Estado Ativo: sublinhado elegante no link "Home"


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

## Observação
- A estrutura pode nao ser seguida a 100%. Uma ou outra alteração podem ser feitas com o decorrer do projeto ,em função do que fizer mais  sentido para o mesmo. Se for esse o caso, fazz as alterações necessárias no spec.md para manter a nossa pasta atualizada e para não te confundires
