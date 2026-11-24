# ✨ Géssica Sampaio Advocacia

> Landing page institucional criada para acolher famílias, explicar direitos de forma simples e facilitar o primeiro contato com a equipe jurídica.

<p align="center">
  <strong>BPC/LOAS · Pessoa com deficiência · Autismo</strong><br>
  <sub>Atendimento presencial e online</sub>
</p>

---

## 🌷 Sobre o projeto

Esta página apresenta o trabalho da **Géssica Sampaio Advocacia**, com foco em benefícios do INSS e na defesa dos direitos de pessoas com deficiência e autistas.

O site foi pensado para transmitir confiança e acolhimento desde o primeiro acesso. A navegação conduz o visitante por uma jornada clara:

1. Identificação da necessidade;
2. Conhecimento das áreas de atuação;
3. Explicação de como funciona o atendimento;
4. Apresentação da Dra. Géssica e do Projeto Abraço Atípico;
5. Esclarecimento das dúvidas mais comuns;
6. Envio das informações iniciais pelo WhatsApp.

## 🎯 Objetivos

- Comunicar os serviços jurídicos com linguagem acessível;
- Orientar famílias sobre BPC/LOAS e benefícios do INSS;
- Fortalecer a presença digital do escritório;
- Oferecer atendimento inicial rápido e humanizado;
- Facilitar o contato por WhatsApp sem necessidade de backend;
- Funcionar bem em computadores, tablets e celulares.

## 🧩 Funcionalidades

| Recurso | Descrição |
| --- | --- |
| **Navegação por seções** | Menu com acesso rápido a áreas, atendimento, apresentação e dúvidas. |
| **Design responsivo** | Layout adaptado para diferentes tamanhos de tela. |
| **Formulário de triagem** | Coleta os dados essenciais para uma primeira análise do caso. |
| **Integração com WhatsApp** | Monta uma mensagem automaticamente e abre o atendimento no número do escritório. |
| **Carrossel de depoimentos** | Exibe os relatos de forma horizontal, com rolagem automática e interação por arraste. |
| **FAQ expansível** | Perguntas e respostas organizadas com elementos nativos `<details>`. |
| **Aviso de privacidade** | Explica o uso das informações enviadas no formulário. |
| **Acessibilidade inicial** | Uso de textos alternativos, foco visível e estrutura semântica. |
| **SEO básico** | Título, descrição, idioma e viewport configurados no HTML. |

## 🗂️ Estrutura

```text
gessicaSampaioLP/
├── index.html   # Estrutura e conteúdo da landing page
├── styles.css   # Identidade visual, layout e responsividade
├── script.js    # Formulário, WhatsApp e carrossel de depoimentos
└── README.md    # Documentação do projeto
```

## 🎨 Identidade visual

O visual combina tons suaves e profissionais para criar uma experiência acolhedora:

- **Azul profundo:** confiança, segurança e seriedade;
- **Azul claro:** leveza e tranquilidade;
- **Dourado:** destaque, cuidado e sofisticação;
- **Branco:** clareza e respiro visual.

As fontes utilizadas são:

- **Poppins:** títulos de interface, botões, navegação e formulários;
- **EB Garamond:** textos editoriais e elementos de maior proximidade.

As fontes são carregadas do Google Fonts no arquivo [`index.html`](./index.html).

## 🚀 Como executar

O projeto é estático e não precisa de instalação de dependências.

### Opção 1: abrir diretamente

Abra o arquivo [`index.html`](./index.html) no navegador.

### Opção 2: usar um servidor local

Para uma experiência mais próxima da publicação, use qualquer servidor HTTP local. Por exemplo, com Python:

```bash
python -m http.server 8000
```

Depois, acesse:

```text
http://localhost:8000
```

> Um servidor local é recomendado para validar carregamento de imagens, fontes externas e o comportamento completo da página.

## ✏️ Personalização

### Conteúdo

Edite textos, links, endereços, contatos e perguntas diretamente no [`index.html`](./index.html).

### Cores e layout

As principais cores estão centralizadas em variáveis no início do [`styles.css`](./styles.css):

```css
:root {
  --azul: #A7C7E7;
  --azul-claro: #EAF2FA;
  --azul-escuro: #1F3A5F;
  --dourado: #F4E1B6;
}
```

### Formulário e WhatsApp

O formulário não envia dados para um servidor. Ao ser preenchido, o [`script.js`](./script.js) valida os campos obrigatórios, organiza as informações e abre uma conversa no WhatsApp configurado.

Se o número de atendimento mudar, atualize:

1. O link do WhatsApp no [`index.html`](./index.html);
2. O número usado na função de envio do [`script.js`](./script.js).

## ✅ Checklist antes da publicação

- [ ] Confirmar telefone e links de redes sociais;
- [ ] Validar endereços e links do Google Maps;
- [ ] Revisar textos, credenciais e informações jurídicas;
- [ ] Testar o formulário em celular e desktop;
- [ ] Conferir se o WhatsApp abre com a mensagem correta;
- [ ] Verificar todas as imagens e textos alternativos;
- [ ] Testar os links externos;
- [ ] Publicar com HTTPS;
- [ ] Configurar domínio e favicon no ambiente definitivo.

## 📌 Observações

- A página é uma interface de apresentação e triagem inicial; ela não substitui uma análise jurídica individualizada.
- O funcionamento do envio depende do WhatsApp estar disponível no dispositivo ou navegador.
- Fontes e alguns recursos visuais dependem de conexão com a internet quando o site é aberto em produção.

---

<p align="center">
  Feito com cuidado para comunicar direitos com clareza, acolhimento e confiança. 💙
</p>
