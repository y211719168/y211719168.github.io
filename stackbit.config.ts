import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["source"],
      models: [
        {
          name: "Post",
          label: "Blog Post",
          type: "page",
          filePath: "source/_posts/{slug}.md",
          urlPath: "/{slug}",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "date", type: "date", required: true },
            { name: "tags", type: "list", items: { type: "string" } },
            { name: "body", type: "markdown" }
          ]
        }
      ]
    })
  ]
});
