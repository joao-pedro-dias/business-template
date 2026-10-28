# Dra. Priscila Carvalho — Advocacia

Website institucional, mobile first, da Dra. Priscila Carvalho. O projecto mantém a identidade visual, os conteúdos e as fotografias originais, com navegação adaptada a dispositivos móveis e páginas dedicadas às áreas de serviço.

## Tecnologias

- HTML5, CSS3 e JavaScript sem framework de aplicação.
- Bootstrap 5 para grelha, componentes e navegação.
- Fontes DM Sans e Lora, servidas pelo Google Fonts.
- Imagens WebP responsivas, com imagens originais como alternativa.
- Incorporação do Google Maps para apresentar a localização.

O site é estático e não necessita de instalação de dependências nem de um processo de compilação.

## Estrutura

```text
.
├── index.html                 # Página inicial e secções institucionais
├── style.css                  # Estilos do site e regras responsivas
└── assets/
    ├── css/                   # Bootstrap e estilos de terceiros usados
    ├── images/
    │   ├── header/            # Fotografias originais
    │   └── optimized/         # Variantes WebP responsivas
    ├── js/                    # Bootstrap e interacções do site
    └── pages/                 # Páginas individuais dos serviços
```

## Executar localmente

Com Python instalado, abra o terminal na pasta do projecto e execute:

```powershell
py -m http.server 8765
```

Depois, abra [http://localhost:8765](http://localhost:8765). Para terminar o servidor, prima `Ctrl+C` no terminal. Também pode usar uma extensão de servidor local no editor de código.

## Publicar

O site pode ser servido por qualquer alojamento de ficheiros estáticos. Para GitHub Pages, configure a publicação a partir do ramo `main`, na pasta raiz (`/`). Não é necessário executar uma etapa de build.

## Manutenção

- Mantenha `index.html`, `style.css` e os caminhos em `assets/` na raiz publicada.
- Ao substituir fotografias, actualize as variantes em `assets/images/optimized/` e mantenha um fallback válido no HTML.
- As páginas individuais dos serviços estão em `assets/pages/` e partilham os estilos de `style.css`.
- O mapa, os links de contacto e os recursos externos dependem de ligação à Internet.
