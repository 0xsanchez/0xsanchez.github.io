let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Tokyo, Japan',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#fabd2f",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      n: ["https://next-episode.net/search/?name=", "Next Episode"],
      p: ["https://pstream.org/browse/", "Pstream"],
      t: ["https://1337x.to/search/", "1337x"],
      c: ["https://github.com/search?q", "Github"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  // fastlink: "./download/curriculum.pdf",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "search",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [{
        name: "Common",
        links: [
          {
            name: "youtube",
            url: "https://youtube.com",
            icon: "brand-youtube",
            icon_color: "#ea6962",
          },
          {
            name: "github",
            url: "https://github.com",
            icon: "brand-github",
            icon_color: "#ffffff",
          },
          {
            name: "discord",
            url: "https://discord.com",
            icon: "brand-discord",
            icon_color: "#5865f2"
          },
        ],
      }, {
        name: "Tools",
        links: [
          {
            name: "httpie",
            url: "https://httpie.io/",
            icon: "box",
            icon_color: "#09b665",
          },
          {
            name: "excalidraw",
            url: "https://excalidraw.com/",
            icon: "scribble",
            icon_color: "#fabd2f",
          },
          {
            name: "deepseek",
            url: "https://chat.deepseek.com/",
            icon: "robot",
            icon_color: "#ff8da1",
          },
        ],
      },
      {
        name: "Piracy",
        links: [
          {
            name: "1337x",
            url: "https://1337x.to/",
            icon: "download",
            icon_color: "#e78a4e",
          },
          {
            name: "pstream",
            url: "https://pstream.org/",
            icon: "masks-theater",
            icon_color: "#add2fc",
          },
          {
            name: "megathread",
            url: "https://rentry.org/megathread",
            icon: "list-search",
            icon_color: "#b16886",
          },
        ],
      },
      ],
    },
    {
      name: "learn",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "systems",
          links: [
            {
              name: "aws",
              url: "https://aws.amazon.com",
              icon: "brand-amazon",
              icon_color: "#e78a4e",
            },
            {
              name: "arch",
              url: "https://archlinux.org",
              icon: "pacman",
              icon_color: "#add2fc",
            },
            {
              name: "openbsd",
              url: "https://openbsd.org",
              icon: "sparkles",
              icon_color: "#fabd2f",
            },
            {
              name: "internals",
              url: "./download/internals.pdf",
              icon: "heart",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "programming",
          links: [
            {
              name: "amd64",
              url: "download/amd64.pdf",
              icon: "binary",
              icon_color: "#09b665",
            },
            {
              name: "golang",
              url: "https://go.dev/doc/effective_go",
              icon: "code",
              icon_color: "#ea6962",
            },
            {
              name: "sql",
              url: "https://sqlbolt.com/",
              icon: "database",
              icon_color: "#b16886",
            },
            {
              name: "regex",
              url: "https://regexone.com/",
              icon: "regex",
              icon_color: "#e78a4e",
            },
          ],
        }, {
          name: "economics",
          links: [
            {
              name: "mmm",
              url: "https://www.mrmoneymustache.com/",
              icon: "moustache",
              icon_color: "#fabd2f",
            },
            {
              name: "bogleheads",
              url: "https://www.bogleheads.org/",
              icon: "book",
              icon_color: "#5865f2"
            },
            {
              name: "s&p",
              url: "https://www.google.com/finance/quote/.INX:INDEXSP",
              icon: "coin-yen",
              icon_color: "#09b665",
            },
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "links",
          links: [
            {
              name: "github",
              url: "https://github.com/0xsanchez",
              icon: "brand-github",
              icon_color: "#ffffff",
            },
            // {
            //   name: "channel",
            //   url: "",
            //   icon: "brand-youtube",
            //   icon_color: "#ea6962",
            // },
            // {
            //   name: "server",
            //   url: "",
            //   icon: "brand-discord",
            //   icon_color: "#5865f2"
            // },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function () {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
