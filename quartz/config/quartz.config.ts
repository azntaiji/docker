import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Zach Taiji's Wiki",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    locale: "en-US",
    baseUrl: "wiki.zachtaiji.com",
    ignorePatterns: ["_debug_remotely_save", "archive", "groceries", "private", "system/templates", "system/templater", ".obsidian", "canvas", "system/misc", "system/snippets", "system/scripts", "dailies", ".trash", ".obsidian-mobile"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: {
          name: "JetBrains Mono",
          weights: [500, 700],
          includeItalic: true,
        },
        body: "JetBrains Mono",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#D8DEE9",
          gray: "#898989",
          darkgray: "#2E3440",
          dark: "#2E3440",
          secondary: "#5D80AC",
          tertiary: "#2f4969ff",
          highlight: "#ECEFF4",
          textHighlight: "#EFD7CF",
        },
        darkMode: {
          light: "#22212C",
          lightgray: "#7970A9",
          gray: "#3E3D46",
          darkgray: "#FFFFFF",
          dark: "#9580FF",
          secondary: "#80FFEA",
          tertiary: "#57b4a4",
          highlight: "#FF80BF",
          textHighlight: "#FCFC7E",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "dracula",
        },
        keepBackground: true,
      }),
      Plugin.ObsidianFlavoredMarkdown({ 
        enableInHtmlEmbed: true, 
        highlight: true,
        enableCheckbox: true
      }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({
        markdownLinkResolution: "shortest",
        externalLinkIcon: true,
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [Plugin.ExplicitPublish()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
