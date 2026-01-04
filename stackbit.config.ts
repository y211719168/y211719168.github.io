import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,

      // Hexo 的内容目录
      contentDirs: ["source"],

      models: [
        {
          name: "Post",
          label: "Blog Post",
          type: "page",

          // Hexo 文章真实位置
          filePath: "source/_posts/{slug}.md",

          // 只用于「预览映射」，不影响 Hexo 真正路由
          urlPath: "/{year}/{month}/{day}/{slug}",

          fields: [
            {
              name: "title",
              type: "string",
              required: true
            },
            {
              name: "date",
              type: "date",
              required: true
            },
            {
              name: "categories",
              type: "list",
              items: { type: "string" }
            },
            {
              name: "tags",
              type: "list",
              items: { type: "string" }
            },
            {
              name: "body",
              type: "markdown"
            }
          ]
        }
      ]
    })
  ]
});

