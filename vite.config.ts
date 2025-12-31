import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import license from "rollup-plugin-license";
import path from "path";

export default defineConfig({
    plugins: [
        sveltekit(),
        license({
            thirdParty: {
                output: {
                    file: path.resolve("static", "THIRD-PARTY-LICENSES.txt"),
                    template(dependencies) {
                        return dependencies
                            .map((dep) => {
                                const repo =
                                    typeof dep.repository === "string"
                                        ? dep.repository
                                        : dep.repository?.url
                                              ?.replace(/^git\+/, "")
                                              .replace(/\.git$/, "");
                                const author =
                                    typeof dep.author === "string" ? dep.author : dep.author?.name;
                                return (
                                    `${dep.name} ${dep.version}\n` +
                                    `License: ${dep.license}\n` +
                                    (author ? `Author: ${author}\n` : "") +
                                    (repo ? `Repository: ${repo}\n` : "") +
                                    `\n${dep.licenseText || "See package for license details."}\n`
                                );
                            })
                            .join("\n" + "=".repeat(70) + "\n\n");
                    },
                },
            },
        }),
    ],
    esbuild: {
        legalComments: "inline",
    },
    test: {
        include: ["src/**/*.{test,spec}.{js,ts}"],
        environment: "jsdom",
        globals: true,
    },
});
